import { createRouter, createWebHistory } from 'vue-router'
import Forside from './components/forside.vue'
import Audio from './components/audio.vue'
import App from './App.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forside',
      component: Forside
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio
    }
  ]
})