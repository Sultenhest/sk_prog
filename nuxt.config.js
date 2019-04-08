const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'SK Programming',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,700' }
    ]
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main.scss'
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#38C172',
    height: '4px'
  },

  /*
   ** Transition Settings
   */
  transition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
   ** Router Settings
   */
  router: {
    linkActiveClass: '',
    linkExactActiveClass: 'border-b-2'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
