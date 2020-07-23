const Queue = require("./queue");

describe("Queue", () => {
  describe("init()", () => {
    it("returns size as zero", () => {
      const queue = new Queue();

      expect(queue.size).toBe(0);
    });

    it("returns head as null", () => {
      const queue = new Queue();

      expect(queue.head).toBe(null);
    });

    it("returns tail as null", () => {
      const queue = new Queue();

      expect(queue.tail).toBe(null);
    });
  });

  describe("isEmpty()", () => {
    it("returns true when queue is empty", () => {
      const queue = new Queue();

      expect(queue.isEmpty()).toBe(true);
    });

    it("returns false when queue is not empty", () => {
      const queue = new Queue();

      queue.enqueue(11);

      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe("enqueue()", () => {
    it("adds a node to the queue", () => {
      const queue = new Queue();

      queue.enqueue(11);

      expect(queue.size).toBe(1);
      expect(queue.head.value).toBe(11);
    });

    it("adds two nodes to the queue", () => {
      const queue = new Queue();

      queue.enqueue(11);
      queue.enqueue(22);

      expect(queue.size).toBe(2);
      expect(queue.head.value).toBe(11);
      expect(queue.tail.value).toBe(22);
    });

    it("adds three nodes to the queue", () => {
      const queue = new Queue();

      queue.enqueue(11);
      queue.enqueue(22);
      queue.enqueue(33);

      expect(queue.size).toBe(3);
      expect(queue.head.value).toBe(11);
      expect(queue.tail.value).toBe(33);
    });
  });

  describe("dequeue()", () => {
    it("returns false if there is nothing to dequeue", () => {
      const queue = new Queue();

      expect(queue.dequeue()).toBe(false);
    });

    it("returns true if dequeue was successful", () => {
      const queue = new Queue();

      queue.enqueue(11);

      expect(queue.dequeue()).toBe(true);
      expect(queue.size).toBe(0);
    });

    it("points to the next node as the new head", () => {
      const queue = new Queue();
      queue.enqueue(11);
      queue.enqueue(22);

      queue.dequeue();

      expect(queue.head.value).toBe(22);
      expect(queue.size).toBe(1);
    });
  });
});
