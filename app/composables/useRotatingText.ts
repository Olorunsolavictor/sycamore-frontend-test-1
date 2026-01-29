import { ref, onMounted, onUnmounted } from 'vue'

export function useRotatingText(
  words: string[],
  interval = 3000
) {
  const index = ref(0)
  const progress = ref(0)

  let timer: number
  let progressTimer: number

  const start = () => {
    progress.value = 0

    progressTimer = window.setInterval(() => {
      progress.value += 100 / (interval / 50)
      if (progress.value >= 100) progress.value = 100
    }, 50)

    timer = window.setInterval(() => {
      index.value = (index.value + 1) % words.length
      progress.value = 0
    }, interval)
  }

  onMounted(start)

  onUnmounted(() => {
    clearInterval(timer)
    clearInterval(progressTimer)
  })

  return {
    currentWord: () => words[index.value],
    progress
  }
}
