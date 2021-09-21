'use strict';
// Global this keyword
// console.log(this);

// this keyword inside normal function
// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// }
// calcAge(1991);

// this keyword inside arrow function
// const calcAge = (birthYear) => {
//   console.log(2021 - birthYear);
//   console.log(this);
// }
// calcAge(1991);

// this keyword inside function
const pujan = {
  year: 1994,

  calcAge: function() {
    // console.log(this);
    // console.log(2021 - this.year)
    console.log(this);
  }
}
// pujan.calcAge();
// https://replit.com/@gorakhjoshi/1-Object-Methods#script.js

// this keyword inside friends object doesn't always point to friends object
// const sarala = {
//   year: 1992,
  
// };

// sarala.calcAge = pujan.calcAge;
// console.log(sarala);
// this is called method borrowing.
// sarala.calcAge();

// taking calcage function out of pujan object
const age = pujan.calcAge;
age();

// console.log(this);