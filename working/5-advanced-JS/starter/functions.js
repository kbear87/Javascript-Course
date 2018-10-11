//Functions
//Passing functions as arguments

var years = [1987, 1965, 2008, 1921, 1997];

function arrayCalculator(array, functionToCall) {
  var arrayResults = [];
  for (var i = 0; i < array.length; i = i + 1) {
    arrayResults.push(functionToCall(array[i]));
  }
  return arrayResults;
}

function calculateAge(arrayElement) {   // function to calculate the ages from elements in a given array.
  return 2018 - arrayElement;
}

function isAnAdult(arrayElement) {
  return arrayElement >= 18;
}

function maxHeartRate(arrayElement) {
  if (arrayElement >= 18 && arrayElement <= 81) {
    return Math.round(206.9 - (0.67 * arrayElement));
  } else {
    return -1;
  }
}

// Calculate the ages first:
var ages = arrayCalculator(years, calculateAge);

// Determine if the elements are 18 or over:
var isFullAge = arrayCalculator(ages, isAnAdult);

// Calculate maximum heart rate:
var maximumHeartRate = arrayCalculator(ages, maxHeartRate);

console.log(ages);
console.log(isFullAge);
console.log(maximumHeartRate);


//Functions returning Functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log(name + ', what do you teach?');
    }
  } else {
    return function(name) {
      console.log(name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherJobQuestion = interviewQuestion('other');

teacherQuestion('John');
designerQuestion('Mark');
otherJobQuestion('Greg');
