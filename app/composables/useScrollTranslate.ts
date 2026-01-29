import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollTranslate(
  startOffset = 10
) {
  const el: Ref<HTMLElement | null> = ref(null)
  const container: Ref<HTMLElement | null> = ref(null)
  const translateY = ref(startOffset)

  let startScrollY: number | null = null
  let rafId = 0

  const onScroll = () => {
    rafId = requestAnimationFrame(() => {
      if (!container.value) return

      const rect = container.value.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (rect.bottom <= viewportHeight && startScrollY === null) {
        startScrollY = window.scrollY
      }

      if (startScrollY === null) return

      const delta = window.scrollY - startScrollY
      translateY.value = Math.max(startOffset - delta * 0.8, 0)

    })
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(rafId)
  })

  return { el, container, translateY }
}
