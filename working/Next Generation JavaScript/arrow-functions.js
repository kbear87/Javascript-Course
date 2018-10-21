// Arrow functions
// Arrow functions solve a lot of issues with the 'this' keyword.


const printCakeFlavor = flavor => {  // The function is stored in a constant variable.
  console.log(flavor);                 // The function keyword is omitted and replaced with an equals sign and greater than sign after the argument parenthesis.
}                                      // If you only have one argument to be passed to the function you can omit the parenthesese.
                                       // Parenthesese are needed if there are no arguments to be passed.
printCakeFlavor('chocolate')

const multiply = number =>  number * 2;  // If you only have a return statement in the function body, you can omit the curly braces and the return keyword.
console.log(multiply(12));
