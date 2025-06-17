import { defineVuesticConfig, createIconsConfig } from 'vuestic-ui'
import 'vuestic-ui/css'

export default defineVuesticConfig({
  components: {
    VaDataTable: {
        
    },
  },
  icons: createIconsConfig({
    fonts: [
      {
        name: 'fa-{name}',
        resolve: ({ name }) => ({
          class: `fas fa-${name}`,
        })
      }
    ]
  })
})