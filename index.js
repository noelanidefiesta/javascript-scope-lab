// Step 1: Declaring global variables
const burgers = ['Hamburger', 'Cheeseburger']; // global scope array
let featuredDrink = 'Strawberry Milkshake'; // global scope string

// Step 2: Function with function-scoped variable
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger); // add newBurger to burgers array
}

// Step 3: Block scope with if statement
if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger); // add to burgers array

    // Declare changeFeaturedDrink function with function declaration (hoisted)
    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake'; // reassign global variable
    }

    // Make changeFeaturedDrink accessible outside the if block by assigning to global
    // (Optional, but depending on test environment scope this might help)
    globalThis.changeFeaturedDrink = changeFeaturedDrink;
}

// Testing logs (can be removed for final submission)
console.log(burgers);        // ['Hamburger', 'Cheeseburger', 'Maple Bacon Burger']
console.log(featuredDrink);  // 'Strawberry Milkshake'

// Call addBurger function to add Flatburger
addBurger();
console.log(burgers);        // ['Hamburger', 'Cheeseburger', 'Maple Bacon Burger', 'Flatburger']

// Call changeFeaturedDrink function to update featuredDrink
changeFeaturedDrink();
console.log(featuredDrink);  // 'The JavaShake'