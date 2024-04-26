
<script>
import db from './firebase/init.js'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import forside from './components/forside.vue'
import { RouterLink } from 'vue-router';

export default {
  name: 'App',
  components: {

  },


}
</script>

<template>
  <div>
  <RouterLink to="/Forside" style="display: none;"></RouterLink>
  <RouterLink to="/Audio" style="display: none;"></RouterLink>
  <RouterLink to="/udioTekst" style="display: none;"></RouterLink>
  <RouterLink to="/Map" style="display: none;"></RouterLink>
  <RouterLink to="/Frontpage" style="display: none;"></RouterLink>
  <RouterLink to="/Mapenglish" style="display: none;"></RouterLink>
  <RouterView></RouterView>

  
</div>
  
</template>


<style lang="scss" scoped>

</style>
