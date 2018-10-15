// Closures

// An inner function always has access to the variables and parameters of it's outer function.
// This is true even when the outer function has returned.

function retirement(retirementAge) {
  var a = ' years left until retirement.'
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var ukRetirementAge = retirement(66);
var chinaRetirementAge = retirement(60);
var franceRetirementAge = retirement(62);


//ukRetirementAge(1983);
//chinaRetirementAge(1975);
//franceRetirementAge(1961);
//or:
//retirement(66)(1983);


//Challenge

function interviewQuestion(job) {
             // With closures you only need the one internal function for this example.
  return function(name) {
    if (job === 'designer') {

      console.log(name + ' what is UX design?');
    } else if (job === 'teacher') {
      console.log(name + ' what do you teach?');
    } else {
      console.log(name + ' what do you do?')
    }
  }
}
//interviewQuestion('teacher')('John');

function init() {
  var name = 'Tubbs';
  function displayName() {
    alert (name);
  }
  return displayName;
}
var myFunction = init();
myFunction();
