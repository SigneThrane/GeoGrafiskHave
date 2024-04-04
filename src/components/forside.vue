<script setup>

</script>

<template>
    <div class="forside">
    <div class="text">
        <h1 class="overskrift">Velkommen til min hjemmeside</h1>
        <p class="p1">Her kan du finde information om mig og mine projekter</p>
    </div>
</div>
</template>



<style scoped>
.text {
  border: 1px solid white; /* border around the text */
  padding: 10px; /* space between the border and the text */
  background-color: rgba(9, 160, 120, 0.5); /* semi-transparent black background */
  text-align: center; /* center the text */
}

.overskrift {
        font-size: 3rem;
        margin-bottom: 0;
        color: white;
}

.p1 {
    font-size: 1.5rem;
    margin-top: 0;
    color: white;
}

.forside {
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