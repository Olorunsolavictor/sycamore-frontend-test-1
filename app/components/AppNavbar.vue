<script setup lang="ts">
import { useRoute } from 'vue-router'
import { navLinks } from '~/data/navlinks';

const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<template>
  <nav class="fixed top-10 left-1/2 -translate-x-1/2 z-30
           w-[480px] h-[62px]
           rounded-full
           bg-gradient-to-b from-neutral-700/90 to-neutral-900/80
           backdrop-blur-2xl
           shadow-lg
           flex items-center p-1 overflow-hidden border-4 border-gray-600/50 ">
    <ul class="flex w-full h-full items-center justify-between bg-transparent  rounded-full    gap-2 text-neutral-300">
      <li v-for="item in navLinks" :key="item.name" class="flex-1 h-full">
        <NuxtLink :to="item.to" class="w-full h-full flex items-center justify-center rounded-full
         text-sm font-medium transition-all duration-300
         hover:bg-gray-600/20 hover:backdrop-blur-xl hover:border-[0.5px] border-gray-400/10" :class="isActive(item.to)
          ? 'bg-gradient-to-b from-neutral-200 to-neutral-300 text-neutral-900 shadow-inner'
          : 'text-neutral-300 hover:text-white'">
          {{ item.name }}
        </NuxtLink>

      </li>
    </ul>
  </nav>
</template>
