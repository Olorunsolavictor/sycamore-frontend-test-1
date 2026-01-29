<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { whyChooseUs } from '~/data/whychooseUs'

const activeIndex = ref(0)
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % whyChooseUs.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>



<template>
  <section class="grid  py-12 md:py-24 bg-white  font-sans grid-cols-1 px-4 md:px-[9%] lg:grid-cols-2 gap-16 items-center">
    <div>
      <p class="md:text-sm text-xs font-semibold tracking-widest text-green-500">
        {{ whyChooseUs[activeIndex]?.header }}
      </p>

      <h2 class="mt-4 md:text-[40px] text-[36px] md:leading-[50px] leading-tight  font-bold text-gray-900">
        {{ whyChooseUs[activeIndex]?.title }}
      </h2>

      <p class="mt-6 text-gray-600  leading-relaxed">
        {{ whyChooseUs[activeIndex]?.description }}
      </p>

      <ul class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li v-for="feature in whyChooseUs[activeIndex]?.features" :key="feature"
          class="flex items-center gap-2 text-gray-700">
          <span class="text-green-500 ">✔</span>
          {{ feature }}
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-6 h-[420px]">
      <div v-for="(item, index) in whyChooseUs" :key="index"
        class="relative h-full rounded-3xl overflow-hidden transition-all duration-700" :class="index === activeIndex
          ? 'w-[60%]'
          : 'w-[20%] opacity-70'
          ">
        <img :src="item.image" class="h-full w-full object-cover" alt="" />

        <div v-if="index === activeIndex"
          class="absolute bottom-4 rounded  left-4 h-2 z-20 bg-white/40 animate-progress" />
      </div>
    </div>
  </section>


</template>