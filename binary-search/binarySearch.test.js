const binarySearch = require("./binarySearch");

describe("binarySearch()", () => {
  it("returns 1 when item is found in the sorted list", () => {
    const sortedList = [1, 3, 5];
    expect(binarySearch(sortedList, 1)).toBe(1);
  });

  it("returns 12 when item is found in the list", () => {
    const sortedList = [7, 12, 83];
    expect(binarySearch(sortedList, 12)).toBe(12);
  });

  it("returns 73 when item is found in the list", () => {
    const sortedList = [3, 22, 73];
    expect(binarySearch(sortedList, 73)).toBe(73);
  });

  it("returns null when item is not found in the list", () => {
    const sortedList = [7, 12, 43];
    expect(binarySearch(sortedList, 100)).toBe(null);
  });
});
