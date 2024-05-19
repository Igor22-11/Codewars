function memo(fn) {
  const cache = new Map();

  return function(arg) {
      if (cache.has(arg)) {
          return cache.get(arg);
      } else {
          const result = fn(arg);
          cache.set(arg, result);
          return result;
      }
  }
}