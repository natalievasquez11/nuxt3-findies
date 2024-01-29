// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  typescript: {
    shim: false
  },
  modules: [
    ["@pinia/nuxt", {
      autoImports: ["defineStore", "acceptHMRUpdate"]
    }]
  ],
  imports: {
    dirs: ["stores"]
  },
  nitro: {
    preset: 'node-server',
  },
})
