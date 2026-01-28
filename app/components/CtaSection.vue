<script lang="ts" setup>
import CtaImage from "@/assets/images/cta-section/cta-section-image.svg"
</script>

<template>
  <section class="relative w-screen  bg-white overflow-hidden py-24 lg:px-32 md:px-[7%] px-4">
    <div
      class="container flex md:flex-row flex-col justify-center items-center md:justify-center md:items-center  mx-auto px-8 md:px-[30px] lg:px-[70px] bg-[#004d42] h-[600px] md:h-[300px] lg:h-[358px] rounded-[30px]">
      <div class=" flex flex-col gap-6 md:pt-0  pt-12 w-full md:w-[50%] justify-center items-center md:items-start">
        <h1 class="lg:text-5xl lg:leading-tight text-4xl md:text-4xl text-white font-[800] font-sans text-center md:text-start">We
          are building <br> financial
          foundations
        </h1>
        <button
          class="rounded-full bg-[#b2eda1] capitalize lg:text-base md:text-xs  text-sm  flex gap-2 justify-center items-center md:w-[130px] md:h-9 lg:w-[150px] font-bold lg:h-[50px] h-[48px] w-[130px]">
          Let's Talk <span>
            →
          </span>
        </button>
      </div>
      <div class=" h-full w-full md:w-[50%] flex flex-col justify-end items-center">
        <NuxtImg :src="CtaImage" alt="icon" class="" height="250" width="372" />
      </div>

    </div>
  </section>
</template>