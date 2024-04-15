<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="map">
      <img class="map-img" src="/src/assets/Kort.jpg" alt="">
  </div>
  <div class="popUp">
    <h2>Bagholdsangreb ved den gule flod</h2>
    <p> Varighed 2 minutter</p>
    <p>Kina</p>
  </div>
</template>


<style scoped>
.map {
  background-color: #343333;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.map img {
  transform: scale(5) translateX(-10%);
}

.popUp p {
  position: relative;
  width: 8%;
  padding: 10px 20px; 
  border: 2px solid white; 
  border-radius: 50px; 
}
</style>