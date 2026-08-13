export default defineNuxtConfig({
  plugins: [
    '~/plugins/aos.client.ts'
  ], // <-- Added the missing comma here

  devtools: {
    enabled: true
  },

  ssr: true,

  css: [
    '~/assets/css/main.css',
    '~/assets/css/variables.css',
    '~/assets/css/animation.css',
    'aos/dist/aos.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Love Story',

      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1'
        },
        {
          name: 'theme-color',
          content: '#ff5c8a'
        }
      ],

      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@700&display=swap'
        }
      ]
    }
  }
})