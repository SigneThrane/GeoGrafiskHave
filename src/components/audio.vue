<template>
  <div class="audio">
    <button class="back-button" onclick="goBack()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg> </button>
    <img src="../assets/featured.png" alt="">
    <p>Kina</p>
    <h1>Bagholdsangreb ved den gule flod</h1>

    <audio src="/src/assets/songPlaceholder.mp3" controls autoplay></audio>
  </div>
</template>

<script setup>

</script>

<style scoped>
.audio {
  background-color: #343333;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}

h1, p {
  color: #FFFFFF;
  margin-left: 7%;
  margin-top: -30px; 
}

p {
  margin-bottom: 40px; 
}

.audio p {
  position: relative;
  width: 8%;
  padding: 10px 20px; 
  border: 2px solid white; 
  border-radius: 50px; 
}

.back-button {
  position: absolute;
  top: 14px; 
  left: 14px; 
  background-color: #404040;
  border: none;
  border-radius: 50%;
  height: 4%;
  width: 10%;
  cursor: pointer;
}

.back-button:hover {
  background-color: #696969;
}

</style>