<template>
  <div class="audio-container">
    <button class="back-button" onclick="goBack()"> </button>
    <img src="../assets/featured.png" alt="">
    <p>Kina</p>
    <h1>Bagholdsangreb ved den gule flod</h1>

    <div class="audio">
  <audio id="audioPlayer" src="/src/assets/songPlaceholder.mp3"></audio>
  <div class="progress">
    <div id="progressBar"></div>
  </div>
  <div class="time-info">
    <span id="currentTime">0:00</span> / <span id="duration">0:00</span>
  </div>
  <div class="controls">
    <button id="speedButton" class="icon-button-speed"></button>

    <button id="skipBackButton" class="icon-button-back"></button>

    <button id="playPauseButton" class="icon-button-play">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16" id="playIcon">
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16" id="pauseIcon" style="display: none;">
    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
  </svg>
</button>

    <button id="skipForwardButton" class="icon-button-forward"></button>

    <button id="textButton" class="icon-button-text"></button>
  </div>
</div>
  </div>
</template>

<script setup>
document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPauseButton');
  const skipBackButton = document.getElementById('skipBackButton');
  const skipForwardButton = document.getElementById('skipForwardButton');
  const speedButton = document.getElementById('speedButton');
  const textButton = document.getElementById('textButton');
  const progressBar = document.getElementById('progressBar');
  const currentTimeSpan = document.getElementById('currentTime');
  const durationSpan = document.getElementById('duration');

  let isPlaying = false;
  let currentSpeedIndex = 0;
  const playbackSpeeds = [1.0]; 

  function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    document.getElementById('playIcon').style.display = 'inline-block';
    document.getElementById('pauseIcon').style.display = 'none';
  } else {
    audioPlayer.play();
    document.getElementById('playIcon').style.display = 'none';
    document.getElementById('pauseIcon').style.display = 'inline-block';
  }
  isPlaying = !isPlaying;
}

function changeSpeed() {
  currentSpeedIndex = (currentSpeedIndex + 1) % playbackSpeeds.length;
  audioPlayer.playbackRate = playbackSpeeds[currentSpeedIndex];
  speedButton.textContent = ''; 
}


  audioPlayer.addEventListener('timeupdate', function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';

    const currentTimeFormatted = formatTime(audioPlayer.currentTime);
    currentTimeSpan.textContent = currentTimeFormatted;

    const durationFormatted = formatTime(audioPlayer.duration);
    durationSpan.textContent = durationFormatted;
  });

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  playPauseButton.addEventListener('click', togglePlayPause);
  skipBackButton.addEventListener('click', () => {
    audioPlayer.currentTime -= 15; 
  });
  skipForwardButton.addEventListener('click', () => {
    audioPlayer.currentTime += 30; 
  });
  speedButton.addEventListener('click', changeSpeed);
});

</script>

<style scoped>
.audio-container {
  background-color: #343333;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

h1 {
  font-family: 'stagBold', sans-serif;
  margin-left: 7%;
  margin-top: 20px; 
}

p {
  margin-bottom: 39px; 
}

h1, p {
  color: #FFFFFF;
  margin-left: 7%;
  margin-top: -30px; 
}

.audio-container p {
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
  background-image: url('/src/assets/backButton.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 25%; 
}

.back-button:hover {
  background-color: #696969;
}

.audio {
  position: relative;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 20px; 
}

.progress {
  width: 85%;
  background-color: #ffffff;
  height: 10px;
  margin: 10px auto;
  border-radius: 5px; 
}

#progressBar {
  width: 0%;
  height: 100%;
  background-color: #125F31;
}

.time-info {
  width: 85%;
  margin: 10px auto; 
  font-size: small;
  font-family: open sans;
  color: #848484;
}

.icon-button-text,
.icon-button-forward,
.icon-button-back,
.icon-button-speed,
.icon-button-play {
  padding: 12px 18px;
  background-color: RGB(52 51 51);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
  margin-top: -10px; 
}

.icon-button-text {
  background-image: url('/src/assets/Døv_Hvid.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 58%; 
}

.icon-button-forward{
  background-image: url('/src/assets/30_Hvid.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 85%; 
}

.icon-button-back{
  background-image: url('/src/assets/15_Hvid.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 85%; 
}

.icon-button-speed {
  background-image: url('/src/assets/1x_hvid.png');
  background-repeat: no-repeat;
  background-position: center; 
  background-size: 85%; 
}
</style>