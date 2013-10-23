(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Game = Hanoi.Game = function() {
    this.piles = [[3,2,1], [], []];
    this.readline = require('readline');

    this.reader = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  Game.prototype.move = function(pile1, pile2){
    this.piles[pile2-1].push(this.piles[pile1-1].pop());
    this.run();
  }

  Game.prototype.printPiles = function() {
    console.log("Pile 1: " + this.piles[0]);
    console.log("Pile 2: " + this.piles[1]);
    console.log("Pile 3: " + this.piles[2]);
  }

  Game.prototype.validMove = function(pile1, pile2){
    var finalEl1 = this.piles[pile1 - 1][this.piles[pile1 - 1].length - 1];
    var finalEl2 = this.piles[pile2 - 1][this.piles[pile2 - 1].length - 1];

    if(this.piles[pile1-1].length === 0){
      return false;
    } else if (this.piles[pile2-1].length !== 0 && finalEl1 > finalEl2){
      console.log("Not a valid move. Try again.");
      console.log("");
      return false;
    } else {
      return true;
    }
  }

  Game.prototype.won = function() {
    if (this.piles[2].length === 3 || this.piles[1].length === 3) {
      return true;
    } else {
      return false;
    }
  }

  Game.prototype.promptUser = function() {

    var that = this;

    this.reader.question("Where would you like to move from?", function (pile1) {
      that.reader.question("Where would you like to move to?", function (pile2) {
        if (that.validMove(parseInt(pile1), parseInt(pile2))) {
          that.move(pile1, pile2);
        } else {
          that.promptUser();
        }
      })
    })
  }

  Game.prototype.run = function() {
    if (this.won() === true) {
      console.log("You win!");
    } else {
      this.printPiles();
      this.promptUser();
      // this.run(completionCallback);
    }
  }


  var game = new Game();
  game.run();


})(this);




