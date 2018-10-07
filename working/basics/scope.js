// Scope


// Scope chain moves upwards.

var a = 'Hello';        // Within in the global scope you have complete access to the variable 'a'
first();                // and the function first()

function first() {      // The function first() creates a new local scope.
  var b = 'Hi';         // This variable 'b' can only be accessed within this function
  second();

  function second() {        // The function second() is within the function first()
    var c = 'Hey';           // but still has access to the scope of this function.  Lexical Scoping
    console.log(a + b + c);  // No b variable within the scope of second function so javascript engine moves up
  }                          // to the parent function and uses the b variable from there. Likewise with the
}                            // variable 'a', the js engine moves out of the first function into the global scope and uses the variable a from there.
