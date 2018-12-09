const pkg = require('./package')
const { resolve } = require('path')
require('dotenv').config()

module.exports = {
  mode: 'spa',
  // rootDir: resolve(__dirname, '../..'),

  generate:{
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/buefy'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios',
    'nuxt-buefy',
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo'
  ],
  /*
  ** Axios module configuration
  */
  env: {
    HTTP_ENDPOINT: process.env.HTTP_ENDPOINT || '',
    DATO_ACCESS_TOKEN: process.env.DATO_ACCESS_TOKEN || '',
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  apollo: {
    errorHandler (error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
    clientConfigs: {
      default: '~/graphql/apollo/defaultClient.js'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
