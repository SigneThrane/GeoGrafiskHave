import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import da from './locales/da.json'
import en from './locales/en.json'



const i18n = createI18n({
  locale: 'da', // set locale
  fallbackLocale: 'da', // set fallback locale
  messages: {
    da: {
      ...da,
      Plantejærgerne: 'Plantejærgerne',
      Geografiskhave: 'Geografisk Have',
      Fortsæt: 'Fortsæt',
      engelsk: 'Engelsk',
      dansk: 'Dansk',
    },
    en: {
      ...en,
      Plantejærgerne: 'The Plant Hunters',
      Geografiskhave: 'Geographical Garden',
      Fortsæt: 'Continue',
      engelsk: 'English',
      dansk: 'Danish',
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.config.globalProperties.$i18n = i18n; // add i18n instance to Vue app's prototype
app.mount('#app')