<script setup lang="ts">
import { services } from "@/data/services"
import ServiceCard from "./ui/ServiceCard.vue";
</script>

<template>
  <section class="lg:py-28 py-14">
    <div class="container mx-auto px-4 ">
      <div
        class="grid grid-cols-1 p-4 gap-4 lg:gap-8 md:grid-cols-3"
      >
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>
