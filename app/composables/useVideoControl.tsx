// composables/useVideoControl.ts
import { ref, onMounted } from 'vue'

export function useVideoControl() {
  const videoRef = ref<HTMLVideoElement | null>(null)
  const isPlaying = ref(false)

  const play = () => {
    if (!videoRef.value) return
    videoRef.value.play()
    isPlaying.value = true
  }

  const pause = () => {
    if (!videoRef.value) return
    videoRef.value.pause()
    isPlaying.value = false
  }

  const toggle = () => {
    if (!videoRef.value) return
    videoRef.value.paused ? play() : pause()
  }

  onMounted(() => {
    if (videoRef.value && !videoRef.value.paused) {
      isPlaying.value = true
    }
  })

  return {
    videoRef,
    isPlaying,
    play,
    pause,
    toggle
  }
}
