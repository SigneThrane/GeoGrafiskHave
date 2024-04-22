import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { createI18n } from 'vue-i18n'
import da from './locale/da.json'
import en from './locale/en.json'

const i18n = createI18n({
    locale: 'da', // set locale language
    message: {
        da: da,
        en: en,
    }
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
