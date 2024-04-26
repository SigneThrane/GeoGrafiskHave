import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { createI18n } from 'vue-i18n'


const i18n = createI18n({
    locale: 'da',
    messages: {
        en: {
        message: {
            GeografiskHave: 'Geografisk Garden',
        }
        },
        da: {
        message: {
            GeographocalGarden: 'Geografisk Have'
        }
        }
    }
    })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
