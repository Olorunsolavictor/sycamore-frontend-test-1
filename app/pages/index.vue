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
  <div class=" pb-[500px] md:pb-[300px]">
    <div class="w-screen min-h-screen relative z-20 bg-gray-100">
      <AppNavbar />
      <HeroSection />
      <ServicesSection />
      <CtaSection />
      <WhyUsSection />
      <TestimonialSection />
      <AppFooter />
    </div>

    <section class="fixed bottom-0 left-0 right-0 z-0">
      <AppSubFooter />
    </section>
  </div>
</template>
