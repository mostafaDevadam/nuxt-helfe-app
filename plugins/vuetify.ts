import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Import Vuetify styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Icons

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
  
      },
    theme: {
      defaultTheme: 'light', // Set default theme
      themes: {
        light: {
          colors: {
            primary: '#1976D2', // Blue
            secondary: '#424242', // Gray
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
