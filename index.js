var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var newPathSrc1 = "./images/dice"+randomNumber1+".png";
var newPathSrc2 = "./images/dice"+randomNumber2+".png";
document.querySelector("img.img1").setAttribute("src" , newPathSrc1);
document.querySelector("img.img2").setAttribute("src" , newPathSrc2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won";
} else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}