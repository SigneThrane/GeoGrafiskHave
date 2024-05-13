<template>
  <!-- Map container -->
  <div class="map-container">
    <div id="map" style="height: 90vh"></div>
    <router-link to="/">
      <button class="back-button"></button>
    </router-link>

    <!-- Custom popup -->
    <div v-if="showCustomPopup" class="popUp">
      <div class="popup-img-container">
        <img class="popup-img" src="/src/assets/imgSmall.png" alt="" />
        <router-link to="/audio">
          <button id="playPauseButton" class="icon-button-play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="white"
              class="bi bi-play-fill"
              viewBox="0 0 16 16"
              id="playIcon"
            >
              <path
                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"
              />
            </svg>
          </button>
        </router-link>
      </div>
      <h2>{{ $t("title2") }}</h2>
      <div class="popup-info">
        <p id="varighed">{{ $t("Varighed2minutter") }}</p>
        <p id="kina">{{ $t("Kina") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import * as L from "leaflet";

import logoUrl from "../assets/logo.png";

const { t: $t } = useI18n();

const initialMap = ref(null);
const initCoords = { lat: 55.4732873, lng: 9.4946134 };
const showCustomPopup = ref(false);

onMounted(() => {
  initialMap.value = L.map("map").setView([initCoords.lat, initCoords.lng], 20);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(initialMap.value);

  initialMap.value.setMaxBounds([
    [initCoords.lat - 0.01, initCoords.lng - 0.01],
    [initCoords.lat + 0.01, initCoords.lng + 0.01],
  ]);


  // Define the custom icon
  var logo = L.icon({
    iconUrl: '/logoUrl',
    iconAnchor: [5, 3], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });



  // Create a custom marker with a clickable area
  const markerIcon = L.divIcon({
    className: "custom-marker",
    html: `<div id="marker-background"></div><img src="${logoUrl}" style="width: 60px; height: 62px;"/></div>`,
    iconAnchor: [5, 3], // Adjust anchor position as needed
    icon: logo, // Use the custom icon
  });

  const marker = L.marker([initCoords.lat, initCoords.lng], {
    icon: markerIcon,
  }).addTo(initialMap.value);

  // Open popup on marker click
  marker.on("click", () => {
    showCustomPopup.value = true;
  });
});
</script>

<style scoped>
/* Your CSS styles */
.popUp {
  position: fixed;
  bottom: 0;
  background-color: #343333;
  padding: 25px;
  color: #ffffff;
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

.popUp h2,
.popUp p {
  margin: 0;
  display: inline-block;
  color: white;
  font-family: "stagBold", sans-serif;
}

.popUp h2 {
  margin: 0;
  display: inline-block;
  color: white;
  position: relative;
  top: -45%;
  font-size: 35px;
}

p {
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
  background-color: #125f31;
  border: none;
  border-radius: 50%;
  padding: 0;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styling for the marker background */
#marker-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/custom-marker-background.png"); /* Replace with your image path */
  background-size: cover;
  border-radius: 50%;
}

#kina {
  position: relative;
  z-index: 1;
  width: 9%;
  height: 10%;
  padding: 10px 30px;
  border: 2px solid white;
  border-radius: 50px;
  font-family: "stagBold", sans-serif;
}

#varighed {
  position: relative;
  left: -6%;
  padding: 10px 20px;
  margin-bottom: 20px;
  color: #606060;
  font-family: "stagBold", sans-serif;
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
  background-image: url("/src/assets/backButton.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25%;
}


</style>
