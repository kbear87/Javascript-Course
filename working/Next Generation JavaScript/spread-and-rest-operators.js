// Spread and Rest Operators
// The operator is: ...  three dots. It is spread or rest depending on what it is used for.


// Spread - It is used to split up array elements or object properties for example:

const basicShoppingItems = ['milk', 'eggs', 'bread'];
const thisWeeksShoppingList = [...basicShoppingItems, 'carrots', 'jam']; // Here the basicShoppingItems array elements have been added to the thisWeeksShoppingList array using the spread operator.

const person = {
  name: 'Tubbs'
};

const newPerson = {
  ...person,
  age: 34;
};

//Rest - Used in a function argument list. It merges a list of function arguments into an array.

const totalEuros = (...euros) => {   // Just one argument is put after the rest operator in the function parathesese.
  return euros.reduce((total, currentAmount) => total + currentAmount);
}
console.log(totalEuros(12,45,78,63)); // When calling the function we can put as many arguments as we like in the parenthesese
                                      // These are then placed into an array and the function return acts like a for loop.
