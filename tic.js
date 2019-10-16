let rstBtn = document.querySelector("#resetButton");
// Reset button
const reset = function() {
  window.alert();
  for (let i = 1; i <= 9; i++) {
    document.getElementById("r" + i).innerHTML = "";
  }
  p1.innerHTML = "";
  p2.innerHTML = "";
  sign = "X";
  disp.innerHTML = "<center>" + sign + " 's Turn " + "</center>";
};

rstBtn.addEventListener("click", reset);

// Elemenets
var audio = new Audio('ss.m4a');
let sign = "X";
let disp = document.getElementById("player");
let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");
let count1 = 0;
let count2 = 0;
let t = document.getElementsById("cell");
// let pop = document.getElementById("popup");

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
  if (getbox(a) == d && getbox(b) == d && getbox(c) == d) 
  return true;
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
    disp.innerHTML = "<center> Tie !! play agin </center>";

    for (let i = 1; i <= 9; i++) {
      document.getElementById("r" + i).innerHTML = "";
    }
    // return;
    throw " Tie ";
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

    audio.play()
      disp.innerHTML = "<center>" + sign + " 's Winner" + "</center>";
      
      
    //   t.style.background-color = "red";
      // alert(" X are Win");
    //   disp.style.display = "inline-block";

      count1++;
      for (let i = 1; i <= 9; i++) {
        p1.innerHTML = "<center> player X win " + count1 + " Time's </center>";
        document.getElementById("r" + i).innerHTML = "";
      }
      
    //   throw "Game end";
      // return;
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
        
      disp.innerHTML = "<center>" + sign + " 's Winner" + "</center>";
      // alert(" X are Win");

      count2++;
      for (let i = 1; i <= 9; i++) {
        p2.innerHTML = "<center> player O win " + count2 + " Time's </center>";
        document.getElementById("r" + i).innerHTML = "";
      }
      audio.play()
    //   throw "Game end";
      // return;
    }
  }
}
