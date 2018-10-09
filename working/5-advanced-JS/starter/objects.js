// Object.create method


//First create an object that will act as the prototype.
var personProto = {
  calculateAge() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto, {
  name: { value: 'John'},
  yearOfBirth: { value: 1990},
  job: {value: 'teacher'}
});



//Primitives vs Objects

//Objects
var kitty1 = {
  name: 'Fluffy',
  age: 4
}

var kitty2 = kitty1;    // variable kitty2 points to the kitty1 object.  It is not an object in itself.
kitty1.age = 5;
console.log(kitty2.age);
console.log(kitty1.age);

//functions
