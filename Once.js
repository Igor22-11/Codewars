function once(func) {
  let called = false;
  return function(...arguments) { 
      if (!called) { 
          called = true;
          return func.apply(this,arguments);
      }
  }
} 
