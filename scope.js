// Where can we access certain variable and where not? 
// Global scope
// Function Scope (Also block scope in restricted mode)
// Block Scope (Only for let and const)
 
 'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

 

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // 322
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var valueInside = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Ritu'; //311
      console.log(firstName);
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!'; //322

      console.log(output);

      const str = `Oh, and you're an insider, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(firstName);
    // console.log(add(2,5));
    // console.log(str);
    // console.log(valueInside);
    // console.log(add(2, 3));
    // console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Achiever'; // 301

calcAge(1991);
// console.log(age);
// printAge();