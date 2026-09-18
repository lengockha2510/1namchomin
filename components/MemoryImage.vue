<template>
  <div class="memory-image">
    <!-- Có ảnh -->
    <img
      v-if="memoryImage"
      :src="memoryImage"
      alt="Ảnh kỷ niệm 1 năm"
    >

    <!-- Chưa có ảnh -->
    <label
      v-else
      for="memory-upload"
      class="upload-placeholder"
    >
      <span class="upload-icon">📷</span>

      <strong>Thêm ảnh kỷ niệm</strong>

      <small>Nhấn để chọn ảnh từ máy</small>
    </label>

    <!-- Đổi ảnh -->
    <label
      v-if="memoryImage"
      for="memory-upload"
      class="change-image"
      title="Đổi ảnh"
    >
      📷
    </label>

    <!-- Xóa ảnh -->
    <button
      v-if="memoryImage"
      class="remove-image"
      title="Xóa ảnh"
      @click="removeImage"
    >
      ×
    </button>

    <input
      id="memory-upload"
      type="file"
      accept="image/*"
      hidden
      @change="handleImageUpload"
    >
  </div>
</template>

<script setup lang="ts">
const {
  memoryImage,
  handleImageUpload,
  removeImage
} = useMemoryImage()
</script>

<style scoped>
.memory-image {
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  background: #f4f4f4;
}

.memory-image img {
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

.change-image {
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ff4d6d;
  color: white;
  font-size: 22px;
  cursor: pointer;
}

.remove-image {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  font-size: 24px;
  cursor: pointer;
}
</style>