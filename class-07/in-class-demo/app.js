'use strict'; // will help you to follow strict javascript rules

console.log("I am in the HTML"); 
alert("Welcome to my page!"); 

const usersName = prompt("What is your name?");
console.log(usersName); 

document.write("Hi " + usersName + " welcome to my page!");


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
