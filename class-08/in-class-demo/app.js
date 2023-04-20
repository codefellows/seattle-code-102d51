'use strict'; // will help you to follow strict javascript rules

// console.log("I am in the HTML"); 
// alert("Welcome to my page!"); 
// const theirName = getName();
// greetUser();

function getName(){
  const usersName = prompt("What is your name?");
  // declaring a constant variable called usersName, assigning it the value of what the prompt returns (the user's input)
  return usersName;
}

// see line 16 of index.html for how I am invoking/calling/using the getName function


function greetUser(){
  document.write("Hi " + theirName + " welcome to my page!");
}

// see line 25 of index.html for how I am invoking/calling/using the greetUser function

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

// see line 32 of index.html for how I am invoking/calling/using the specialMessage function

// ------------------------------------------------------------

// FUNCTIONS!!!!!

// Declaring a function means making one - a command/rule

// FUNCTION DECLARATION
// parameters in the () - placeholder names for information the function will need to do its job
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log("Sum is: ", sum);
  return sum;
}

// invoking it, or calling it -- ACTUALLY using the function -- "Call it" by it's name
// ARGUMENTS in the () -- this is the ACTUAL information you want the function to use

// addTwoNumbers(2, 4);
// I'm invoking the addTwoNumbers function and giving it the arguments 2 and 4

// Invoke the function and store it's return (result) in a new variable

// let myNumber = addTwoNumbers(10, 10);
// I am invoking the addTwoNumbers function with the arguments 10 and 10 and storing the returned value in a variable called myNumber

// addTwoNumbers(42, 20);
// addTwoNumbers(1, 4);

// FUNCTION EXPRESSION <-- don't do this in 102

const myNewFunction = function(){
  alert("Hi from the new function");
}

// function expressions can only be invoked after defining them, otherwise you'll get errors
// myNewFunction();