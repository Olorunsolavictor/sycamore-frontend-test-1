<script setup lang="ts">
import QuotesImage from "@/assets/images/testimonials-section/testimonial-quotes-image.svg"
import BackgroundImage from "@/assets/images/testimonials-section/testimonial-image-bg.svg"
import Logo1 from '@/assets/images/testimonials-section/client-logo-1.png'
import Logo2 from '@/assets/images/testimonials-section/client-logo-2.png'
import Logo3 from '@/assets/images/testimonials-section/client-logo-3.png'
import Logo4 from '@/assets/images/testimonials-section/client-logo-4.png'
import Logo5 from '@/assets/images/testimonials-section/client-logo-5.png'
import { testimonials } from '~/data/testimonials';
const { activeIndex } = useAutoSlider(testimonials.length, 3000)
const activeTestimonial = computed(() => testimonials[activeIndex.value])
const logos = [Logo1, Logo2, Logo3, Logo4, Logo5]
</script>

<template>
  <section class="py-24 bg-gray-100 px-4 md:px-[9%] md:py-[5%]">
    <div class="rounded-[30px]  border-[0.5px] bg-white  md:p-0 shadow-lg">
      <div class=" flex md:flex-row flex-col p-4 md:px-16 md:pt-16 justify-center gap-12 items-start">
        <div class="md:w-[50%] md:pr-10 pt-6 md:pt-0  w-full flex justify-center">
          <div class="relative   h-[300px] w-[300px]   ">
            <NuxtImg :src="BackgroundImage" alt="background pattern"
              class="absolute inset-0 w-full h-full object-cover  z-0" />

            <img :src="activeTestimonial?.image" :alt="activeTestimonial?.name"
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 object-cover" />
          </div>
        </div>


        <div class="md:w-[50%]  w-full h-[350px]">
          <div class="mb-10">
            <NuxtImg :src="QuotesImage" alt="quotes image" width="60" height="60" />
          </div>

          <p class="text-sm md:text-lg  text-gray-900 leading-loose mb-8">
            {{ activeTestimonial?.comment }}
          </p>

          <div>
            <h4 class="font-bold text:lg text-gray-900">
              {{ activeTestimonial?.name }}
            </h4>
            <p class="text-gray-500 font-medium">
              {{ activeTestimonial?.role }}
            </p>
          </div>
        </div>
      </div>

      <div class="h-0.5 bg-gray-200 relative overflow-hidden rounded-full">
        <div :key="activeIndex" class="absolute left-0 top-0 h-full bg-green-primary animate-progress" />
      </div>
      <div class="flex  rounded-b-3xl px-6 py-2 md:px-16  md:py-8 justify-between h-fit">
        <div v-for="(logo, index) in logos" :key="index" class="flex justify-center md:w-auto md:h-auto h-12 w-12 items-center">
          <img :src="logo" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>