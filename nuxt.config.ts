import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: "https://code.jquery.com/jquery-3.5.1.min.js" }],
    },
  },
});
