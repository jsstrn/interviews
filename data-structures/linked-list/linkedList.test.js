const LinkedList = require("./linkedList");

describe("Linked-List", () => {
  it("returns size as 0 upon initialization", () => {
    const linkedList = new LinkedList();
    expect(linkedList.size).toBe(0);
  });

  it("does not allow you to arbitrarily assign the value of size", () => {
    const linkedList = new LinkedList();
    linkedList.size = 8;
    expect(linkedList.size).toBe(0);
  });

  it("returns head as null upon initialization", () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
  });

  it("does not allow you to arbitrarily assign the value of head", () => {
    const linkedList = new LinkedList();
    linkedList.head = "Some other value";
    expect(linkedList.head).toBe(null);
  });
});
