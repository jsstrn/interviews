const Node = require("./node");

describe("Node", () => {
  it("assigns value as null when none is provided", () => {
    const node = new Node();
    expect(node.value).toBe(null);
  });

  it("assigns next as null when none is provided", () => {
    const node = new Node();
    expect(node.next).toBe(null);
  });

  it("assigns value to 55", () => {
    const node = new Node(55);
    expect(node.value).toBe(55);
  });

  it("assigns value to 'I am a little teapot'", () => {
    const node = new Node("I am a little teapot");
    expect(node.value).toBe("I am a little teapot");
  });

  it("assigns next to the first node", () => {
    const firstNode = new Node();
    const secondNode = new Node(null, firstNode);
    expect(secondNode.next).toEqual(firstNode);
  });

  it("throws when next is not assigned an instance of Node or null", () => {
    expect(() => new Node(null, "invalid")).toThrow(
      "Must be an instance of Node or null"
    );
  });
});
