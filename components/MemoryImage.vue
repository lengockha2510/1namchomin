
<template>
  <div class="memory-image">
    <!-- Ảnh đã lưu -->
    <img
      v-if="memoryImage"
      class="saved-image"
      :src="memoryImage"
      alt="Ảnh kỷ niệm một năm"
    />

    <!-- Khung trống khi chưa có ảnh -->
    <label
      v-else
      :for="inputId"
      class="upload-placeholder"
    >
      <span class="upload-icon">📷</span>
      <strong>Thêm ảnh kỷ niệm</strong>
      <small>Nhấn để chọn ảnh từ máy</small>
    </label>

    <!-- Đổi ảnh -->
    <label
      v-if="memoryImage"
      :for="inputId"
      class="change-image"
      title="Đổi ảnh"
    >
      📷
    </label>

    <!-- Xóa ảnh -->
    <button
      v-if="memoryImage"
      type="button"
      class="remove-image"
      title="Xóa ảnh"
      @click="removeImage"
    >
      ×
    </button>

    <!-- Input chọn ảnh -->
    <input
      :id="inputId"
      type="file"
      accept="image/*"
      hidden
      @change="handleImageUpload"
    />

    <!-- Giao diện căn chỉnh -->
    <Teleport to="body">
      <div
        v-if="showEditor"
        class="editor-overlay"
        @click.self="cancelCrop"
      >
        <div class="editor-modal">
          <div class="editor-header">
            <h3>Căn chỉnh ảnh 💗</h3>

            <button
              type="button"
              class="close-button"
              @click="cancelCrop"
            >
              ×
            </button>
          </div>

          <p class="editor-description">
            Kéo ảnh để căn vị trí phù hợp với khung kỷ niệm.
          </p>

          <!-- Cropper sẽ được khởi tạo phía trình duyệt -->
          <div class="crop-container">
            <img
              ref="cropImage"
              :src="pendingImage"
              alt="Ảnh đang căn chỉnh"
            />
          </div>

          <div class="zoom-controls">
            <button
              type="button"
              title="Thu nhỏ"
              @click="zoom(-0.1)"
            >
              −
            </button>

            <span>Thu nhỏ / Phóng to</span>

            <button
              type="button"
              title="Phóng to"
              @click="zoom(0.1)"
            >
              +
            </button>
          </div>

          <p class="crop-tip">
            💡 Bạn có thể kéo ảnh bằng chuột hoặc ngón tay.
          </p>

          <div class="editor-actions">
            <button
              type="button"
              class="cancel-btn"
              @click="cancelCrop"
            >
              Hủy
            </button>

            <button
              type="button"
              class="save-btn"
              :disabled="saving"
              @click="saveCrop"
            >
              {{ saving ? 'Đang lưu...' : 'Lưu ảnh ❤️' }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const props = withDefaults(
  defineProps<{
    storageKey?: string
  }>(),
  {
    storageKey: 'one-year-memory-image'
  }
)

const memoryImage = ref<string | null>(null)
const pendingImage = ref('')
const showEditor = ref(false)
const saving = ref(false)

const cropImage = ref<HTMLImageElement | null>(null)

const inputId = computed(
  () => `upload-${props.storageKey}`
)

let cropper: Cropper | null = null
let editorToken = 0

// Đọc ảnh đã lưu. Chỉ chạy phía trình duyệt.
onMounted(() => {
  try {
    memoryImage.value = localStorage.getItem(
      props.storageKey
    )
  } catch {
    console.warn('Không thể đọc ảnh đã lưu.')
  }
})

// Khởi tạo Cropper chỉ khi mở trình chỉnh sửa.
// Không import CropperJS runtime ở cấp module.
watch(showEditor, async (visible) => {
  const token = ++editorToken

  if (!visible || !import.meta.client) {
    destroyCropper()
    return
  }

  await nextTick()

  const image = cropImage.value

  if (!image) return

  try {
    const { default: CropperJS } = await import('cropperjs')

    // Người dùng có thể đã đóng editor trong lúc tải thư viện.
    if (
      token !== editorToken ||
      !showEditor.value ||
      !cropImage.value
    ) {
      return
    }

    destroyCropper()

    cropper = new CropperJS(image, {
      aspectRatio: 1,
      viewMode: 1,
      dragMode: 'move',
      autoCropArea: 1,
      responsive: true,
      background: false,
      guides: true,
      center: true,
      movable: true,
      zoomable: true,
      zoomOnWheel: true,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      minContainerWidth: 200,
      minContainerHeight: 220
    })
  } catch (error) {
    console.error('Không thể khởi tạo Cropper:', error)
    alert('Không thể mở công cụ căn chỉnh ảnh. Vui lòng thử lại.')
    closeEditor()
  }
})

function destroyCropper() {
  if (cropper) {
    cropper.destroy()
    cropper = null
  }
}

function handleImageUpload(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (!file) return

  // Cho phép chọn lại cùng một ảnh ở lần sau.
  input.value = ''

  if (!file.type.startsWith('image/')) {
    alert('Vui lòng chọn một file ảnh hợp lệ.')
    return
  }

  if (file.size > 10 * 1024 * 1024) {
    alert('Ảnh phải nhỏ hơn 10 MB.')
    return
  }

  const reader = new FileReader()

  reader.onload = () => {
    if (typeof reader.result !== 'string') {
      alert('Không thể đọc file ảnh.')
      return
    }

    pendingImage.value = reader.result
    showEditor.value = true
  }

  reader.onerror = () => {
    alert('Đọc ảnh thất bại. Vui lòng thử lại.')
  }

  reader.readAsDataURL(file)
}

function zoom(amount: number) {
  if (!cropper) return

  cropper.zoom(amount)
}

function saveCrop() {
  if (!cropper || saving.value) return

  saving.value = true

  try {
    const canvas = cropper.getCroppedCanvas({
      width: 1000,
      height: 1000,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
      fillColor: '#ffffff'
    })

    if (!canvas) {
      alert('Không thể cắt ảnh. Vui lòng thử lại.')
      return
    }

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          saving.value = false
          alert('Không thể tạo ảnh. Vui lòng thử lại.')
          return
        }

        const reader = new FileReader()

        reader.onload = () => {
          if (typeof reader.result !== 'string') {
            saving.value = false
            alert('Không thể đọc ảnh đã cắt.')
            return
          }

          const result = reader.result

          try {
            localStorage.setItem(props.storageKey, result)
            memoryImage.value = result
            closeEditor()
          } catch (error) {
            console.error('Lưu ảnh thất bại:', error)
            alert(
              'Không đủ dung lượng lưu ảnh trong trình duyệt. ' +
              'Hãy thử ảnh nhỏ hơn hoặc dùng dịch vụ lưu ảnh.'
            )
          } finally {
            saving.value = false
          }
        }

        reader.onerror = () => {
          saving.value = false
          alert('Không thể xử lý ảnh đã cắt.')
        }

        reader.readAsDataURL(blob)
      },
      'image/jpeg',
      0.85
    )
  } catch (error) {
    console.error('Cắt ảnh thất bại:', error)
    saving.value = false
    alert('Có lỗi khi cắt ảnh. Vui lòng thử lại.')
  }
}

function closeEditor() {
  editorToken++
  destroyCropper()
  showEditor.value = false
  pendingImage.value = ''
}

function cancelCrop() {
  closeEditor()
}

function removeImage() {
  if (!confirm('Bạn có chắc muốn xóa ảnh kỷ niệm này?')) {
    return
  }

  try {
    localStorage.removeItem(props.storageKey)
    memoryImage.value = null
  } catch {
    alert('Không thể xóa ảnh đã lưu.')
  }
}

onBeforeUnmount(() => {
  editorToken++
  destroyCropper()
})
</script>

<style scoped>
.memory-image {
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #fff8f9, #f4f4f4);
}

.saved-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.upload-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  color: #777;
  background: linear-gradient(135deg, #fff8f9, #f4f4f4);
  transition: background 0.25s;
}

.upload-placeholder:hover {
  background: #fff0f3;
}

.upload-icon {
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ff4d6d;
  font-size: 28px;
  box-shadow: 0 10px 25px rgba(255, 77, 109, 0.3);
}

.upload-placeholder strong {
  font-size: 18px;
}

.upload-placeholder small {
  color: #999;
}

.change-image,
.remove-image {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 2;
}

.change-image {
  right: 15px;
  bottom: 15px;
  width: 48px;
  height: 48px;
  background: #ff4d6d;
  font-size: 22px;
  box-shadow: 0 8px 20px rgba(255, 77, 109, 0.3);
}

.remove-image {
  top: 12px;
  right: 12px;
  width: 35px;
  height: 35px;
  background: rgba(0, 0, 0, 0.55);
  font-size: 24px;
}

/* Editor hiển thị trên toàn màn hình */
.editor-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.72);
}

.editor-modal {
  width: 100%;
  max-width: 520px;
  max-height: 92dvh;
  overflow-y: auto;
  padding: 22px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.25);
}

.editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.editor-header h3 {
  margin: 0;
  color: #ff4d6d;
  font-size: 22px;
}

.close-button {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #fff0f3;
  color: #ff4d6d;
  font-size: 25px;
  cursor: pointer;
  flex-shrink: 0;
}

.editor-description {
  margin: 10px 0 18px;
  color: #777;
  font-size: 14px;
  line-height: 1.6;
}

.crop-container {
  width: 100%;
  height: min(55vh, 400px);
  min-height: 220px;
  overflow: hidden;
  background: #f4f4f4;
}

.crop-container img {
  display: block;
  max-width: 100%;
}

.zoom-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 18px;
}

.zoom-controls button {
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: #fff0f3;
  color: #ff4d6d;
  font-size: 25px;
  cursor: pointer;
}

.zoom-controls span {
  color: #777;
  font-size: 13px;
}

.crop-tip {
  margin: 14px 0 0;
  color: #999;
  text-align: center;
  font-size: 12px;
}

.editor-actions {
  display: flex;
  gap: 12px;
  margin-top: 22px;
}

.editor-actions button {
  flex: 1;
  padding: 13px 16px;
  border: none;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.cancel-btn {
  background: #f0f0f0;
  color: #555;
}

.save-btn {
  background: #ff4d6d;
  color: white;
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: wait;
}

@media (max-width: 480px) {
  .editor-overlay {
    padding: 12px;
  }

  .editor-modal {
    padding: 16px;
  }

  .editor-header h3 {
    font-size: 19px;
  }

  .zoom-controls {
    gap: 8px;
  }
}
</style>