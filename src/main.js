import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let firebaseApp;

try {
  firebaseApp = getApp(); 
} catch (error) {
  firebaseApp = initializeApp(firebaseConfig); 
}

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Export Firestore instance
export { db };

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
