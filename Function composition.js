function compose(...functions) {
  // Your solution
      return function(arg) {
        return functions.reduceRight((acc, fn) => {
            return fn(acc);
        }, arg);
    };
}