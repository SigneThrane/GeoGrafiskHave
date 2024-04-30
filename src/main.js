import './assets/main.css'
//importing necessy modules from vue, pinia, vue-i18n, vue-router, and the app itself
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { createI18n, useI18n } from 'vue-i18n'
import { ref } from 'vue'




// Registering service worker if supported by the browser
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    }
    );
}



// Creating i18n instance with Danish as default locale and Danish and English translations
const i18n = createI18n({
  legacy: false,
  locale: 'da',
  fallbackLocale: 'da',
  messages: {
    en: {
        Engelsk: 'English',
        Dansk: 'Danish',
        GeografiskHave : 'Geographic Garden',
        PlanteJægerne: 'Plant Hunters',
        Continue: 'Continue',
    },
    da: {
        Engelsk: 'Engelsk',
        Dansk: 'Dansk',
        GeografiskHave: 'Geografisk Have',
        PlanteJægerne: 'Plantejægerne',
        Continue: 'Fortsæt',
    }
  }
})



  
// Creating Vue app instance and using Pinia, router and i18n
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
// Mounting the app to the DOM
app.mount('#app');
