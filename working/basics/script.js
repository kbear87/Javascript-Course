

/*function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years.')
  } else {
      console.log(firstName + ' is already retired.');
    }
}
yearsUntilRetirement(1985, 'John');
yearsUntilRetirement(1935, 'Mike');

// Function expressions and Function statements

// Function expressions
var whatDoYouDo = function(job, firstName){
  switch (job) {
    case 'butcher':
      return firstName + ' chops up meat for burgers';
    case 'baker':
      return firstName + ' makes yum yums.';
    default :
      return firstName + ' is a bum.';
  }
}

console.log(whatDoYouDo('baker', 'Tubbs'));

// Function declaration
// function whatDoYouDo(job, firstName) {
console.log('cookie');

/*var tips = [];
var finalBill = [];

function tipCalculator(bill) {
  var calculatedTip;
  if (bill < 50) {
  calculatedTip = (bill * 20) / 100;
  } else if (bill >= 50 && bill < 200) {
  calculatedTip = (bill * 15) / 100;
  } else if (bill >= 200) {
  calculatedTip = (bill * 10) / 100;
  }

  tips.push(calculatedTip);
  finalBill.push(calculatedTip + bill);
}
tipCalculator(124);
tipCalculator(48);
tipCalculator(268);
console.log(tips);
console.log(finalBill);*/




//Objects and Properties

var tubbs = {                                               //
  firstName: 'Tubbs',                                       //
  lastName: 'Twinkles',                                     // An Object with properties.
  birthYear: 1983,                                          //
  favoriteFoods: ['cake', 'pizza', 'sausage', 'burger'],    //
  job: 'twinkler',                                          //
  isSweet: true,
  calcAge() {
    return 2018 - this.birthYear;
  }                                           //
}
console.log(tubbs.calcAge());

console.log(tubbs.lastName);       //
console.log(tubbs['birthYear']);   // how to retrieve data from an object
var sweet = 'isSweet';             //
console.log(tubbs[sweet]);         //

var tubbs = {                                               //
  firstName: 'Tubbs',                                       //
  lastName: 'Twinkles',                                     // An Object with properties.
  birthYear: 1983,                                          //
  favoriteFoods: ['cake', 'pizza', 'sausage', 'burger'],    //
  job: 'twinkler',                                          //
  isSweet: true,
  calcAge() {
    this.age = 2018 - this.birthYear;
    return this.age;
  }                                           //
}

console.log(tubbs.calcAge());



//loops / continue / break

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i = i + 1) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i = i + 1) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

for (var i = john.length - 1;  i >= 0; i = i - 1) {
  console.log(john[i]);
}


var johnBill = {
  billValues: [124, 48, 268, 180],
  calcTip() {

    this.tips = [];
    this.finalBill = [];

    for (var i = 0; i < this.billValues.length; i = i + 1) {
      var tipValue;
      var bill = this.billValues[i];

      if (bill < 50) {
        tipValue = (bill * 20) / 100;
      } else if (bill >= 50 && bill < 200) {
        tipValue = (bill * 15) / 100;
      } else {
        tipValue = (bill * 10) / 100;
      }
      this.tips[i] = tipValue;
      this.finalBill[i] =(tipValue + bill);
    }
 }
}

johnBill.calcTip();
console.log(johnBill);
