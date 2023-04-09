import Board from "./Board";
import Players from "./Player";
import PlayerSymbol from "./PlayerSymbol";
import PlayersQueue from "./utils/Queue";

class Game {
  private board: Board;
  private players: PlayersQueue;
  private counter: number;
  private winner: Players | null;

  constructor(size: number) {
    this.players = new PlayersQueue();
    this.board = new Board(size);
    this.counter = 0;
    this.winner = null;
  }

  initializeGame() {
    console.log("Initializing new game");

    // create players
    const playayer1 = new Players("Devesh", PlayerSymbol.X);
    const playayer2 = new Players("Harsh", PlayerSymbol.O);
    this.players.init([playayer1, playayer2]);

    // initialize board
    this.board.initializeBoard();
  }

  startGame() {
    console.log("Starting game");

    // TODO: while (this.winner !== null) {
    while (this.counter < 9) {
      // fetch user from queue;
      const player = this.players.getNextPlayer();
      console.log("Current player => ", player);

      // read row and column from cli;
      const row = Math.floor(Math.random() * 3);
      const column = Math.floor(Math.random() * 3);
      // player makes the move;
      const moveSuccess = this.board.playTurn(row, column, player.getSymbol());
      if (!moveSuccess) {
        // add user back to start of the queue
        console.log(
          "Move not successful, added player to the start of the queue"
        );
        this.players.addPlayerToFirst(player);
        continue;
      }
      this.players.addPlayerToEnd(player);

      // display grid
      this.board.displayGrid();
      // check winner
      const winner = this.checkWinner(row, column, player);
      if (winner === true) {
        this.winner = player;
        return { name: player.getName(), symbol: player.getSymbol() };
      }
      // repeat above till we have a winner
      this.counter++;
    }
    return "TIE";
  }

  private checkWinner(row: number, column: number, player: Players): boolean {
    const minimumMoves = this.board.getBoardSize() * 2 - 1;
    let rowMatch: boolean = true;
    let columnMatch: boolean = true;
    let diagonalMatch: boolean = true;
    let antidiagonalMatch: boolean = true;

    if (this.counter >= minimumMoves) {
      console.log("Checking winner");
      // iterate and check for winner
      const gameBoard = this.board.getBoard();
      const playerSymbol = player.getSymbol();

      // row check if all the symbols in a are matching with that of player
      for (let j = 0; j < gameBoard.length; j++) {
        if (gameBoard[row][j] !== playerSymbol) {
          rowMatch = false;
        }
      }

      // column check if all the symbols in a are matching with that of player
      for (let j = 0; j < gameBoard.length; j++) {
        if (gameBoard[j][column] !== playerSymbol) {
          columnMatch = false;
        }
      }

      // column check if all the symbols in a are matching with that of player
      for (let j = 0, i = 0; j < gameBoard.length; j++, i++) {
        if (gameBoard[i][j] !== playerSymbol) {
          diagonalMatch = false;
        }
      }

      // anit-column check if all the symbols in a are matching with that of player
      for (let j = gameBoard.length - 1, i = 0; j >= 0; j--, i++) {
        if (gameBoard[i][j] !== playerSymbol) {
          antidiagonalMatch = false;
        }
      }

      return rowMatch || columnMatch || diagonalMatch || antidiagonalMatch;
    }
    return false;
  }
}

export default Game;
