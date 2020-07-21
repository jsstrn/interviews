class Counter {
  constructor() {
    this.count = 0;
  }

  add() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }

  result() {
    return this.count;
  }

  log() {
    console.log(`This algorithm took ${this.count} steps to find the item`);
  }
}

module.exports = new Counter();
