const Node = require("../node/node");
const LinkedList = require("../linked-list/linkedList");

class Queue extends LinkedList {
  constructor() {
    super();
  }

  enqueue(value) {
    this.add(value);
  }

  dequeue() {
    return this.remove();
  }
}

module.exports = Queue;
