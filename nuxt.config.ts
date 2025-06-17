// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
   "@nuxtjs/tailwindcss",
   "@nuxtjs/i18n",
   "@nuxt/content",
   "@pinia/nuxt",
   "@nuxt/icon",
   "@nuxtjs/device",
   "nuxt-snackbar",
   //"@vuestic/tailwind",
   //"./modules/first-module",
   "@vuestic/nuxt",
   "@primevue/nuxt-module",
  ],
  devtools: { enabled: true },
 // build: {},
 pinia: {
  storesDirs: ['./stores/**'],

 },
 css: [
  'vuetify/styles', // Include Vuetify's styles globally
  '@mdi/font/css/materialdesignicons.css', // Optional: Material Design Icons
],
 build: {
  transpile: ['vuetify'],
},
 vuestic: {
  config: {

  }
 },
 

 postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: 'tailwind.config',
    config: {
      theme:{
        extend: {
          fontFamily: {
            display: ["Poppins", "GeDinarOne", "sans-serif"],
            arabic: ["GeDinarOne", "sans-serif"],
          },
          colors: {
            brand: {
              primary: {
                DEFAULT: "#262262",
              },
              secondary: {
                DEFAULT: "#6EA31D",
              }
            }
          }
        }
      }
    }
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      /*{
        code: "gb",
        language: "en-GB"
      },*/
      {
        code: "en",
        language: "en-US"
      },
      {
        code: "ar",
        language: "ar"
      },
    ]

    

  },
  snackbar: {
    bottom: true,
    right: true,
    duration: 100000000,
  },
  routeRules: {
    '/': { prerender: true },
    '/api/*': { cache: { maxAge: 60 * 60 } },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {},
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
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
        },
      ],
      script: [
        {
           src: "",
           async: true,
           defer: true,  
        }
      ],
      title: {
        textContent: "APP"
      }
    }

  },

  devServer: {
   /* https: {
      //key: `${fs.readFileSync('./ssl/server.key')}`,
      //cert:`${ fs.readFileSync('./ssl/server.cert')}`,
    }*/
  },

  plugins: [],

  runtimeConfig: {
    public: {
      snackbar: {
        dismissOnActionClick: true,
      }
    }
  },

  
})