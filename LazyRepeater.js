function makeLooper(str) {
  // TODO: return a function that loops through 'str' on successive invocations
  let index = 0; 

  return function() {
    const char = str[index];
    index = (index + 1) % str.length; 
    return char; 
  };
}