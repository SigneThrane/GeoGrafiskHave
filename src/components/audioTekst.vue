<template>
  <div class="locale.changer"> 
  <div class="audio">
    <div class="img-container">
      <img class="blur-img" src="/src/assets/Bagholdsangreb.jpg" alt="">
      <div class="color-overlay"></div>
      <router-link to="/audio">
        <button class="back-button"></button>
    </router-link>
    </div>
    <div class="text-overlay">
      <h2>
        {{ $t('title') }}
      </h2>
      <div class="scrollable-content">
    
        <p> 
          {{ $t('story') }}
        </p>
     
      </div>
    </div>
  </div>
 </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
</script>


<style scoped>
.audio {
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
}

h2{
  font-family: 'stagBold', sans-serif;
}

.img-container {
  position: relative; 
  width: 100vw;
  height: 100vh;
}

.blur-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(6px);
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(22, 21, 21, 0.5);
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 83%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
}

.text-overlay h2 {
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: -10%;
}

.text-overlay p {
  font-family: open sans;
  font-size: 14px;
  margin: 5%;
}

.scrollable-content {
  max-height: 84vh; 
  overflow-y: auto;
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
  background-image: url('/src/assets/ToggleButton.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 45%; 
}

.back-button:hover {
  background-color: #696969;
}

@media only screen
and (min-width: 1370px)
and (max-width: 1605px)
{ 
.back-button {
  top: 15px; 
  left: 20px; 
  height: 7%;
  width: 4%;
  background-size: 30%; 
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
}
}

@media only screen
and (min-width: 370px)
and (max-width: 667px)
{ 
img{
  height: 70%;
}
.back-button {
  top: 15px; 
  left: 20px; 
  height: 5%;
  width: 9%;
  background-size: 35%; 
}
.text-overlay h2 {
  margin-bottom: 25px;
  margin-top: 25%;
}
}
</style>