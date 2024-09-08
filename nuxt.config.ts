// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: "./vuetify.config.ts",
  },

  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.BACKEND_URL,
      DB_ACCES_TOKEN: process.env.DB_ACCES_TOKEN,
    },
  },
});
