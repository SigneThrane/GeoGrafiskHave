<template>
  <div></div>
</template>


<script>
import db from './firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'

export default {
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
