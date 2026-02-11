import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  corePlugins:{
    container:false
  },
  plugins: [ tailwindcss(),react(),
  function({addComponents}){
    addComponents({
      '.container':{
        maxWidth:'100%',
        '@screen sm':{
          maxWidth:'600px'
        },
        '@screen md':{
          maxWidth:'720px'
        },
        '@screen lg':{
          maxWidth:'960px'
        },
        '@screen xl':{
          maxWidth:'1140px'
        },
        '@screen 2xl':{
          maxWidth:'1320px'
        }

      }
    })
  }
  ],

})
