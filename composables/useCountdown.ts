import { ref, onMounted, onUnmounted } from 'vue'

export const useCountdown = () => {
  // Ngày bắt đầu yêu nhau
  const startDate = new Date(2025, 9, 9, 0, 0, 0).getTime()
  // Tháng trong JavaScript: 0 = Jan, 9 = October

  const day = ref(0)
  const hour = ref(0)
  const minute = ref(0)
  const second = ref(0)

  let timer: ReturnType<typeof setInterval>

  const update = () => {
    const now = Date.now()
    const diff = now - startDate

    day.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hour.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
    minute.value = Math.floor((diff / (1000 * 60)) % 60)
    second.value = Math.floor((diff / 1000) % 60)
  }

  onMounted(() => {
    update()
    timer = setInterval(update, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  return {
    day,
    hour,
    minute,
    second
  }
}