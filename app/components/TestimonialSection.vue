<script setup lang="ts">
import QuotesImage from "@/assets/images/testimonials-section/testimonial-quotes-image.svg"
import BackgroundImage from "@/assets/images/testimonials-section/testimonial-image-bg.svg"
import { testimonials } from '~/data/testimonials';
const { activeIndex } = useAutoSlider(testimonials.length, 3000)
const activeTestimonial = computed(() => testimonials[activeIndex.value])
</script>

<template>
  <section class="py-24 bg-gray-100 px-4 md:px-[9%] md:py-[5%]">
    <div class="rounded-3xl border-[0.5px] bg-white p-4 md:p-16 shadow-xl">
      <div class=" flex md:flex-row flex-col  justify-center gap-12 items-center">
        <div class="md:w-[40%] w-full flex justify-center md:justify-end">
          <div class="relative  h-[280px] w-[250px]  ">
            <NuxtImg :src="BackgroundImage" alt="background pattern"
              class="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />

            <img :src="activeTestimonial?.image" :alt="activeTestimonial?.name"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 object-cover" />
          </div>
        </div>


        <div class="md:w-60%] w-full">
          <div class="mb-6">
            <NuxtImg :src="QuotesImage" alt="quotes image" width="60" height="60" />
          </div>

          <p class="text-sm text-gray-900 leading-relaxed mb-6">
            {{ activeTestimonial?.comment }}
          </p>

          <div>
            <h4 class="font-bold text-gray-900">
              {{ activeTestimonial?.name }}
            </h4>
            <p class="text-gray-500">
              {{ activeTestimonial?.role }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-10 h-[3px] bg-gray-200 relative overflow-hidden rounded-full">
        <div :key="activeIndex" class="absolute left-0 top-0 h-full bg-green-500 animate-progress" />
      </div>
    </div>
  </section>
</template>