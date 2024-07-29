// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-gtag',
    'nuxt-svgo-loader',
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

  gtm: {
    id: process.env.GTM_ID || 'GTM-XXXXXXXX',
    enabled: process.env.GTM_ID ? true : false,
  },

  gtag: {
    id: process.env.GTAG_ID,
    enabled: process.env.GTAG_ID ? true : false,
  },
})
