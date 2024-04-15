import { createRouter, createWebHistory } from 'vue-router'
import Forside from './components/forside.vue'
import Audio from './components/audio.vue'
import AudioTekst from './components/audioTekst.vue'
import Map from './components/Map.vue'
import App from './App.vue'
import { name } from 'tedious/lib/data-types/null'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forside',
      component: Forside
    },
    {
      path: '/audioTekst',
      name: 'audioTekst',
      component: AudioTekst
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
   
    
  ]
})
