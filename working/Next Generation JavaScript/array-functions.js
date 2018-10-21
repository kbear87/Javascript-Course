// Array functions


// .map   // This array method calls a function on each element within the array.
          // It also returns a new array. In the example below, the new array is stored in the doubleNumbers variable.
const numbers = [1, 2, 3];
const doubleNumbers = numbers.map((num) => {
  return num * 2;
});
console.log(numbers);
console.log(doubleNumbers);
