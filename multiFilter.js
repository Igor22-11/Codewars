var multiFilter = function(...arg){
	return x => arg.every(f => f(x))
};
