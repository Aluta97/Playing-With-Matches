var refreshPage = function() {
  window.location.reload();
};

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// returns the random numbers into arrays
var el = document.querySelectorAll(".random");

// loops through my nine randoms in the arrays..
var upDate = function() {
  for (i = 0; i < el.length; i++) {
    el[i].innerHTML = getRandomIntInclusive(1, 9);
  }
};

var match = function() {
  var matchText0 = document.getElementById("message0");
  var matchText1 = document.getElementById("message1");
  var matchText2 = document.getElementById("message2");
  var matchText3 = document.getElementById("message3");
  var matchText4 = document.getElementById("message4");
  var matchText5 = document.getElementById("message5");
  var matchText6 = document.getElementById("message6");
  var matchText7 = document.getElementById("message7");
  var matchText8 = document.getElementById("message8");


  if (el[0].innerHTML === el[1].innerHTML) {
    el[0].classList.add("highlight");
    el[1].classList.add("highlight");
    matchText0.innerHTML = el[0].innerHTML + " in row one" + " " + "are matching";
  }

  if (el[0].innerHTML === el[2].innerHTML) {
    el[0].classList.add("highlight");
    el[2].classList.add("highlight");
    matchText0.innerHTML = el[2].innerHTML + " in row one" + " " + "are matching";
  }

  if (el[1].innerHTML === el[2].innerHTML) {
    el[1].classList.add("highlight");
    el[2].classList.add("highlight");
    matchText1.innerHTML = el[2].innerHTML + " in row one" + " " + "are matching";
  }

  if (el[0].innerHTML === el[3].innerHTML) {
    el[0].classList.add("highlight");
    el[3].classList.add("highlight");
    matchText0.innerHTML = el[3].innerHTML + " in column one" + " " + "are matching";
  }

  if (el[0].innerHTML === el[6].innerHTML) {
    el[0].classList.add("highlight");
    el[6].classList.add("highlight");
    matchText0.innerHTML = el[6].innerHTML + " in column one" + " " + "are matching";
  }

  if (el[1].innerHTML === el[4].innerHTML) {
    el[1].classList.add("highlight");
    el[4].classList.add("highlight");
    matchText1.innerHTML = el[4].innerHTML + " in column two" + " " + "are matching";
  }

  if (el[1].innerHTML === el[7].innerHTML) {
    el[1].classList.add("highlight");
    el[7].classList.add("highlight");
    matchText1.innerHTML = el[7].innerHTML + " in column two" + " " + "are matching";
  }

  if (el[2].innerHTML === el[8].innerHTML) {
    el[2].classList.add("highlight");
    el[8].classList.add("highlight");
    matchText2.innerHTML = el[8].innerHTML + " in column three" + " " + "are matching";
  }

  if (el[2].innerHTML === el[5].innerHTML) {
    el[2].classList.add("highlight");
    el[5].classList.add("highlight");
    matchText2.innerHTML = el[5].innerHTML + " in column three" + " " + "are matching";
  }

  if (el[3].innerHTML === el[4].innerHTML) {
    el[3].classList.add("highlight");
    el[4].classList.add("highlight");
    matchText3.innerHTML = el[4].innerHTML + " in row two" + " " + "are matching";
  }

  if (el[3].innerHTML === el[5].innerHTML) {
    el[3].classList.add("highlight");
    el[5].classList.add("highlight");
    matchText3.innerHTML = el[5].innerHTML + " in row two" + " " + "are matching";
  }

  if (el[3].innerHTML === el[6].innerHTML) {
    el[3].classList.add("highlight");
    el[6].classList.add("highlight");
    matchText3.innerHTML = el[6].innerHTML + " in column one" + " " + "are matching";
  }

  if (el[4].innerHTML === el[5].innerHTML) {
    el[4].classList.add("highlight");
    el[5].classList.add("highlight");
    matchText4.innerHTML = el[5].innerHTML + " in column two" + " " + "are matching";
  }

  if (el[4].innerHTML === el[7].innerHTML) {
    el[4].classList.add("highlight");
    el[7].classList.add("highlight");
    matchText4.innerHTML = el[7].innerHTML + " in column two" + " " + "are matching";
  }

  if (el[5].innerHTML === el[8].innerHTML) {
    el[5].classList.add("highlight");
    el[8].classList.add("highlight");
    matchText5.innerHTML = el[8].innerHTML + " in column three" + " " + "are matching";
  }

  if (el[6].innerHTML === el[7].innerHTML) {
    el[6].classList.add("highlight");
    el[7].classList.add("highlight");
    matchText6.innerHTML = el[7].innerHTML + " in row three" + " " + "are matching";
  }

  if (el[6].innerHTML === el[8].innerHTML) {
    el[6].classList.add("highlight");
    el[8].classList.add("highlight");
    matchText6.innerHTML = el[6].innerHTML + " in row three" + " " + "are matching";
  }

  if (el[7].innerHTML === el[8].innerHTML) {
    el[7].classList.add("highlight");
    el[8].classList.add("highlight");
    matchText7.innerHTML = el[8].innerHTML + " in row three" + " " + "are matching";
  }

  //Diagonals:
  if (el[0].innerHTML === el[4].innerHTML) {
    el[0].classList.add("highlight");
    el[4].classList.add("highlight");
    matchText0.innerHTML = el[4].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[0].innerHTML === el[8].innerHTML) {
    el[0].classList.add("highlight");
    el[8].classList.add("highlight");
    matchText0.innerHTML = el[8].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[1].innerHTML === el[3].innerHTML) {
    el[1].classList.add("highlight");
    el[3].classList.add("highlight");
    matchText1.innerHTML = el[3].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[1].innerHTML === el[5].innerHTML) {
    el[1].classList.add("highlight");
    el[5].classList.add("highlight");
    matchText1.innerHTML = el[5].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[2].innerHTML === el[4].innerHTML) {
    el[2].classList.add("highlight");
    el[4].classList.add("highlight");
    matchText2.innerHTML = el[4].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[2].innerHTML === el[6].innerHTML) {
    el[2].classList.add("highlight");
    el[6].classList.add("highlight");
    matchText2.innerHTML = el[6].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[3].innerHTML === el[7].innerHTML) {
    el[3].classList.add("highlight");
    el[7].classList.add("highlight");
    matchText3.innerHTML = el[7].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[4].innerHTML === el[6].innerHTML) {
    el[4].classList.add("highlight");
    el[6].classList.add("highlight");
    matchText4.innerHTML = el[6].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[4].innerHTML === el[8].innerHTML) {
    el[4].classList.add("highlight");
    el[8].classList.add("highlight");
    matchText4.innerHTML = el[8].innerHTML + " in diagonal" + " " + "are matching";
  }

  if (el[5].innerHTML === el[7].innerHTML) {
    el[5].classList.add("highlight");
    el[7].classList.add("highlight");
    matchText5.innerHTML = el[7].innerHTML + " in diagonal" + " " + "are matching";
  }

};

upDate();
match();
