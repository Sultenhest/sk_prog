const pkg = require('./package');

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: 'SK Programmering',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Nunito:400,700'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: '~/components/loading.vue',
    
    /*
     ** Global CSS
     */
    css: ['~/assets/css/main.scss'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: '~/plugins/vue-js-toggle-button', ssr: false }],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/pwa',
        '@bazzite/nuxt-optimized-images'
    ],

    /*
     ** @bazzite/nuxt-optimized-images
     ** https://github.com/bazzite/nuxt-optimized-images
     */
    optimizedImages: {
        optimizeImages: true
    },

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
                });
            }
            config.node = {
                fs: 'empty'
            }
        }
    },

    /*
     ** Transition Settings
     */
    pageTransition: {
        name: 'page',
        mode: 'out-in',
        duration: 500
    },

    /*
     ** Router Settings
     */
    router: {
        middleware: 'pagetransition',
        linkActiveClass: '',
        linkExactActiveClass: 'border-b-2'
    }
};
