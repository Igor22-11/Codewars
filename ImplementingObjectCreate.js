Object.create = function (prototype, properties) {
  //Your code goes here
  //And remember: you need not to reinvent Object.defineProperties on your own!
  if (typeof prototype === 'undefined') {
    throw new TypeError()
  }
  const obj = {};
  Object.setPrototypeOf(obj, prototype)
  if (typeof properties !== 'undefined') {
    Object.defineProperties(obj, properties)
  }
  return obj;
};