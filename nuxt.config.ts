// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    public: {
      key: process.env.KEY,
    },
    secretKey: process.env.SECRET_KEY,
    // drizzle
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s - Nuxt3 Starter',
    },
  },

  tailwindcss: {
    // https://tailwindcss.nuxtjs.org/getting-started/configuration
    editorSupport: true,
  },
})
