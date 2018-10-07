// 'This' variable

// Regular function call: The 'this' keyword points at the global object (the window object).
// Method call: The 'this' variable points to the object that is calling the method.

calculateAge(1745);

function calculateAge(year)  {
  console.log(2018 - year);
  console.log(this);              // window object will be displayed in console as this is a regular function.
}
