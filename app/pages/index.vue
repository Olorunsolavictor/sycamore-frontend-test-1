<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Sycamore Finance Landing Page Test',
  meta: [
    { name: 'description', content: 'This is a simple landing page for Nuxt 4 test' }
  ]
})
</script>

<template>
  <div class="w-screen min-h-screen bg-white">
    <AppNavbar />
    <HeroSection />
    <ServicesSection />
    <CtaSection />
    <WhyUsSection />
    <TestimonialSection />
  </div>
</template>