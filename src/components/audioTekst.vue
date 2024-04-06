<template>
<div class="audio">
  <button class="back-button" onclick="goBack()">
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-arrow-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
    </svg>
  </button>
  <div class="img-container">
    <img class="blur-img" src="/src/assets/Bagholdsangreb.jpg" alt="">
        <div class="color-overlay"></div>
    <div class="text-overlay">
      <h2>Bagholdsangreb ved den gule flod</h2>
      <div class="scrollable-content">
        <p>Det var tidlig marts 1912 ved bredden af 
        en gule flod, 700 kilometer syd for Beijing. 
        William Purdom som var plantejæger 
        fra Arnold Arboretums forskningsinstitut 
        og hans tre-mands følge rejste gennem et 
        ødelagt landskab efter Xinhai-revolutionen. 
        Vejene var farlige, fyldt med røvere, 
        men indtil nu havde deres rejse været 
        uden nogen former for besvær.

        Men da de nærmede sig deres destination, 
        som var jernbanestationen i Honan, 
        blev de pludselig overfaldet af en gruppe 
        røvere til hest. Skuddene fløj, 
        og to af Williams heste blev dræbt. 
        Røverne var højst sandsynligt ikke klar over 
        hvad Williams store last bestod af, 
        men han var udlænding, havde heste 
        de kunne bytte og så havde han penge 
        for det skulle man bruge for at krydse 
        de forskellige kontrollerede grænser.

        Men inden røverne kunne nå at handle yderligere, 
        greb William sit gevær og skød tre af dem 
        og flere af deres heste. 
        Hans følge sluttede sig derefter til kampen, 
        og røverne blev drevet væk. 

        Efter dette hæsblæsende scenarie galopperede 
        William og hans mænd til den nærliggende 
        by Shenchow, hvorefter de fortsatte 
        mod Beijing, uden flere forhindringer.

        William Purdom var på et utal af ekspeditioner
        til Kina og den tibetanske region Amdo. 
        Han sendte over 550 pakker frø og tusindvis
        af tørrede og nøje dokumenterede 
        herbarier til Boston i løbet af sin rejse.
        </p>   
     </div> 
         </div>
  </div>
</div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>

.audio {
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
}
.blur-img {
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
  z-index: 1;
}

.text-overlay h2 {
  font-size: 1.5em;
  margin-bottom: 8px;
}

.text-overlay p {
  font-size: 1.2em;
}
.scrollable-content {
  max-height: 600px; 
  overflow-y: auto; 
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #848484;
  border: none;
  border-radius: 50%;
  height: 4%;
  width: 8.9%;
  cursor: pointer;
  z-index: 2; 
}

.back-button:hover {
  background-color: #696969;
}
  </style>