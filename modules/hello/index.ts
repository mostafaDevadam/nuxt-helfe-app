import { createResolver, defineNuxtModule, addServerHandler } from "nuxt/kit";


export default defineNuxtModule({
    meta: {
        name: 'nachricht'
    },
    setup() {
        const {resolve } = createResolver(import.meta.url)

        addServerHandler({
            route: '/api/hello',
            handler: resolve('./runtime/api-route')
        })
    }
})