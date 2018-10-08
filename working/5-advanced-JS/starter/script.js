var Cat = function(name, breed, color, yearOfBirth) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.yearOfBirth = yearOfBirth;
}

Cat.prototype.numberOfPaws = function() {
  console.log(this.name + ' has 4 paws');
}

Cat.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
}

var sweetness = new Cat('Sweetness', 'Forest', 'Black', 2011);
var chuckles = new Cat('Chuckles', 'Maine Coon', 'Brown', 2013);
var claws = new Cat('Claws', 'Chartreux', 'Grey', 2007);

claws.calculateAge();
chuckles.calculateAge();
sweetness.calculateAge();

claws.numberOfPaws();
