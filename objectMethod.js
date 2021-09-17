'use strict'

const ayush = {
  firstName : 'Ayush',
  lastName : 'Maharjan',
  birthYear : 1993,
  job : 'Student',
  friends : ['Sajal', 'Manish', 'Kamal'],
  hasDriverLicense : true,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // }

  // we can't use
  // function calcAge(birthYear) {
  //   return 2021 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   // Why not console.log(ayush);
  //   // DRY principle
  //   return 2021 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.age} years old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's License`;
  }

};

console.log(ayush.getSummary())
