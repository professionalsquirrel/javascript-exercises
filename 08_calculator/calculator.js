const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(array) {
	return array.reduce((acc, curr) => acc * curr);
};

const power = function(x,p) {
	return Math.pow(x,p);
};

const factorial = function(x) {
	if (x === 0 || x ==1 ) return 1;
  for (let i = x - 1; i >= 1; i--){
    x *= i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
