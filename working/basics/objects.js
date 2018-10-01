//Objects and properties

// Example of an object with properties:

var tubbs = {
  firstName: 'Tubbs',
  lastName: 'Twinkles',
  birthYear: 1983,
  favoriteFoods: ['cake', 'pasty', 'chips'],
  job: 'twinkler',
  isSweet: true,
  calcAge() {                          // Example of a method. (Function within an object).
    return 2018 - this.birthYear;      // 'this' keyword accesses particular data within the object.
  }
}

console.log(tubbs.calcAge());           //
console.log(tubbs['birthYear']);        // Ways to retreive data from an object.
var tubbyIsSweet = 'isSweet';           //
console.log(tubbs[tubbyIsSweet]);       //


// Adding a new property to an object using the 'this' keyword:

var currentMonth = 9;

var belle = {
   species: 'dog',
   color: 'brown',
   size: 'small',
   birthMonth: 1,
   calcAgeInMonths() {
    this.ageInMonths = (currentMonth - this.birthMonth) + ' months' ;
    return this.ageInMonths;
   }
}

console.log(belle.calcAgeInMonths());  // Call the method first in order to create the property within the object.
console.log(belle);
