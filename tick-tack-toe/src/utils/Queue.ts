import Players from "../Player";

class Queue {
  private queue: Players[];

  constructor() {
    this.queue = [];
  }

  init(players: Players[]): Players[] {
    players.forEach((p) => {
      this.queue.push(p);
    });
    return this.queue;
  }

  getNextPlayer(): Players {
    const player = this.queue.splice(0, 1)[0];
    return player;
  }

  addPlayerToEnd(player: Players): void {
    this.queue.push(player);
  }

  addPlayerToFirst(player: Players): void {
    this.queue.unshift(player);
  }
}

export default Queue;
