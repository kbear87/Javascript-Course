// Let - use for variable that could possible have a different value in the future.
// Const - use for a value that will not be reassigned. Const is used most.


let cake = 'chocolate';    // A new let variable has been assigned the value of 'chocolate'.
console.log(cake);         // 'chocolate' will be logged to the console.
cake = 'lemon'; // This same variable has now be reassigned a new value of 'lemon'.
console.log(cake);  // 'chocolate' has now changed to 'lemon' when logged to the console.


const food = 'cheese'; // 'cheese' has been assigned to the const variable: food.
console.log(food);
food = 'bread'; // reassigning the food varible to 'bread' will throw an error in the console as const variables cannot be reassigned a new value.
