// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt3-fundies/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
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
