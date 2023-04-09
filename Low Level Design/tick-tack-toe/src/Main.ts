import Game from "./Game";

const game = new Game(3);
game.initializeGame();
console.log("Game Winner: ", game.startGame());
