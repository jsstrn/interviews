const memoize = require("./memoize");

describe("Memoize", () => {
  beforeEach(() => {
    mockedSum.mockClear();
  });

  const mockedSum = jest
    .fn()
    .mockImplementation((n) => n.reduce((a, b) => a + b));

  it("calls the momoized function once when invoked once", () => {
    const sum = memoize(mockedSum);
    expect(sum([2, 3])).toBe(5);
    expect(mockedSum).toHaveBeenCalledTimes(1);
  });

  it("calls the momoized function only once when invoked twice with same arguments", () => {
    const sum = memoize(mockedSum);
    expect(sum([6, 3])).toBe(9);
    expect(sum([6, 3])).toBe(9);
    expect(mockedSum).toHaveBeenCalledTimes(1);
  });
});
