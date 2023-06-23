let randomNumber1 = Math.floor(Math.random() *6)+1; //inclusive of 1

let randomDiceImage ="dice" + randomNumber1+".png";
let randomImageSource1 = "images/"+ randomDiceImage; //rendering images

let image1 = document.querySelectorAll("img")[0]; //work as variable image1
image1.setAttribute("src",randomImageSource1); //set attr is a method inside that it works as for loop

let randomNumber2 = Math.floor(Math.random() *6)+1;
let randomImageSource2 = "images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }