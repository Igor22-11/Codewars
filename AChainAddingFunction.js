function add(n){
  const addNext = function(nextNum) {
      return add(n + nextNum);
  };
  
  addNext.valueOf = function() {
      return n;
  };
  
  return addNext;
}