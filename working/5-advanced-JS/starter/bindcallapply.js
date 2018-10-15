// Bind, Call and Apply methods


// the call method allows you to set the this variable.
// the apply method is similar to the call method however if accepts the arguments as an array.
// the bind method allows you to set the this variable but it also makes a copy of the function instead of immediately calling the function so it can be stored somewhere.


// Created object:
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + '. My name is ' + this.name);
    } else if (style === 'friendly') {
      console.log('Hi, my name is ' + this.name + ' have a great ' + timeOfDay + '!');
    }
  }
}

john.presentation('formal', 'morning');

var emily = {
  name: 'Emily',
  age: 35,
}

john.presentation.call(emily, 'friendly', 'afternoon'); //Adding the call method has changed the presentation function to apply to the emily object.

// binding

var johnFriendly = john.presentation.bind(john,'friendly');  // Allows to preset some arguments. All we would have to add is the time of day.
johnFriendly('morning');


var years = [1990, 1965, 1937, 2005, 2011];

function arrayCalculator(array, chosenFunction) {
  var arrayResult = [];
  for(var i = 0; i < array.length; i = i + 1) {
    arrayResult.push(chosenFunction(array[i]));
  }
  return arrayResult;
}

function calculateAge(element){
  return 2018 - element;
}

function isFullAge(limit, element) {
  return element >= limit;
}

var ages = arrayCalculator(years, calculateAge);
console.log(ages);

var fullAgeJapan = arrayCalculator(ages,isFullAge.bind(this, 20)); //preset the limit argument in the isFullAge function.
console.log(fullAgeJapan);
