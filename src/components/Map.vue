<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()

import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';




const initialMap = ref(null);
onMounted(()=> {
    initialMap.value = L.map('map').setView([55.4732873, 9.4946134], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, 
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);

    // Set the bounds of the map
    initialMap.value.setMaxBounds([
        [55.4732873 - 0.01, 9.4946134 - 0.01], // southwest corner
        [55.4732873 + 0.01, 9.4946134 + 0.01]  // northeast corner
    ]);

    // Add a marker to the map
    L.marker([24.3746, 88.6004]).addTo(initialMap.value);
    // Add a popup to the map
    L.popup()
        .setLatLng([55.4732873, 9.4946134]) // coordinates for Kolding
        .setContent($t('Kina'))
        .openOn(initialMap.value);
});


</script>

<template>

 <div class="locale.changer">   
<div id="map" style="height:90vh;"></div>
   <router-link to="/">
      <button class="back-button"> </button>
  </router-link>
</div>

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
 
</template>


<style scoped>
.map-container {
  position: relative; /* This is needed for the absolute positioning of .popUp to work correctly */
  /* Other styles for your map container */
}

.popUp {
  position: fixed; 
  bottom: 0; 
  background-color: #343333;
  padding: 25px; 
  color: #FFFFFF;
  height: 20%;
  width: 89%;
  z-index: 1000;
 
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
  font-size: 35px;
}

p{
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
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
  left: 14px; 
  background-color: #404040;
  border: none;
  border-radius: 50%;
  height: 38px;
  width: 38px;
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

@media only screen
and (min-width: 200px)
and (max-width: 400px)
{ 
  .popUp {
  height: 25%;
  width: 87%;
}

#kina {
margin-top: 5%;
margin-right: 10%;
}

.icon-button-play {
  top: 45%;
}

.popUp h2 { 
  font-size: 30px;
}
}
<<<<<<< HEAD
</style>
=======

@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { 
      .popUp {
  height: 21%;
  width: 87%;
  margin-top: 32%;
}
    }
</style>

>>>>>>> 118103b5b74437cee2bff7fb8cbf3e0bdd6dff0d
