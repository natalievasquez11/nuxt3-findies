// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    prerender: {
      routes: ['/nuxt3-fundies']
    }
  },
})
