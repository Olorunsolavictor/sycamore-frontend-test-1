// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vueuse/motion/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/sections", pathPrefix: false },
    { path: "~/components/layout", pathPrefix: false },
    { path: "~/components/ui", pathPrefix: false },
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  googleFonts: {
    families: {
      "Plus Jakarta Sans": {
        wght: [400, 500, 600, 700],
      },
    },
    display: "swap",
  },
});
