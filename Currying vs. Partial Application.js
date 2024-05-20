function curryPartial(fn, ...args) {
  
  if (args.length >= fn.length) {
    return fn(...args);
  }
  
  return function(...newArgs) {
    
    const allArgs = args.concat(newArgs);
    
    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    }
    return curryPartial(fn, ...allArgs);
  }
}