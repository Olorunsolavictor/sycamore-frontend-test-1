<script setup lang="ts">
import GreenString1 from "@/assets/images/hero-section/svgs/green-string-1.svg"
import GreenString2 from "@/assets/images/hero-section/svgs/green-string-2.svg"
import { useRotatingText } from '@/composables/useRotatingText'
const { currentWord, progress } = useRotatingText(
  ['Accountable', 'Unbeatable', 'Easier'],
  5000
)
const { videoRef, isPlaying, toggle } = useVideoControl()
</script>

<template>
  <section
    class="relative w-full min-h-[94vh] overflow-hidden flex justify-center items-center bg-[#1f2334] px-2 py-[32%] md:p-20">
    <div class="container w-full h-full px-2  md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
      <div class="relative   z-10">
        <h1 class="text-4xl md:text-6xl md:leading-relaxed font-sans font-bold leading-relaxed text-white">
          Financial Security <br />
          Made
          <span class="relative inline-block text-green-secondary">
            {{ currentWord() }}

            <span class="absolute left-0 -bottom-1 h-2 bg-green-secondary transition-[width]"
              :style="{ width: progress + '%' }" />
          </span>

        </h1>

        <p class="mt-6 max-w-lg text-gray-300">
          Staco is the dedicated platform for human management that helps
          to grow your startup business quickly
        </p>

        <div class="mt-10 flex items-center gap-6">
          <AppButton :title="`Get started for free`"
            class="rounded-full bg-green-primary px-4 md:px-8 md:py-4 py-3 md:text-base text-xs font-semibold text-white hover:bg-green-secondary hover:text-black ease-in-out duration-300 transition-all">
            Get Start For Free
          </AppButton>

          <AppButton :title="`Let's talk`" class="group flex items-center gap-2 px-4 md:px-8 md:py-4 py-3 md:text-base text-xs 
         text-white font-medium transition-colors duration-300
         hover:text-green-primary">
            Let’s talk

            <span class="flex h-8 w-8 items-center justify-center rounded-full
           bg-white/10 text-white
           transition-all duration-300
           group-hover:bg-green-primary
           group-hover:text-primary-dark
           group-hover:rotate-[-30deg]">
              →
            </span>
          </AppButton>

        </div>
      </div>

      <div class="relative">
        <div class="relative z-10 overflow-hidden  rounded-[30px] shadow-2xl bg-black/20">

          <video ref="videoRef" muted loop playsinline>
            <source src="/videos/introduction.mp4" type="video/mp4" />
          </video>

          <AppButton @click="toggle" :loading="false" textStyle="text-lg font-bold"
            :title="isPlaying ? 'Pause' : 'Play'"
            class="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-secondary shadow-lg"
            aria-label="Toggle video">
            <span v-if="isPlaying">❚❚</span>
            <span v-else>▶</span>
          </AppButton>



        </div>
        <img :src="GreenString1" alt="Green string 1" class="absolute top-4 hidden md:block">
        <img :src="GreenString2" alt="Green string 2" class="absolute -top-[300px] -left-[60px] z-20 hidden md:block">
      </div>
    </div>


    <div class="pointer-events-none absolute left-20 top-32 h-6 w-6 rounded-full bg-green-400/40 hidden md:block" />
    <div class="pointer-events-none absolute left-40 top-64 h-4 w-4 rounded-full bg-green-400/30 hidden md:block" />
  </section>
</template>
