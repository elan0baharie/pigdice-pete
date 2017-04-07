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
    if(this.rollNum === 1) {
      alert("You hit one");
      return this.score = 0;
    } else if (this.score === 0) {
      console.log(this.score);
      this.score = this.rollNum + this.score;
      return this.score;
    } else {
      console.log(this.rollNum);
      this.score = this.score + this.rollNum
      return this.score;
    }
  }
}

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


Game.prototype.oppDice = function () {
  var pRoll = this.roll();
  console.log(pRoll);
    if (pRoll === 1){
      alert("Computer's Turn Ends");
      this.score = 0;
      return;
    } else {
      this.score = this.score + pRoll;
      console.log(this.score);
      this.oppDice();
    }
}

$(document).ready(function(){

  var newGameOpponent = new Game();
  var newGamePlayerOne = new Game();

  $("#btnOnePlyr").click(function(event) {
    event.preventDefault();
    $("#playOne").removeClass("hide-class");
    $("#playerOptions").hide(800);
  });

  $("#btnTwoPlyr").click(function(event) {
    event.preventDefault();
    $("#playOne").removeClass("hide-class");
    $("#playTwo").removeClass("hide-class");
    $("#playerOptions").hide(800);
  });

  $("#formone").submit(function(event) {
    event.preventDefault();
    newGameOpponent.oppDice();
  });

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
