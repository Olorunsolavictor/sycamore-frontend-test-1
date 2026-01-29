// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts",'@vueuse/motion/nuxt'],
  css: ["~/assets/css/main.css"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,

    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: [
              "'Plus Jakarta Sans'",
              "ui-sans-serif",
              "system-ui",
              "sans-serif",
            ],
          },
          colors: {
            primary: "#0ea5e9",
            secondary: "#44c486",
            accent: "#f97316",
            background: "#ffffff",
            border: "#e5e5e5",
          },
        },
      },
    },
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
