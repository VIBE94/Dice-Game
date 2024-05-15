

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;


var a = document.querySelectorAll("img");

a[0].setAttribute("src", `./images/dice${dice1}.png`);
a[1].setAttribute("src", `./images/dice${dice2}.png`);

if (dice1 == dice2) document.querySelector("h1").innerText = "TIE";
else if (dice1 > dice2) document.querySelector("h1").innerText = "PLayer 1 Wins";
else document.querySelector("h1").innerText = "PLayer 2 Wins";