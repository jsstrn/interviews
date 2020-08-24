const debounce = function (fn, delay = 1000) {
  let timer;

  return function () {
    clearTimeout(timer);

    const args = Array.from(arguments);

    timer = setTimeout(fn, delay, ...args);
  };
};

module.exports = debounce;
