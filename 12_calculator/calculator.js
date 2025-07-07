const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  let s = 0
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s
};

const multiply = function (arr) {
  let s = 1
  for (let i = 0; i < arr.length; i++) {
    s *= arr[i];
  }
  return s
};

const power = function (a, b) {
 return a**b
};

const factorial = function (a) {
let s = 1
for (let i = 1; i <= a; i++) {
  s *= i  
}
return s
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
