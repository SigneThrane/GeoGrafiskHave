<template>
  <div class="audio">
    <div class="img-container">
      <img class="blur-img" src="/src/assets/Bagholdsangreb.jpg" alt="">
      <div class="color-overlay"></div>
      <router-link to="/audio">
        <button class="back-button"></button>
    </router-link>
    </div>
    <div class="text-overlay">
      <h2>Bagholdsangreb ved den gule flod</h2>
      <div class="scrollable-content">
        <p>
          Det var tidlig marts 1912 ved bredden af 
den gule flod, 700 kilometer syd for Beijing. 
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
</template>

<script setup>

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
  font-size: 1.5em;
  margin-bottom: 8px;
}

.text-overlay p {
  font-family: open sans;
  font-size: 1em;
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
  height: 4%;
  width: 10%;
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
</style>