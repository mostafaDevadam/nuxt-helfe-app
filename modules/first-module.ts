import { addPlugin, createResolver,  defineNuxtModule } from "nuxt/kit";


export default defineNuxtModule({
     meta: {
        name: 'first-module',
        configKey: 'firstModule',
        defaults: {},
        setup(){
            const {resolve } = createResolver(import.meta.url)
            addPlugin(resolve('./runtime/plugin'))
        }
     }
})