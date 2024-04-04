<script setup>

</script>

<template>     
    <div class="container">
    <div>
   <img src="../assets/logo.png" alt="logo" class="centered-image">
   </div>
      <div class="forside">    
        <div class="text">
        <p class="overskrift2"> Geografisk Have</p>
        <hr>
        <p class="overskrift"> PLANTHUNTERS</p>
        <hr>
        <button class="big-button">Continue</button>
        <div class="small-buttons">
          <button class="small-button1">Dansk</button>
          <button class="small-button2">Engelsk</button>
        </div>
      </div>
          
        </div>
      </div>
  
  </template>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url(../assets/bg.PNG);
    background-position: center;
    height: 130vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #125F31, transparent);
  }
  
  .forside {
    top: 13%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  
  .centered-image {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 149px;
    max-height: 150px;
    z-index: 10;
    
  }


  
  .text {
    position: relative;
    padding: 10px;
    text-align: center;
    z-index: 1;
  }
  
  .overskrift {
    text-align: center;
    font-size: 25px;
    font-family: 'Trajan Pro 3' , serif;
    font-weight: regular;
    margin: 0;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 100);  /* This adds a drop shadow to the text */
}

.overskrift2 {
    text-align: center;
    font-size: 20px;
    font-family: 'Trajan Pro 3' , serif;
    font-weight: regular;
    margin: 0;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 100);  /* This adds a drop shadow to the text */
}
  

  .big-button {
    margin-top: 3px;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #125F31;
    font-size: 20px;
  width: 186px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.70); 

}

.small-buttons {
  display: flex;
  justify-content: center;
  width: 200px;

  
}


.small-button1, .small-button2 {
    margin: 0 10px;  /* This adds 10px of space to the left and right of each button */
  
}

.small-button1 {
    background-color: rgba(0, 0, 0, 0.2); 
    border-color: white;
    color: white;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    width: 90px;
    height: 30px;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.70); 
}

.small-button2 {
    background-color: #125F31;
    width: 90px;
  height: 30px;
  border-radius: 50px;
  border-color: white;
    color: white;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    width: 90px;
    height: 30px;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.70); 
}
  </style>