// Random Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
source1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", source1);

// Random Image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
source2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", source2);

// Results
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!"
}
else{
  document.querySelector("h1").textContent = "Draw!"
}
