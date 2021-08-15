export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ws',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/main.css' // 自定義css
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // components會自動引入
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true, // 開啟代理
    prefix: '/api', // 為請求url加前綴/api
    credentials: false// 跨域請求時，是否需要使用憑證
  },

  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8000', // 目標接口網域名稱
      changeOrigin: true, // 跨域
      pathRewrite: {
        '^/api': '/' // 把/api替換成/
      }
    }
  },

  loading: {
    color: '#fff'
  },

  // server: {
  //   host: '127.0.0.1',
  //   port: 3000, // 開發階段時的port號
  //   timing: false
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
