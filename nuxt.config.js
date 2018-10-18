const pkg = require('./package')
import cssnext from 'postcss-cssnext'
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      // { src: 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js' },
      // { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#25324e', height: '5px' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/autoresponsive-vue', ssr: true },
    { src: '~/plugins/font-awesome', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // axios seems to mess with the get of nuxtent
    // '@nuxtjs/axios',
    'nuxtent',
    'nuxt-netlify-cms'
  ],
  netlifyCms: {
    adminPath: 'secure'
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    // vendor: ['vueAwesome'],
    extend (config, { isServer }) {
      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    },
    // vendor: ['auto-responsive.js'],
    extend (config) {
      // Add postcss loader for CSS files
      const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.css$/')
      cssLoader.use.push('postcss-loader')
    },
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
