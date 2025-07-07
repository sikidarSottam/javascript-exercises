const convertToCelsius = function(x) {
  let ans = (x - 32) * (5 /9)
  return ans.toFixed(2)
};

const convertToFahrenheit = function(x) {
  let ans = (x * 9/5) + 32)
  return ans.toFixed(2)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
