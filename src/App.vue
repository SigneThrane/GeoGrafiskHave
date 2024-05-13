<script>
import db from './firebase/init.js'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import forside from './components/forside.vue'
import { RouterLink } from 'vue-router';


export default {
  name: 'App',
  components: {
    forside,
  },
  
}



    
</script>

<template>
  <div>
  <RouterLink to="/" style="display: none;"></RouterLink>
  <RouterLink to="/audio" style="display: none;"></RouterLink>
  <RouterLink to="/audioTekst" style="display: none;"></RouterLink>
  <RouterLink to="/Map" style="display: none;"></RouterLink>


 
  <RouterView></RouterView>
 
  
</div>

</template>


<style lang="scss" scoped>

</style>
