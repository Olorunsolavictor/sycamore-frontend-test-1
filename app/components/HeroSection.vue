<script setup lang="ts">
import GreenString1 from "@/assets/images/hero-section/svgs/green-string-1.svg"
import GreenString2 from "@/assets/images/hero-section/svgs/green-string-2.svg"
</script>


<template>
  <section class="relative w-full min-h-screen overflow-hidden flex justify-center items-center bg-[#1F2537] p-20">
    <div class="container w-full h-full bg-green-200 px-6 grid grid-cols-2 items-center">
      <!-- LEFT CONTENT -->
      <div class="relative bg-blue-400  z-10">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight text-white">
          Financial Security <br />
          Made
          <span class="relative text-green-400">
            Accountable
            <span class="absolute left-0 -bottom-2 h-1 w-full bg-green-400/80" />
          </span>
        </h1>

        <p class="mt-6 max-w-lg text-gray-300">
          Staco is the dedicated platform for human management that helps
          to grow your startup business quickly
        </p>

        <div class="mt-10 flex items-center gap-6">
          <button
            class="rounded-full bg-green-400 px-8 py-4 font-semibold text-[#1F2537] hover:bg-green-300 transition">
            Get Start For Free
          </button>

          <button class="flex items-center gap-2 text-white font-medium hover:opacity-80 transition">
            Let’s talk
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              →
            </span>
          </button>
        </div>
      </div>

      <!-- RIGHT MEDIA -->
      <div class="relative bg-red-400">
        <!-- Image Card -->
        <div class="relative overflow-hidden rounded-3xl shadow-2xl bg-black/20">
          <video controls width="600">
            <source src="/videos/introduction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          <!-- Play / Pause Button -->
          <button
            class="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg"
            aria-label="Pause video">
            ❚❚
          </button>
        </div>
      </div>
    </div>

    <!-- DECORATIVE ELEMENTS -->
    <div
      class="pointer-events-none absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border-[6px] border-green-400/80" />

    <div class="pointer-events-none absolute left-20 top-32 h-6 w-6 rounded-full bg-green-400/40" />
    <div class="pointer-events-none absolute left-40 top-64 h-4 w-4 rounded-full bg-green-400/30" />
  </section>
</template>
