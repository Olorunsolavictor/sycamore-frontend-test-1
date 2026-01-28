<script setup lang="ts">
import GreenString1 from "@/assets/images/hero-section/svgs/green-string-1.svg"
import GreenString2 from "@/assets/images/hero-section/svgs/green-string-2.svg"
</script>


<template>
  <section
    class="relative w-full min-h-screen overflow-hidden flex justify-center items-center bg-[#1f2334] px-2 py-[22%] md:p-20">
    <div class="container w-full h-full  px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
      <div class="relative   z-10">
        <h1 class="text-4xl md:text-6xl md:leading-relaxed font-sans font-bold leading-relaxed text-white">
          Financial Security <br />
          Made
          <span class="relative text-[#b2eda1]">
            Accountable
            <span class="absolute left-0 -bottom-2 h-1 w-full bg-[#b2eda1]" />
          </span>
        </h1>

        <p class="mt-6 max-w-lg text-gray-300">
          Staco is the dedicated platform for human management that helps
          to grow your startup business quickly
        </p>

        <div class="mt-10 flex items-center gap-6">
          <button
            class="rounded-full bg-green-400 px-4 md:px-8 md:py-4 py-3 md:text-base text-xs font-semibold text-[#1F2537] hover:bg-green-300 transition">
            Get Start For Free
          </button>

          <button class="flex items-center gap-2 px-4 md:px-8 md:py-4 py-3 md:text-base text-xs text-white font-medium hover:opacity-80 transition">
            Let’s talk
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              →
            </span>
          </button>
        </div>
      </div>

      <div class="relative">
        <div class="relative z-10 overflow-hidden  rounded-[30px] shadow-2xl bg-black/20">

          <video autoplay muted loop>
            <source src="/videos/introduction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          <button
            class="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#b2eda1] shadow-lg"
            aria-label="Pause video">
            ❚❚
          </button>

        </div>
        <img :src="GreenString1" alt="Green string 1" class="absolute top-4 hidden md:block">
        <img :src="GreenString2" alt="Green string 2" class="absolute -top-[300px] -left-[60px] z-20 hidden md:block">
      </div>
    </div>


    <div class="pointer-events-none absolute left-20 top-32 h-6 w-6 rounded-full bg-green-400/40 hidden md:block" />
    <div class="pointer-events-none absolute left-40 top-64 h-4 w-4 rounded-full bg-green-400/30 hidden md:block" />
  </section>
</template>
