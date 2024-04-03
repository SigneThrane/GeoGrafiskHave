
<script>
import db from './firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
import forside from './components/forside.vue'

export default {
  components: {
    forside,
    
  },
  methods: {
    async createUser() {
      const colRef = collection (db, 'users')
      const dataObj = {
        firstName: 'Don', 
        lastName: ' Doe',
        dob: '1990'
      }
      const docRef = await addDoc(colRef, dataObj)

      console.log('Document was created with ID:', docRef.id)
    }
  },
  created(){
    this.createUser()
  }
}

</script>

<template>
  <div class="container">
    <forside />
  </div>
</template>


<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUwCH1-gIIgKm8cPgsmr8a22aXp4p1usfCf9r3hwxQMDN5VP_rCHy4k5gOvtKM-uaLxU&usqp=CAU');
  background-size: cover;
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust as needed */
}
</style>