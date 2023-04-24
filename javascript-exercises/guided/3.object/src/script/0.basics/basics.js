`use strict`;

export function helloObject() {
   /*
    Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
    */

   let user = {};
   user.name = `John`;
   user.surname = `Smith`;
   user.name = `Pete`;
   delete user.name;
}

export function checkEmptiness() {
   let schedule = {};

   alert(isEmpty(schedule)); // true

   schedule['8:30'] = 'get up';

   alert(isEmpty(schedule)); // false
}

function isEmpty(obj) {
   return Object.keys(obj).length === 0;
}

export function sumObjectProperties() {
   let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130,
   };

   let totalSum = 0;

   for (let property in salaries) {
      totalSum += salaries[property];
   }
}

export function multiplyPropertyByTwo() {
   let menu = {
      width: 200,
      height: 300,
      title: 'My menu',
   };

   for (let property in menu) {
      if (typeof obj[property] == 'number') {
         menu[property] *= 2;
      }
   }
}
