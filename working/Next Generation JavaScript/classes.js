// Classes
// Classes are blueprints for objects.

/*class Person {         // Use the class keyword to create a class.
  name = 'Tubbs'       // Classes contain properties which are variables.
  call = () => {...}   // Classes can also contain methods which also known as functions.
}*/


/*const myPerson = new Person();   // To create a new instance of a class, use the new keyword.
myPerson.call(); // To call the method within the myPerson object.
console.log(myPerson.name);*/ // To print the name in the console from the myPerson object.


//Classes also support inheritance, so one class can extend from another class.


class Cake {
  constructor() {
    this.flour = 'Self-raising flour';
    this.sugar = 'Golden caster sugar';
    this.butter = 'Unsalted butter';
    this.eggs = 'Eggs';
  }
  printIngredientAmounts() {
    console.log(this.flour + ': 500g, ' + this.sugar + ': 250g, ' + this.butter + ': 250g, ' + this.eggs + ': 6' );
  }
}

class FruitCake extends Cake {
  constructor() {
    super();
    this.fruit = 'Luxury mixed fruit';
  }
  printFruitAmount() {
    console.log(this.fruit + ': 500g');
  }
}

const fruitCake = new FruitCake();
fruitCake.printIngredientAmounts();
fruitCake.printFruitAmount();
console.log(fruitCake.butter);

// Properties and Methods
// In next generation JavaScript, properties and methods can be written differently in classes than above.

class Cakes {
  flour = 'Self raising flour';
  sugar = 'Golden caster sugar';
  butter = 'Unsalted butter';
  eggs = 'Eggs';

  printIngredients = () => {
    console.log(this.flour + ': 500g');
  }
}

class Chocolate extends Cakes {
  chocolate = 'Cocoa powder';

  printIngredient = () => {
    console.log(this.chocolate + ': 3tbsp');
  }
}

const chocolateCake = new Chocolate();
chocolateCake.printIngredients();
chocolateCake.printIngredient();
