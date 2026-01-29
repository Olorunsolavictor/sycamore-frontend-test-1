<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Sycamore Finance Landing Page Test',
  meta: [
    {
      name: 'description',
      content: 'This is a simple landing page for Nuxt 4 test'
    }
  ]
})
</script>

<template>
  <HeroSection />
  <ServicesSection />
  <CtaSection />
  <WhyUsSection />
  <TestimonialSection />
</template>
