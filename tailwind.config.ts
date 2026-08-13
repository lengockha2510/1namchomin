import type { Config } from 'tailwindcss'

export default <Partial<Config>>{

  content:[
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],

  theme:{
    extend:{

      colors:{
        primary:'#ff4d6d',
        secondary:'#ff89b5',
        dark:'#111827'
      },

      fontFamily:{
        body:['Poppins'],
        title:['Dancing Script']
      }

    }
  }

}