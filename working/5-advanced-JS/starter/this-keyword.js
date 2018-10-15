// The this keyword,

//First and most common rule to tell what the this keyword is referencing : Implicit Binding.

// Here we have an object called 'user'.
const user = {
  name: 'Tubbs',
  age: 35,
  greet() {
    alert('My name is ' + this.name);
  },
  food: {
    favorite: 'pizza',
    worst: 'soup',
    favoriteFood() {
      alert('My favorite food is ' + this.favorite);
    },
    favoriteFoodElements: {
      meat: 'chicken',
      dairy: 'cheese',
      veg: 'tomato',
      foodElements() {
        alert('My favorite thing about ' + user.food.favorite + ' is ' + this.meat);
      }

    }
  }
}

//In order to invoke the greet method on the the object we would write:
user.greet();  //Look to the left of the dot in order to see what the this keyword will be referencing.
               //In this case, 'this.name' in the greet method is effectively changed to 'user.name' or 'Tubbs'.

user.food.favoriteFood();  //Here the this keyword is referencing the food property.
user.food.favoriteFoodElements.foodElements(); //Once again the this keyword is referencing the favoriteFoodElements property.
