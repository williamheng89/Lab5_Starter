// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // const airImg = new Image();
  // const carImg = new Image();
  // const partyImg = new Image();
  // airImg = "assets/images/air-horn.svg";
  // carImg = "assets/images/car-horn.svg";
  // partyImg = "assets/images/party-horn.svg";


  const jsConfetti = new JSConfetti()

  const horn = document.getElementById("horn-select");
  var sound = new Audio();
  horn.addEventListener("change", (event) =>{
    if (horn.value == 'air-horn'){
      document.body.querySelector("img").src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3"
    }
    else if (horn.value == "car-horn"){
      document.body.querySelector("img").src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3"
    }
    else {
      document.body.querySelector("img").src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3"
    }
  });

  const volume_slide = document.getElementById("volume");
  
  volume_slide.addEventListener("change", (event) => {
    if (volume_slide.value == 0)
      document.body.querySelector("div img").src = "assets/icons/volume-level-0.svg";  
    else if (volume_slide.value >= 1 && volume_slide.value < 33 )
      document.body.querySelector("div img").src = "assets/icons/volume-level-1.svg";  
    else if (volume_slide.value >= 33 && volume_slide.value < 67)
      document.body.querySelector("div img").src = "assets/icons/volume-level-2.svg";  
    else if (volume_slide.value >= 67 && volume_slide.value <= 100)
      document.body.querySelector("div img").src = "assets/icons/volume-level-3.svg";  
  });

  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    sound.volume = volume_slide.value / 100;
    sound.play();
    if (horn.value == 'party-horn')
      jsConfetti.addConfetti();
  });
}