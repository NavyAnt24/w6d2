(function (root) {
  var TicTacToe = root.TicTacToe = (root.TicTacToe || {});

  var Game = TicTacToe.Game = function() {
    this.board = new Board();
    this.readline = require('readline');
    this.player1 = new HumanPlayer("X");
    this.player2 = new HumanPlayer("O");
    this.currentPlayer = this.player1;

    this.reader = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  Game.prototype.promptUser = function() {
    var that = this;
    this.reader.question("Where would you like to move?", function (position) {
      array_position = that.board.convertPlayerInput(parseInt(position));
      if (that.board.validMove(array_position)) {
        that.board.move(position, that.currentPlayer)
        that.run();
      } else {
        that.promptUser();
      }
    });

  };

  Game.prototype.run = function() {
    if(this.board.won() === true) {
      console.log(this.winner + " wins!");
    } else {
      this.board.printBoard();
      this.promptUser();
      if (this.currentPlayer.symbol === "X") {
        this.currentPlayer = this.player2;
      } else{
        this.currentPlayer = this.player1;
      }
    }
  };

  /*****************************************************/

  var HumanPlayer = TicTacToe.HumanPlayer = function(symbol) {
    this.symbol = symbol;
  }

  /*****************************************************/

  var Board = TicTacToe.Board = function() {
    this.grid = new Array([1,2,3], [4,5,6], [7,8,9]);
  }

  Board.prototype.printBoard = function() {
    console.log("Row 1: " + this.grid[0]);
    console.log("Row 2: " + this.grid[1]);
    console.log("Row 3: " + this.grid[2]);
  }

  Board.prototype.makeMove = function(position, player) {
    this.grid[position[0][position[1]]] = player.symbol;
  };

  Board.prototype.validMove = function(position, player) {
    console.log(position);
    if (position[0] < 0 || position[0] > 2 || position[1] < 0 || position[1] > 2) {
      console.log("That is not a valid move. Please try again.");
      return false;
    } else if (this.grid[position[0][position[1]]] === "X" || this.grid[position[0][position[1]]] === "O") {
      console.log("That position is occupied. Please try again");
      return false;
    }
    return true;
  };

  Board.prototype.convertPlayerInput = function(inputPosition) {
    row = Math.floor(inputPosition / 3) - 1;
    column = (inputPosition % 3) - 1;
    return [row, column];
  }

  Board.prototype.won = function() {

  };

  Board.prototype.winner = function() {

  };

  var game = new Game();
  game.run();

})(this);