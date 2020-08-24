const debounce = require("./debounce");

describe("Debounce", () => {
  jest.useFakeTimers();
  const mockedFn = jest.fn();

  beforeEach(() => {
    mockedFn.mockClear();
  });

  it("called the debounced function only once when invoked once", () => {
    const fn = debounce(mockedFn);

    fn();
    jest.runAllTimers();

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });

  it("called the debounced function only once when invoked thrice", () => {
    const fn = debounce(mockedFn);

    fn();
    fn();
    fn();
    jest.runAllTimers();

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
