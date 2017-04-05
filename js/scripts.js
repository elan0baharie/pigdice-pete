function Game(name,computer){
  this.name=name;
  this.playerScore=0;
  this.computer=computer;
  this.computerScore=0;
  this.turnScore=0;
}

Game.prototype.randomize = function () {
    var diceArray = [1,2,3,4,5,6];
    var roll = diceArray[Math.floor(Math.random()* diceArray.length)];
    return roll;
  }

  Game.prototype.score= function () {
    if (user=== 1){
     total = 0;
     alert("gameover")}
     
    this.computerScore+=this.turnScore;
    this.turnScore=0
    return this.computerScore;
  }



$(document).ready(function(){
  $("#formone").submit(function(event) {
    $(event).preventDefault;
    var inputRoll= parseInt("#roll").val();
    var total =0;
    var user= inputRoll;

    } else {

    }

    $("?").click(){
      var hold=[];
      hold.push(this.playerScore);
    }


});
});
