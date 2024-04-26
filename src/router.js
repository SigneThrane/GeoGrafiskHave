import { createRouter, createWebHistory } from 'vue-router'
import Forside from './components/Forside.vue'
import Audio from './components/Audio.vue'
import AudioTekst from './components/AudioTekst.vue'
import Map from './components/Map.vue'
import Frontpage from './components/Frontpage.vue'
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
    {
      path: '/frontpage',
      name: 'frontpage',
      component: Frontpage
    },
    {
      path: '/mapenglish',
      name: 'mapenglish',
      component: Mapenglish
    },
  ]
})
