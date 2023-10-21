// First Dice Part
var randomDiceNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomDiceNumber1+".png";
var randomImageSource1="assets/images/"+randomDiceImage1;
var imag1=document.querySelectorAll("img")[0]
imag1.setAttribute("src",randomImageSource1);

// Second Dice Part
var randomDiceNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomDiceNumber2+".png";
var randomImageSource2="assets/images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// Declaring The Winner
if(randomDiceNumber1>randomDiceNumber2){
     document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomDiceNumber2>randomDiceNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
else{
   document.querySelector("h1").innerHTML="Draw!"
}


