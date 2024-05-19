function cache(func) {
  const cacheMap = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if(cacheMap.has(key)) {
      return cacheMap.get(key);
    } else {
      const result = func(...args);
      cacheMap.set(key, result);
      return result;
    }
  }
}