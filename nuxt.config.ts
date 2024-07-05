// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2024-07-01',

  modules: [
    'nuxt-svgo-loader',
    'nuxt-gtag',
    '@zadigetvoltaire/nuxt-gtm',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
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
