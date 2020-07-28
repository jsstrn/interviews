const selectionSort = require("./selectionSort");

describe("Selection Sort", () => {
  it("returns the sorted array", () => {
    expect(selectionSort([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  it("returns the sorted array [ 1, 2, 3, 4, 5 ]", () => {
    expect(selectionSort([2, 1, 5, 3, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns the sorted array [ 1, 3, 5, 7, 9 ]", () => {
    expect(selectionSort([9, 1, 5, 3, 7])).toEqual([1, 3, 5, 7, 9]);
  });
});
