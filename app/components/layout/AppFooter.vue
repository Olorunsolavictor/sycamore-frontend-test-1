<script setup lang="ts">
import Logo from "@/assets/images/general/app-logo.svg"


import { useFooterData } from "~/composables/useFooterData"

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

const { socialLinks, footerSections, bottomLinks } = useFooterData()

</script>

<template>
  <footer class="px-2 bg-gray-100 font-sans">
    <div class="bg-primary-dark text-gray-300 rounded-[30px] mx-2 md:mx-4 mt-8 px-10 md:px-[70px] py-10 pt-[120px]">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12 mb-16 w-full">
          <div class="lg:w-1/4">
            <div class="flex items-center gap-3 mb-6">
              <img :src="Logo" alt="Logo" />
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-8">
              Staco is the dedicated platform for performance management that helps to grow your startup quickly
            </p>
            <div class="flex gap-3">
              <a v-for="(social, i) in socialLinks" :key="i"
                class="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <img :src="social.icon" alt="social icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:ap-14 gap-12 flex-1">
            <div v-for="(section, index) in footerSections" :key="index">
              <h3 class="text-white font-semibold mb-6">{{ section.title }}</h3>
              <ul class="md:space-y-4 space-y-2">
                <li v-for="(link, i) in section.links" :key="i">
                  <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">{{ link }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 md:text-sm text-[10px]">
            2023 Staco. All rights reserved.
          </p>
          <div class="flex gap-8">
            <a v-for="(link, i) in bottomLinks" :key="i" href="#"
              class="text-gray-400 hover:text-white transition-colors text-[10px] md:text-sm">
              {{ link }}
            </a>
          </div>
        </div>

        <AppButton @click="scrollToTop" class="fixed bottom-8 right-8 w-12 h-12 rounded-full 
         bg-green-primary/20 border border-green-primary 
         flex items-center justify-center
         text-green-primary text-lg font-bold
         hover:bg-green-primary/50 transition-colors">
          ↑
        </AppButton>

      </div>
    </div>
  </footer>
</template>
