<template>
  <div class="music">
    <button
      @click="toggle"
      :title="playing ? 'Tắt nhạc' : 'Bật nhạc'"
    >
      {{ playing ? '🔊' : '🔈' }}
    </button>

    <audio
      ref="audio"
      src="/audio/chominhem.mp3"
      loop
      autoplay
      preload="auto"
      @play="playing = true"
      @pause="playing = false"
    />
  </div>
</template>

<script setup lang="ts">
const { audio, playing, toggle } = useMusic()

onMounted(async () => {
  if (!audio.value) return

  try {
    await audio.value.play()
    playing.value = true
  } catch (error) {
    console.log('Trình duyệt chặn tự động phát nhạc')
    playing.value = false
  }
})
</script>

<style scoped>
.music {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 999;
}

button {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: none;
  font-size: 26px;
  background: #ff4d6d;
  color: white;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
}
</style>