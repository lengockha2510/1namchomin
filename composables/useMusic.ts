import { ref, onUnmounted } from 'vue'

export const useMusic = () => {
  const audio = ref<HTMLAudioElement | null>(null)
  const playing = ref(false)

  const setAudio = (element: HTMLAudioElement | null) => {
    audio.value = element
  }

  const play = async () => {
    if (!audio.value) return

    try {
      await audio.value.play()
      playing.value = true
    } catch (error) {
      console.error('Không thể phát nhạc:', error)
      playing.value = false
    }
  }

  const pause = () => {
    if (!audio.value) return

    audio.value.pause()
    playing.value = false
  }

  const toggle = async () => {
    if (playing.value) {
      pause()
    } else {
      await play()
    }
  }

  onUnmounted(() => {
    if (audio.value) {
      audio.value.pause()
      audio.value.currentTime = 0
    }
  })

  return {
    audio,
    playing,
    setAudio,
    play,
    pause,
    toggle
  }
}