<script setup lang="ts">
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  title?: string
  disabled?: boolean
  text?: string
  textStyle?: string
  loading?: boolean
}

const props = defineProps<ButtonProps>()
const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <button
    :type="props.type || 'button'"
    :title="props.title"
    :disabled="isDisabled"
    class="flex items-center justify-center cursor-pointer 
           disabled:opacity-50 disabled:cursor-not-allowed
           transition-transform duration-200 ease-out
           hover:scale-[102%] active:scale-95"
  >
    <template v-if="props.loading">
      <div class="loader"></div>
    </template>
    <template v-else>
      <p :class="`${props.textStyle || ''} font-sans`">{{ props.text }}</p>
      <slot />
    </template>
  </button>
</template>