class Node {
  constructor(value = null, next = null) {
    if (next !== null && !(next instanceof Node)) {
      throw new TypeError("Must be an instance of Node or null");
    }

    this._value = value;
    this._next = next;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

module.exports = Node;
