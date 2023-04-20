'use strict'; // will help you to follow strict javascript rules

console.log("I am in the HTML"); 
alert("Welcome to my page!"); 
// const theirName = getName();
// greetUser();

function getName(){
  const usersName = prompt("What is your name?");
  // declaring a constant variable called usersName, assigning it the value of what the prompt returns (the user's input)
  return usersName;
}


// console.log(usersName); // printing to the console whatever the user input for line 6
// console.log(theirName);


function greetUser(){
  document.write("Hi " + theirName + " welcome to my page!");
}


function specialMessage(usersName){
  if (usersName == ""){
    usersName = prompt("Come on, please tell me your name!");
  }

  if (usersName == "Kassie"){
    document.write("Hiya teach!");
  } else if (usersName == "Joey"){
    document.write("TAs are DA BOMB!!!!");
  } else if (usersName == "Ben"){
    document.write("TAs are DA BOMB!!!!");
  } else if (usersName == "Brandon"){
    document.write("TAs are DA BOMB!!!!");
  } else {
    document.write("Glad to have you here!");
  }

}

// ------------------------------------------------------------

// FUNCTIONS!!!!!

// Declaring a function means making a command/rule


// FUNCTION DECLARATION
// parameters in () - placeholder names for information the function will need to do its job
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log("Sum is: ", sum);
  return sum;
}

// invoking it, or calling it -- ACTUALLY using the function

// let myNumber = addTwoNumbers();
// console.log('line 42 is: ', myNumber);
// addTwoNumbers();
// addTwoNumbers();

// ARGUMENTS in the () -- this is the ACTUAL information you want the function to use
addTwoNumbers(42, 20);
addTwoNumbers(1, 4);

// FUNCTION EXPRESSION

const myNewFunction = function(){
  alert("Hi from the new function");
}

myNewFunction();