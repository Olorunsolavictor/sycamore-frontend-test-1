<script setup lang="ts">
defineProps<{
    icon: string
    title: string
    description: string
}>()
</script>

<template>
  <div
    class="flex flex-col justify-between group rounded-[30px] bg-gray-100 p-10 transition-colors hover:bg-gray-200/70 cursor-pointer"
  >
    <div
      class="flex size-fit items-center justify-center rounded-[30px] bg-white shadow transition-transform group-hover:scale-105"
    >
      <NuxtImg :src="icon" alt="icon" width="50" height="50" />
    </div>

    <div class="mt-6">
      <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
      <p class="mt-4 text-gray-800 font-medium leading-relaxed">{{ description }}</p>
    </div>

    <div class="mt-[70px] flex items-center justify-between">
      <span
        class="font-medium text-gray-700 transition-colors group-hover:text-[#44c486]"
      >
        Learn more
      </span>

      <span
        class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 group-hover:bg-[#44c486] group-hover:text-white transition-transform duration-300 origin-center group-hover:rotate-[-30deg]"
      >
        →
      </span>
    </div>
  </div>
</template>

