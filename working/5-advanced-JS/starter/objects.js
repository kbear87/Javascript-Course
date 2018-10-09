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
