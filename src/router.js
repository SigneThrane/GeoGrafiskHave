import { createRouter, createWebHistory } from 'vue-router'
import Forside from './components/forside.vue'
import Audio from './components/audio.vue'
import AudioTekst from './components/audioTekst.vue'
import Map from './components/Map.vue'
import Frontpage from './components/frontpage.vue'
import Mapenglish from './components/Mapenglish.vue'

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
      path: '/map',
      name: 'Map',
      component: Map
    },

  ]
})
