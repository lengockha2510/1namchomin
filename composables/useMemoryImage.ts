import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'one-year-memory-image'

export const useMemoryImage = () => {
  const memoryImage = ref<string | null>(null)

  const loadImage = () => {
    if (!import.meta.client) return

    memoryImage.value = localStorage.getItem(STORAGE_KEY)
  }

  const handleImageUpload = (event: Event) => {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]

    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh')
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      const image = reader.result as string

      memoryImage.value = image

      if (import.meta.client) {
        localStorage.setItem(STORAGE_KEY, image)
      }
    }

    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    memoryImage.value = null

    if (import.meta.client) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  onMounted(() => {
    loadImage()
  })

  return {
    memoryImage,
    handleImageUpload,
    removeImage
  }
}