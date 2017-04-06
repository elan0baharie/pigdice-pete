function Game(player1, player2, rollNum){
  this.player1 = player1 || "jeff";
  this.player2 = player2 || "mark";
  this.rollNum = rollNum;
  this.score = 0;
  this.total = 0;
  this.roll = function() {
    var roll = Math.floor((Math.random()* 5)+1);
    return roll;
  }
  this.holdScore = function() {
    if(this.score === 0) {
      console.log(this.score);
      this.score = this.rollNum + this.score;
      return this.score;
    } else if (this.score > 0) {
      console.log(this.rollNum);

      return this.score + this.rollNum;
    }
  }
}

// var roll = function () {
//   var roll = Math.floor((Math.random()* 5)+1);
//   return roll;
// }

// Game.prototype.holdScore = function(dieRoll) {
//   debugger;
//   if(isNaN(this.score) === true) {
//     this.score = 0;
//     console.log(this.score);
//     console.log(dieRoll);
//
//     var firstRoll = dieRoll + this.score;
//     console.log(firstRoll);
//
//   } else if (this.score > 0) {
//
//     console.log("here");
//     console.log(this.score + dieRoll);
//
//     return this.score + dieRoll;
//   }
//
// }


Game.prototype.dice = function () {
  var pRoll = Math.floor((Math.random()* 5)+1);
  console.log(pRoll);
    if (pRoll === 1){

      alert("Computer's Turn Ends");

    } else {
    this.score.push(pRoll);
    console.log(this.score);
    this.dice();
    }
}


var playerChoice = function (gameStatus) {
  var gameStatus = "";
  var choice = document.getElementsByName('players');

  for(var i = 0; i < choice.length ; i++) {
    if(choice[i].checked) {
      gameStatus = choice[i].value;
      return gameStatus;
    }
  };
}

function showPlayers (userResponse) {
  if(userResponse === "one-player") {
    var plyOne = document.getElementById('playOne');
    plyOne.classList.remove(".hide-class");
  } else {
    var playOne = document.getElementById('playOne');
    var plyTwo = document.getElementById('playTwo');
    plyOne.classList.remove("hide-class");
    plyTwo.classList.remove("hide-class");
  }
}


$(document).ready(function(){

  var newGameOpponent = new Game();
  var newGamePlayerOne = new Game();

  $("#playerOptions").click(function() {
    var numbOfPlayers = playerChoice();
    // $("#playerOptions").hide(800);
    // showPlayers(numbOfPlayers);
  });


  // $("#formone").submit(function(event) {
  //   event.preventDefault();
  //   newGameOpponent.dice();
  // });

  $("#rollPlayerDie").click(function(event) {
    event.preventDefault();
    newGamePlayerOne.rollNum = newGamePlayerOne.roll();
    var test = newGamePlayerOne.holdScore();
    console.log(test);
  });
  // $("#formone").submit(function(event) {
  //   event.preventDefault();
  //   newGame.hold();
  //
  // $("#formone").submit(function(event) {
  //   event.preventDefault();
  //   newGame.hold();



});
