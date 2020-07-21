const counter = require("../counter");
const binarySearch = require("./binarySearch");
const { count } = require("console");

describe("binarySearch()", () => {
  it("returns 1 when item is found in the sorted list", () => {
    const sortedList = [...Array(64).keys()];
    expect(binarySearch(sortedList, 1)).toBe(1);
  });

  it("returns 2 when item is found in the list", () => {
    const sortedList = [...Array(10).keys()];
    expect(binarySearch(sortedList, 2)).toBe(2);
  });

  it("returns 73 when item is found in the list", () => {
    const sortedList = [...Array(100).keys()];
    expect(binarySearch(sortedList, 73)).toBe(73);
  });

  it("should take no more than 10 steps to find the item", () => {
    counter.reset();
    const sortedList = [...Array(1000).keys()];
    binarySearch(sortedList, 73, counter);
    expect(counter.result()).toBeLessThanOrEqual(10);
  });

  it("returns null when item is not found in the list", () => {
    const sortedList = [...Array(10).keys()];
    expect(binarySearch(sortedList, 100)).toBe(null);
  });
});
