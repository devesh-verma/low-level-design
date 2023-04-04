import PlayerSymbol from "./PlayerSymbol";

class Board {
  private size: number;
  private boardMaxtrix: PlayerSymbol[][] | null[][];
  constructor(boardSize: number) {
    this.size = boardSize;
    this.boardMaxtrix = [];
  }

  getBoardSize(): number {
    return this.size;
  }

  getBoard() {
    return this.boardMaxtrix;
  }

  initializeBoard(): void {
    for (let i = 0; i < this.size; i++) {
      this.boardMaxtrix.push([]);
      for (let j = 0; j < this.size; j++) {
        this.boardMaxtrix[i][j] = null;
      }
    }
  }

  checkCellEmpty(row: number, column: number): boolean {
    if (this.boardMaxtrix[row][column] === null) {
      return true;
    }
    return false;
  }

  playTurn(row: number, column: number, symbol: PlayerSymbol): boolean {
    const isCellEmpty = this.checkCellEmpty(row, column);
    if (isCellEmpty) {
      this.boardMaxtrix[row][column] = symbol;
      return true;
    }
    console.log("Cell not empty", {
      row,
      column,
      value: this.boardMaxtrix[row][column],
    });
    return false;
  }
  displayGrid = () => {
    // display array
    console.table(this.boardMaxtrix);
  };
}

export default Board;
