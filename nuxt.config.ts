import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL
    }, build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {}, autoprefixer: {},
                },
            },
        },
    }, css: ["~/assets/css/tailwind.css"],
})
