const Node = require("../node/node");

class Queue {
  constructor() {
    this._size = 0;
    this._head = null;
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  get tail() {
    let pointer = this.head;
    while (pointer && pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.head) {
      this._head = node;
      this._size += 1;
      return;
    }

    this.tail._next = node;
    this._size += 1;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }

    if (this.head === this.tail) {
      this._head = null;
      this._size -= 1;
      return true;
    }

    this._head = this.head.next;
    this._size -= 1;
    return true;
  }
}

module.exports = Queue;
