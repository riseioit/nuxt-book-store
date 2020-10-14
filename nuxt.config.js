require('dotenv').config()


export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bookstore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/firebase'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  styleResources: {
    scss: ["@assets/scss/main.scss"]
  },
  firebase: {
    services: {
      auth: {
        persistance: 'local',
        initialize: {
          onAuthStateChangedMutation: 'firebase/ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'firebase/onAuthStateChangedAction'
        },
        ssr: true, 
      },
      realtimeDb: true
    },
    config: {
      apiKey: process.env.FB_API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DB_URL,
      projectId: process.env.PROJECT_ID,
    }
  },
  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: false
    }
  }
}
