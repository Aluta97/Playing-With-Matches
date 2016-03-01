function getRandomIntInclusive(min, max) {
 return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
}

var el = document.querySelector("#random")
function upDate(){
el.innerHTML = getRandomIntInclusive();
}
getRandomIntInclusive();
upDate();


function getRandomIntInclusive(min, max) {
 return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

var el = document.querySelector("#two")
function upDate(){
el.innerHTML = getRandomIntInclusive();
}
getRandomIntInclusive();
upDate();

function getRandomIntInclusive(min, max) {
 return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

var el = document.querySelector("#three")
function upDate(){
el.innerHTML = getRandomIntInclusive();
}
getRandomIntInclusive();
upDate();
