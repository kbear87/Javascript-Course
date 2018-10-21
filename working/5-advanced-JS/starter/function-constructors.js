
var Cat = function(name, breed, color, yearOfBirth) {  // This is the object function constructor.
                                                       // Constructors are essentially a blueprint for creating many objects of the same "type".
  this.name = name;                                    // Name the constructor with a capital letter.
  this.breed = breed;                                  // this is a substitute for the new object. When a new object  is created, this will become that object.
  this.color = color;
  this.yearOfBirth = yearOfBirth;
}

Cat.prototype.numberOfPaws = function() {   // These are the methods for the function constructor above.
  console.log(this.name + ' has 4 paws');
}

Cat.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
}

var sweetness = new Cat('Sweetness', 'Forest', 'Black', 2011);    // These are instances of the cat object constructor function.
var chuckles = new Cat('Chuckles', 'Maine Coon', 'Brown', 2013);
var claws = new Cat('Claws', 'Chartreux', 'Grey', 2007);

claws.calculateAge();
chuckles.calculateAge();
sweetness.calculateAge();

claws.numberOfPaws();
console.log(claws instanceof Cat);  // Use instanceof to check an instance belongs to a particular constructor.

console.log('***************************************');

// Making the properties in a constructor private:
// Use setters and getters.

let Cake = function(_flavor) {
  this.setFlavor = function(flavor) {
    _flavor = flavor;
  };
  this.getFlavor = function() {
    return _flavor;
  }
}
let chocolateCake = new Cake('chocolate');
console.log(chocolateCake.getFlavor());
