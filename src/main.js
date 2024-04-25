import './assets/main.css'
//importing necessy modules from vue, pinia, vue-i18n, vue-router, and the app itself
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { createI18n } from 'vue-i18n'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
//importing the translations from the locale folder
import da from './locale/da.json'
import en from './locale/en.json'

export default {
    setup() {
      const { t, locale } = useI18n() // Use the useI18n function inside the setup function
  
      const changeLocale = (newLocale) => {
        locale.value = newLocale; // Change the locale
      }
  
      return {
        translatedMessage: t('message.key'), // Use the t function to translate a message
        changeLocale
      }
    }
  }

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
    lacacy: false,
locale:'da', //default locale Danish
messages:{//Danish translation
    da:da,
    en:en,
    buttonLabel: 'Dansk',
    //add more translations here
    GeoGrafiskHave: 'Geografisk Have',
    Plantejærgerne: 'Plantejærgerne',
    Fortsæt: 'Fortsæt',
    Tilbage: 'Tilbage',
},
en: {//English translation
    buttonLabel: 'English',
    //add more translations here
    GeoGrafiskHave: 'Geografisk Garden',
    Plantejærgerne: 'Plant hunters',
    Fortsæt: 'Continue',
    Tilbage: 'Back',
    }
})



  
// Creating Vue app instance and using Pinia, router and i18n
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
// Mounting the app to the DOM
app.mount('#app');
