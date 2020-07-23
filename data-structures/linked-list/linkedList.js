const Node = require("../node/node");

class LinkedList {
  constructor() {
    this._head = null;
  }

  get head() {
    return this._head;
  }

  get size() {
    if (this.isEmpty()) {
      return 0;
    }

    let count = 1;
    let pointer = this.head;

    while (pointer && pointer.next !== null) {
      count += 1;
      pointer = pointer.next;
    }

    return count;
  }

  get tail() {
    let pointer = this.head;

    while (pointer && pointer.next !== null) {
      pointer = pointer.next;
    }

    return pointer;
  }

  isEmpty() {
    return !this.head;
  }

  add(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this._head = node;
      return;
    }

    this.tail._next = node;
  }

  remove() {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head === this.tail) {
      this._head = null;
      return true;
    }

    this._head = this.head.next;
    return true;
  }
}

module.exports = LinkedList;
