// Functions

// A function inside of an object is called a method.

/*function functionName(parameters) {
  statement
}
functionName(argument);
*/

function calculateAge(birthYear) {      // A simple function that calculates age.
  return 2018 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  var age = calculateAge(birthYear);  // Create variable to store the age.
  var retirement = 65 - age;          // Create variable to store the number of years until retirement.

  if (retirement > 0) {                                                      // If else statement to
    console.log(firstName + ' will retire in ' + retirement + ' years.');    // see if the number of
  } else {                                                                   // years in the retirement
    console.log(firstName + ' is already retired.');                         // variable is greater than zero.
  }
}

yearsUntilRetirement(1983, 'Tubbs'); // Calling the years until retirement function.
yearsUntilRetirement(1987, 'Kbear');


// Function Expressions - A function stored within a variable. No function name required.
console.log(tubby('choclit', 'lemon'));  // This will not work.  Function expressions have to be expressed
var tubby = function(cake1, cake2) {     // before being called.
  return cake1 + ', ' + cake2;
}

// Function Declaration - A function not attached to a variable that can be called anytime within the javascript code.
console.log(subtract(7, 4));     // This will work as the function 'subtract' becomes known before any code is run.
function subtract(num1, num2) {
  return num1 - num2;
}
