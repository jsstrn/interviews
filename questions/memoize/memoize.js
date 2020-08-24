const memoize = function (fn) {
  const cache = [];

  return function () {
    const [args] = Array.from(arguments);

    const fromCache = cache.find((exp) =>
      exp.args.every((n, i) => n === args[i])
    );

    if (fromCache) {
      return fromCache.result;
    }

    const result = fn(args);
    cache.push({ args, result });

    return result;
  };
};

module.exports = memoize;
