<script setup lang="ts">
import QuotesImage from "@/assets/images/testimonials-section/testimonial-quotes-image.svg"
import { testimonials } from '~/data/testimonials';
const { activeIndex } = useAutoSlider(testimonials.length, 3000)
const activeTestimonial = computed(() => testimonials[activeIndex.value])
</script>

<template>
  <section class="py-24 px-[9%]">
    <div class="rounded-3xl bg-blue-200 p-12 shadow-xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
      <div
  class="relative rounded-[40px] bg-green-200 p-6 w-fit overflow-hidden"
>
  <!-- background image -->
  <div
    class="absolute inset-0 bg-cover bg-center opacity-20"
    style="background-image: url('/images/bg-shape.png')"
  />

  <!-- foreground image -->
  <NuxtImg
    :src="activeTestimonial?.image"
    alt=""
    class="relative z-10 w-64 h-auto object-cover"
  />
</div>


        <!-- Content -->
        <div>
          <div class="mb-6">
            <NuxtImg :src="QuotesImage" alt="quotes image" />
          </div>

          <p class="text-lg text-gray-700 leading-relaxed mb-6">
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

      <!-- Progress bar -->
      <div class="mt-10 h-[3px] bg-gray-200 relative overflow-hidden rounded-full">
        <div :key="activeIndex" class="absolute left-0 top-0 h-full bg-green-500 animate-progress" />
      </div>
    </div>
  </section>


</template>
