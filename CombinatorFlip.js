function flip(fn) {
  //complete this function here
    return (...args) => fn(...(args.reverse()))
}
