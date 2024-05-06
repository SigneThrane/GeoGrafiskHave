<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
</script>

<template> 
 
  <div class="map">
      <img class="map-img" src="/src/assets/Kort.jpg" alt="">
  </div>
  <div class="locale.changer"> 
  <div class="popUp">
    <div class="popup-img-container"> 
      <img class="popup-img" src="/src/assets/imgSmall.png" alt="">
      <router-link to="/audio">
        <button id="playPauseButton" class="icon-button-play">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16" id="playIcon">
         <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
        </svg></button>
    </router-link>
    </div>
      <h2>{{ $t('title2') }}</h2>
    <div class="popup-info">
      <p id="varighed">{{ $t('Varighed2minutter') }}</p>
      <p id="kina">{{ $t('Kina') }}</p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { db } from '../main'; 
import { doc, getDoc } from 'firebase/firestore'; 

const title = ref('');
const lande = ref('');
const varighed = ref('');


onMounted(async () => {
  try {
    // Fetch document from 'historieTitel' collection
    const docRef = doc(db, 'historieTitel', '9uFrlduAUavrtX4pxmju');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      title.value = docSnap.data().titelKina;
    } else {
      console.log('No such document in historieTitel collection!');
      title.value = 'Document not found';
    }

    // Fetch document from 'lande' collection
    const docRef2 = doc(db, 'Lande', '4BiWlzlz2Fmp743jJC59');
    const docSnap2 = await getDoc(docRef2);
    
    if (docSnap2.exists()) {
      lande.value = docSnap2.data().Land;
    } else {
      console.log('No such document in lande collection!');
      lande.value = 'Document not found';
    }

  } catch (error) {
    console.error('Error fetching document:', error);
    title.value = 'Error fetching data';
    lande.value = 'Error fetching data. Check console for details.';
  }

  try {
    // Fetch document from 'audioVarighed' collection
    const docRef3 = doc(db, 'audioVarighed', 'OJhrUUo7Lwtbazdy8StJ');
    const docSnap3 = await getDoc(docRef3);
    
    if (docSnap3.exists()) {
      varighed.value = docSnap3.data().varighedKina;
    } else {
      console.log('No such document in audioVarighed collection!');
      varighed.value = 'Document not found';
    }

  } catch (error) {
    console.error('Error fetching document:', error);
    varighed.value = 'Error fetching data. Check console for details.';
  }
})


</script>

<style scoped>
.map {
  background-color: #343333;
  height: 98vh;
  overflow-y: hidden;
  overflow-x: hidden;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative; 
}

.map img {
  transform: scale(5) translateX(-10%);
}

.popUp {
  position: absolute; 
  bottom: 0; 
  background-color: #343333;
  padding: 25px; 
  color: #FFFFFF;
  height: 18%;
  width: 85%;
}

.popup-info {
  display: flex; 
  justify-content: space-between; 
  margin-top: 12%;
  position: relative; 
  top: -70%; 
}

.popUp h2, .popUp p {
  margin: 0;
  display: inline-block; 
  color: white;
  font-family: 'stagBold', sans-serif;
}

.popUp h2 {
  margin: 0;
  display: inline-block; 
  color: white;
  position: relative; 
  top: -45%; 
}
.popup-img {
  position: absolute;
  top: -30%; 
  left: 50%;
  transform: translateX(-50%);
  width: 40%; 
  border-radius: 10px; 
  z-index: 1; 
}

.popup-img-container {
  width: 40%; 
  height: 0; 
  padding-bottom: 40%; 
  overflow: hidden; 
  border-radius: 10px; 
  z-index: 0; 
}

.icon-button-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -250%);
  z-index: 2;
  cursor: pointer;
  background-color: #125F31; 
  border: none; 
  border-radius: 50%; 
  padding: 0;
  width: 50px; 
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#kina {
  position: relative;
  width: 9%;
  height: 10%;
  padding: 10px 30px; 
  border: 2px solid white; 
  border-radius: 50px; 
  font-family: 'stagBold', sans-serif;
}

#varighed {
  position: relative;
  left: -6%; 
  padding: 10px 20px; 
  margin-bottom: 20px;
  color: #606060;
  font-family: 'stagBold', sans-serif;
}

.back-button {
  position: absolute;
  top: 14px; 
  left: 15px; 
  background-color: #404040;
  border: none;
  border-radius: 50%;
  height: 4%;
  width: 10%;
  cursor: pointer;
  background-image: url('/src/assets/backButton.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 25%; 
}


@media only screen
and (min-width: 1370px)
and (max-width: 1605px)
{ 
  .popUp {
  height: 20%;
  width: 100%;
}
.popup-img {
  top: -60%; 
  left: 50%;
  transform: translateX(-50%);
  width: 18%; 
  border-radius: 10px; 
}
.popUp h2 {
  top: -305%; 
  left: 36%;
}

.map img {
  transform: scale(1.7) translateX(1%);
}

#kina {
  width: 2.5%;
  right: 37%;
}

#varighed {
  left: 34.5%;; 
}

.popup-info {
  top: -412%; 
}
.map {
  overflow-y: hidden;
  overflow-x: hidden;
}
}
</style>

