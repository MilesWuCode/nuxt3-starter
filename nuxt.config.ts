// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@nuxtjs/svg-sprite',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    public: {
      key: process.env.KEY,
    },
    secretKey: process.env.SECRET_KEY,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s - Nuxt3 Starter',
    },
  },

  colorMode: {
    preference: 'light',
  },

  tailwindcss: {
    // https://tailwindcss.nuxtjs.org/getting-started/configuration
    editorSupport: true,
  },
})
