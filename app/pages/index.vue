<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import TestimonialSection from '~/components/TestimonialSection.vue';
import WhyUsSection from '~/components/WhyUsSection.vue';
import CtaSection from '~/components/CtaSection.vue';
</script>

<template>
  <main class=" w-screen min-h-screen bg-white">
    <AppNavbar />
    <HeroSection />
    <ServicesSection />
    <CtaSection />
    <WhyUsSection />
    <TestimonialSection />
  </main>
</template>