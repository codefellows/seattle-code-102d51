'use strict';

// I want to make a function that will build a cupcake with a specified color for frosting, flavor

// This function has no parameters, it requires no extra information to do it's job
// function makeCupcake(){
//   console.log("You want a cupcake!");
//   let color = prompt("What color frosting do you want?");
//   let cupcake = prompt("What flavor cupcake do you want?");
//   console.log("You would like a " + cupcake + " cupcake with " + color + " frosting");
// }

// makeCupcake();

// This function will expect a color and a flavor as parameters (extra information) to do it's job
function makeCupcake(color, flavor){
  console.log("You want a cupcake!");
  console.log("You would like a " + flavor + " cupcake with " + color + " frosting");
}

// So when I invoke this, I need to pass it 2 arguments - representing a color, and a flavor
makeCupcake("white", "chocolate");

// ------------------------------


// Structure of Conditional Logic:
// if (this is true){execute this code} else if (this is true instead){do this} else {do this for literally anything else not previously specified}

// if (this is true){
//   execute this code;
// } else if (this is true instead){
//   do this;
// } else {
//   do this for literally anything else not previously specified
// }

// let x = 10;

// if (x > 10){                                 // Check FIRST if x is greater then 10
//   console.log("The value is greater than 10");
// } else if (x < 10) {                         // If previous is not true, THEN check if x is less than 10
//   console.log("The value is less than 10");
// } else if (x == 10) {                        // If neither of the previous are true, THEN check if x is equivalent to 10
//   console.log("The value IS equivalent to 10");
// } else {                                     // If none of the previous conditions are true, do this  
//   console.log("Why are we here?!?!?!");
// }

// For the following if-statements, the computer will check the first one, and regardless of the outcome, it will also check the next if-statement.

// if (x > 10){
//   console.log("The value is greater than 10");
// }

// if (x < 10){
//   console.log("The value is less than 10");
// }


// while(this evaluates to true){execute this code}

// let theSwitch = true; // this is the variable we are going to use to control our while-loop

// while(theSwitch){
//   console.log("uh oh");
//   theSwitch = false;
// }

// let x = 0;

// while (x < 10){
//   console.log(x);
//   x++;
// }

// for (let i = 0; i <= 100; i++){
//   console.log(i);
// }

// for (let i = 0; i < 8; i++) {
//   console.log(i);
// }
// 8 iterations

// for (let i = 0; i <= 8; i=i+2) {
//   console.log(i);
// }
// 5 iterations

// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }
// 7 iterations

// for (let i = 0; i <= 8; i++) {
//   console.log(i);
// } // 9 iterations

// let x = 0;
// while (x > -1){
//   console.log(x);
//   x++;
// }