// Arrays - a single variable that stores multiple values.

// Initializing an array:
var cakes = ['chocolate', 'lemon', 'coffee', 'vanilla'];  // The cake variable contains an array with 4 elements.
var years = new Array(1873, 1965, 1934, 1843);

// The elements within an array start at index 0.
// eg:
console.log(cakes[0]);   // This will print 'chocolate' to the console.
console.log(cakes[2]);   // This will print 'coffee' to the console.
console.log(cakes);      // This will print all elements within the cake array.

console.log(cakes.length);  // This will print the number of elements within the cake array.


// Mutating array data:
cakes[2] = 'strawberry'; // This will change the element at index 2 from 'coffee' to 'strawberry'.
console.log(cakes[2]);

//cakes[5] = 'coffee';  // This adds an extra element to the array. However, index 4 will remain empty.
//console.log(cakes);
cakes[cakes.length] = 'fruit'; // This adds the new element after the last element within the array.

// Different data types:

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');  // Adds another element to the array.
john.unshift('Mr'); // Adds another element at the beginning of the array.
console.log(john);

john.pop();
john.pop();        // Removes the last element within the array.
john.shift();      // Removes the first element of an array.
console.log(john);

console.log(john.indexOf(1990));  // Prints the index of 1990.
console.log(john.indexOf(29));    // As 29 is not an element within the john array, the console will return -1.

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner); // Using the ternary operator, if an element equals -1, a message prints, if it doesn't equal -1, another message prints.

var isCarrot = cakes.indexOf('carrot') === -1 ? 'Carrot cake is not available' : 'Carrot cake is available';
console.log(isCarrot);

// Coding Challenge for arrays.

var tips = [];
var finalBill = [];

function calculateTipsAndFinalBill(billAmount) {
  var tipValue;
  if (billAmount < 50) {
    tipValue = (billAmount * 20) / 100;
  } else if (billAmount >= 50 || billAmount < 200) {
    tipValue = (billAmount * 15) / 100;
  } else {
    tipValue = (billAmount * 10) / 100;
  }

  tips.push(tipValue);
  finalBill.push(tipValue + billAmount);
}
calculateTipsAndFinalBill(363);
console.log(tips);
console.log(finalBill);
