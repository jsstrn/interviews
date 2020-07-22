const Node = require("./node");
const LinkedList = require("./linkedList");

describe("Linked-List", () => {
  describe("init()", () => {
    it("returns size as 0 upon initialization", () => {
      const linkedList = new LinkedList();

      expect(linkedList.size).toBe(0);
    });

    it("does not allow you to arbitrarily assign the value of size", () => {
      const list = new LinkedList();

      list.size = 8;

      expect(list.size).toBe(0);
    });

    it("returns head as null upon initialization", () => {
      const list = new LinkedList();

      expect(list.head).toBe(null);
    });

    it("does not allow you to arbitrarily assign the value of head", () => {
      const list = new LinkedList();

      list.head = "Some other value";

      expect(list.head).toBe(null);
    });

    it("returns tail as null upon initialization", () => {
      const list = new LinkedList();
      expect(list.tail).toBe(null);
    });
  });

  describe("add()", () => {
    it("adds a new node to the linked-list", () => {
      const list = new LinkedList();

      list.add(11);

      expect(list.size).toBe(1);
      expect(list.head.value).toBe(11);
      expect(list.head).toBeInstanceOf(Node);
    });

    it("adds two nodes to the linked-list", () => {
      const list = new LinkedList();

      list.add(11);
      list.add(22);

      expect(list.size).toBe(2);
      expect(list.head.value).toBe(11);
      expect(list.head.next.value).toBe(22);
    });

    it("adds three nodes to the linked-list", () => {
      const list = new LinkedList();

      list.add(11);
      list.add(22);
      list.add(33);

      expect(list.size).toBe(3);
      expect(list.head.value).toBe(11);
      expect(list.head.next.value).toBe(22);
      expect(list.head.next.next.value).toBe(33);
    });
  });
});
