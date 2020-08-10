class Node {
  constructor(value = null, next = null) {
    if (!this.isNullOrInstanceOfNode(next)) {
      throw new TypeError("Must be an instance of Node or null");
    }

    this._value = value;
    this._next = next;
  }

  get id() {
    return this._id;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  isIstanceOfNode(next) {
    return next instanceof Node;
  }

  isNullOrInstanceOfNode(next) {
    return next === null || this.isIstanceOfNode(next);
  }
}

module.exports = Node;
