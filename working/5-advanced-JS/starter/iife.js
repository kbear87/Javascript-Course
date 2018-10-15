// Immediately invoked Function Expressions

// -  a function that is immediately invoked once it is created.
// -  ! forces the the function to be treated as an expression instead of a declaration. Parentheses are also used when a return value is required.
// -  All variables within an iife are private to that particular iife. They cannot be accessed from the global scope.
// -  As iife are private, they do not pollute the global name space, with named functions hanging around that could accidentally be invoked.


(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
}());

(function() {
  alert('Hello World!')
}());
