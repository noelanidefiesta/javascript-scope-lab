// Write your solution in this file!

// Step 1: Declaring global variables
let burgers = ['Hamburger', 'Cheeseburger']; //global scope array
let featuredDrink = 'Strawberry Milkshake'; //global scope string

//Step 2: Function with function-scoped variable
function addBurger() {
    let newBurger = 'Flatburger';
    burgers.push(newBurger); //add newBurger to burgers array
}
//Step 3: Block scope with if statement
if (true) {
    let anothernewBurger = 'Maple Bacon Burger';
    burgers.push(anothernewBurger); //add to burgers array

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake'; //reassign global variable
    }
}

//Testing
console.log(burgers); //should include hamburger, cheeseburger, maple bacon burger and flatburger if addburger called)
console.log(featuredDrink); //should be strawberry milkshake initially 

//Call addBurger function to add Flatburger
addBurger()
console.log(burgers)

function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}
changeFeaturedDrink();
console.log(featuredDrink); 