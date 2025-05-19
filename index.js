// Write your solution in this file!

// Step 1: Declaring global variables
const burgers = ['Hamburger', 'Cheeseburger']; //global scope array
let featuredDrink = 'Strawberry Milkshake';   //global scope string

// Step 2: Function with function-scoped variable
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger); //add newBurger to burgers array
}

// Step 3: Block scope with if statement
if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger); //add to burgers array

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake'; //reassign global variable
    }
}

// Testing
console.log(burgers);       //hamburger, cheeseburger, and maple bacon burger
console.log(featuredDrink); //strawberry milkshake initially

// Call addBurger function to add Flatburger
addBurger();
console.log(burgers);       //now include flatburger as well

// Call changeFeaturedDrink function to update featuredDrink
changeFeaturedDrink();
console.log(featuredDrink); //now be The JavaShake