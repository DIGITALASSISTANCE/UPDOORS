export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'UP DOORS株式会社(アップドアーズ)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'UP DOORS株式会社(アップドアーズ)' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https:updoors.jp' },
      { hid: 'og:title', property: 'og:title', content: 'UP DOORS株式会社(アップドアーズ)' },
      { hid: 'og:description', property: 'og:description', content: 'UP DOORS株式会社は、システムエンジニアリングサービスを通じてお客様のさまざまな課題解決、事業拡大を支援するITソリューション企業です。' },
      { hid: 'og:image', property: 'og:image', content: '~/../../assets/images/logotype_praimry.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/plugin',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

const pkg = require('./package')

module.exports = {
  generate:{
    fallback: true
  },
  mode: 'universal',
// Global CSS
css: [
  '~/assets/scss/style.scss'
],
}
