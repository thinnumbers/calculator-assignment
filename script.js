var half_input = document.getElementById("half-input");
var half_button = document.getElementById("half-button");
var fortune_input = document.getElementById("fortune-input");
var fortune_button = document.getElementById("fortune-button");
var fortune_output = document.getElementById("fortune-output")

half_button.addEventListener("click",halfNumber);
fortune_button.addEventListener("click",fortune);

function halfNumber(){
  var result = half_input.value / 2;
  alert("Half of " + half_input.value + " is " + result);
}
function fortune(){
  restyle();
  var randomFortune = Math.floor(Math.random() * 5);
  if(randomFortune == 0){
    fortune_output.innerHTML = fortune_input.value + ", you will be first Spider-man";
  }
  else if(randomFortune == 1){
    fortune_output.innerHTML= "Hope will be brought back to this world by you, " + fortune_input.value;
  }
  else if(randomFortune == 2){
    fortune_output.innerHTML= "The next big thing will be made by " + fortune_input.value;
  }
  else if(randomFortune == 3){
    fortune_output.innerHTML= fortune_input.value + ", you will be the hero we need";
  }
  else{
      fortune_output.innerHTML=fortune_input.value + ", you are honestly hopeless";
  }
}
function restyle(){
  var redRandom = Math.random() * 255;
  var greenRandom = Math.random() * 255;
  var blueRandom = Math.random() * 255;
  var font = Math.random() *50 +10;
  var degreeRandom = Math.random() *20;
  fortune_output.style.color = "rgb("+ redRandom + "," + greenRandom + "," +blueRandom +")";
  fortune_output.style.fontSize = font +"px";
  fortune_output.style.transform = "rotate(" + degreeRandom + "deg)";
  fortune_output.style.margin = "50px";
}
