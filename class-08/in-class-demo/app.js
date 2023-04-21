'use strict'; // will help you to follow strict javascript rules

// NOTES FOR CLASS 08 Loops & Logic:

// While-Loop Structure: while(this is true){execute this code;}

// let x = 5;

// 0 < 5 ? T | Execute code x = 1
// 1 < 5 ? T | Execute code x = 2
// 2 < 5 ? T | Execute code x = 3
// 3 < 5 ? T
// 4 < 5 ? T
// 5 <= 5 ? T | 
// 6 <= 5 ? F | BREAK THE LOOP

// For-Loop Structure: 
// for (initial value; condition to evaluate; increment/decrement){
//    execute this code; 
// }

// See for loop in action 


// ----------------------------------------------------------------

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
  while (usersName == ""){
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

function rateMyPage(){
  let rating = prompt("How many starts would you rate my page? 1-5");

  console.log(rating)

  for (let i = 0; i < rating; i++){
    document.write("<img class='loop-img' src='pupper.jpg' alt='cute lil pupper wearing glasses' />");
  }
}

// See this for loop invoked/called in index.html, line 72