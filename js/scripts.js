function Game(name, roll, score, total){
  this.name = name;
  this.roll = roll;
  this.score = [];
  this.total = total;
}

var roll = function () {
  var roll = Math.floor((Math.random()* 5)+1);
  return roll;
}

Game.prototype.holdScore = function(dieRoll) {

}


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
    var sngleRoll = roll();
    console.log(sngleRoll);
    var tempHold = newGamePlayerOne.score;
    console.log(tempHold);
    newGamePlayerOne.score = sngleRoll + tempHold;
    console.log(newGamePlayerOne.score );
  });
  // $("#formone").submit(function(event) {
  //   event.preventDefault();
  //   newGame.hold();
  //
  // $("#formone").submit(function(event) {
  //   event.preventDefault();
  //   newGame.hold();



});
