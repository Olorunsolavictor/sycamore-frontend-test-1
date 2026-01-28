export function useAutoSlider(length: number, interval = 3000) {
  const activeIndex = ref(0)

  let timer: ReturnType<typeof setInterval> | null = null

  const start = () => {
    stop()
    timer = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % length
    }, interval)
  }

  const stop = () => {
    if (timer) clearInterval(timer)
  }

  onMounted(start)
  onBeforeUnmount(stop)

  return {
    activeIndex,
  }
}
