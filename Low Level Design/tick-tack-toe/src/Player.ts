import PlayerSymbol from "./PlayerSymbol";

class Players {
  private name: string;
  private symbol: PlayerSymbol;
  constructor(name: string, symbol: PlayerSymbol) {
    this.name = name;
    this.symbol = symbol;
  }
  public getName() {
    return this.name;
  }
  public getSymbol() {
    return this.symbol;
  }
}

export default Players;
