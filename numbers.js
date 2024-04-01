let min = 2
let max = 5
//defines the maximum in the array as 5 and the minimum as 2
const range = function() {
  return [...Array(max - min + 1).keys()].map(i => i + min);
};
/*defines range as a function that will return an array of numbers between min and max by making an array of numbers
using the spread operator, using the keys and map function to adjust the values*/
