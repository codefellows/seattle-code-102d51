'use strict'; // will help you to follow strict javascript rules

// NOTES FROM REPLIT DEMO:

// Variables are containers for data
// Keywords for declaring a variable (creating one)
// let <-- changeable variable
// const <-- unchangeable variable
// var <-- don't do this in 102
// (none) <-- don't do this in 102

let x = 1; // create a variable called x, assign it the value of the number 1
const y = 2; // create a variable called y, assign it the value of the number 2

// -----------------------------------------------------------------

const myName = 'Kassie'; // declare an unchangeable variable assigned the value of the string 'Kassie'
let myAge = 34; // declare a changeable variable assigned the value of the number 34

console.log(myAge); // print the value of myAge to the developer console

myAge = 35; // re-assign the value of this variable to now be 35

console.log(myAge); // print the value of myAge to the console again.

// If we tried to re-assign a CONSTANT variable to a new value (down below), we will get an error in the developer console. The JavaScript will stop running at an error.

// myName = 'Kassandra'; // this is where it will stop, can't do this
// console.log(myName);

// -----------------------------------------------------------------

// Data types

// Strings --> 'words in quotes' OR '34' --> this is seen as text

// Numbers --> 2678, 42, 1 --> these are pure numbers (no quotes)

// Boolean -->  True OR False

// -----------------------------------------------------------------

// Basic Intro JavaScript Commands
// alert(); --> pop up box with a message, message is in parenthesis
// console.log(); --> logs whatever is in the parenthesis to the developer console
// prompt(); --> a way to get input from the user, whatever we want to ask them goes in the parenthesis
// document.write(); --> whatever is in the parenthesis will be written to the HTML document

// console.log("Hello world!");
// console.log(myName);

// -----------------------------------------------------------------

// FROM THE IN-CLASS VSCODE DEMO:

console.log("I am in the HTML"); // proof of life to see if our external Javascript is connected to our HTML (line 15 of index.html)
alert("Welcome to my page!"); 

// Ask the user a question with prompt
// Store the user's input (what we get back from prompt) in a variable so that we can refer to it later on.
const usersName = prompt("What is your name?");
console.log(usersName);


// string concatenation - chaining data types together
document.write("Hi " + usersName + " welcome to my page!");

// -----------------------------------------------------------------

// CONDITIONAL LOGIC

// BASIC STRUCTURE
// if (this is true) {execute this code} else if (this is true){execute this code} else {for literally anything else not previously specified, do this}

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
