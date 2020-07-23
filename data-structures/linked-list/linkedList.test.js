const Node = require("../node/node");
const LinkedList = require("./linkedList");

describe("Linked-List", () => {
  describe("init()", () => {
    it("returns size as 0", () => {
      const linkedList = new LinkedList();

      expect(linkedList.size).toBe(0);
    });

    it("returns head as null", () => {
      const list = new LinkedList();

      expect(list.head).toBe(null);
    });

    it("returns tail as null", () => {
      const list = new LinkedList();

      expect(list.tail).toBe(null);
    });

    it("does not allow arbitrary assign of size", () => {
      const list = new LinkedList();

      list.size = 8;

      expect(list.size).toBe(0);
    });

    it("does not allow arbitrary assign of head", () => {
      const list = new LinkedList();

      list.head = "Some other value";

      expect(list.head).toBe(null);
    });

    it("does not allow arbitrary assign of tail", () => {
      const list = new LinkedList();

      list.tail = "Some other value";

      expect(list.tail).toBe(null);
    });

    it("returns true when linked-list is empty", () => {
      const list = new LinkedList();

      expect(list.isEmpty()).toBe(true);
    });
  });

  describe("add()", () => {
    it("adds a node to the list", () => {
      const list = new LinkedList();

      list.add(11);

      expect(list.size).toBe(1);
      expect(list.head.value).toBe(11);
    });

    it("adds two nodes to the list", () => {
      const list = new LinkedList();

      list.add(11);
      list.add(22);

      expect(list.size).toBe(2);
      expect(list.head.value).toBe(11);
      expect(list.tail.value).toBe(22);
    });

    it("adds three nodes to the list", () => {
      const list = new LinkedList();

      list.add(11);
      list.add(22);
      list.add(33);

      expect(list.size).toBe(3);
      expect(list.head.value).toBe(11);
      expect(list.tail.value).toBe(33);
    });
  });

  describe("remove()", () => {
    it("returns false if there is nothing to remove", () => {
      const list = new LinkedList();

      expect(list.remove()).toBe(false);
    });

    it("returns true if remove was successful", () => {
      const list = new LinkedList();

      list.add(11);

      expect(list.remove()).toBe(true);
      expect(list.size).toBe(0);
    });

    it("points to the next node as the new head", () => {
      const list = new LinkedList();
      list.add(11);
      list.add(22);

      list.remove();

      expect(list.head.value).toBe(22);
      expect(list.size).toBe(1);
    });
  });
});
