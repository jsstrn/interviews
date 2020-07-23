const Node = require("../node/node");

class LinkedList {
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

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this._head = node;
      this._size += 1;
      return;
    }

    this.tail._next = node;
    this._size += 1;
  }
}

module.exports = LinkedList;
