// Reset button
const reset = function reset() {
  window.alert();
  for (let i = 1; i <= 9; i++) {
    document.getElementById("r" + i).innerHTML = "";
  }
  count1 = 0;
  count2 = 0;
  p1.innerHTML = "";
  p2.innerHTML = "";
  sign = "X";
  disp.innerHTML = "<center>" + sign + " 's Turn " + "</center>";
};

// popup
const popup = function() {
  pop.style.display = "none";
};

// replay the game
const replay = function() {
  document.querySelector(".one").style.display = "none";
  document.querySelector(".tow").style.display = "none";
  document.querySelector(".three").style.display = "none";
};

// Elemenets
var xAudio = new Audio("saound/snd3.wav");
var oAudio = new Audio("saound/snd1.wav");
var TieAudio = new Audio("saound/snd2.ogg");
let sign = "X";
let disp = document.getElementById("player");
let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");
let count1 = 0;
let count2 = 0;
let pop = document.getElementById("popup");

// to know wich box'r clicked
function printx(number) {
  let box = document.getElementById("r" + number);
  console.log(box);

  if (box.innerText == "") {
    box.innerText = sign; // to print X //
    winner();
    checksign();

    disp.innerHTML = "<center>" + sign + " 's Turn " + "</center>";
  }
}

// Switch between (X and O)
function checksign() {
  if (sign == "X") sign = "O";
  else sign = "X";
}

// Id of box
function getbox(num) {
  return document.getElementById("r" + num).innerHTML;
}

// Check who Win (O OR X)
function checkMove(a, b, c, d) {
  if (getbox(a) == d && getbox(b) == d && getbox(c) == d) return true;
  else return false;
}

//  Winner OR Tie //
function winner() {
  if (
    getbox(1) != "" &&
    getbox(2) != "" &&
    getbox(3) != "" &&
    getbox(4) != "" &&
    getbox(5) != "" &&
    getbox(6) != "" &&
    getbox(7) != "" &&
    getbox(8) != "" &&
    getbox(9) != ""
  ) {
    TieAudio.play();
    pop.innerHTML =
      "<center> Tie !! </center>" + "\n" + " <center> play again </center>";
    pop.style.display = "block";
    setTimeout(popup, 3000);

    document.querySelector(".three").style.display = "block";
    setTimeout(replay, 3000);

    for (let i = 1; i <= 9; i++) {
      document.getElementById("r" + i).innerHTML = "";
    }
    // return;
    // throw " Tie ";
  } else {
    if (
      checkMove(1, 2, 3, "X") ||
      checkMove(4, 5, 6, "X") ||
      checkMove(7, 8, 9, "X") ||
      checkMove(1, 4, 7, "X") ||
      checkMove(2, 5, 8, "X") ||
      checkMove(3, 6, 9, "X") ||
      checkMove(1, 5, 9, "X") ||
      checkMove(7, 5, 3, "X")
    ) {
      //   audio.pause();

      xAudio.play();
      disp.innerHTML = "<center>" + sign + " 's Winner" + "</center>";
      document.querySelector(".one").style.display = "block";
      setTimeout(replay, 4000);

      count1++;
      for (let i = 1; i <= 9; i++) {
        p1.innerHTML = "<center> player X win " + count1 + " Time's </center>";
        document.getElementById("r" + i).innerHTML = "";
      }
      //   throw "";
    }

    if (
      checkMove(1, 2, 3, "O") ||
      checkMove(4, 5, 6, "O") ||
      checkMove(7, 8, 9, "O") ||
      checkMove(1, 4, 7, "O") ||
      checkMove(2, 5, 8, "O") ||
      checkMove(3, 6, 9, "O") ||
      checkMove(1, 5, 9, "O") ||
      checkMove(7, 5, 3, "O")
    ) {
      oAudio.play();
      disp.innerHTML = "<center>" + sign + " 's Winner" + "</center>";
      document.querySelector(".tow").style.display = "block";
      setTimeout(replay, 5000);
      // alert(" X are Win");

      count2++;
      for (let i = 1; i <= 9; i++) {
        p2.innerHTML = "<center> player O win " + count2 + " Time's </center>";
        document.getElementById("r" + i).innerHTML = "";
      }
      //   throw "Game end";
      // return;
    }
    // document.querySelector('.one').style.display='none';
  }
}
