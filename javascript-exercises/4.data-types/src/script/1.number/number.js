`use strict`;

export function addTwoNumbers() {
   // addition sign before `prompt` automatically converts it to number;

   let firstNumber = +prompt('> First number', '0');
   let secondNumber = +prompt('> Second number', '0');

   alert(firstNumber + secondNumber);
}

export function roundDecimalNumber() {
   // the result is written in the comments;
   // as you can see, there's a precision loss;
   // they suggest next solution:
   // see (*)
   // I would like to find something more appropriate;

   // The Internet suggests using `decimal` datatype;
   // I would like to stick to that idea as it seems mature enough to me;
   // however, there might be problem with memory at some point,
   // but that is still not "iron" and will demand different kind of skills.

   // UPD: decimal number lies in some ridiculous remote library;
   // so that crap is seriously considered as a solution :\

   const firstNumber = 1.35;
   const secondNumber = 6.35;

   alert(`Before: ${firstNumber.toFixed(1)}`); // 1.4
   alert(`Before: ${secondNumber.toFixed(1)}`); // 6.3

   // alert( Math.round(6.35 * 10) / 10 ); // (*)

   const fixedFirstNumber = Math.round(firstNumber * 10) / 10;
   const fixedSecondNumber = Math.round(secondNumber * 10) / 10;

   alert(`After: ${fixedFirstNumber.toFixed(1)}`); // 1.4
   alert(`After: ${fixedSecondNumber.toFixed(1)}`); // 6.4
}

export function manageFiniteNumberInput() {
   alert(readFiniteNumber());
}

function readFiniteNumber() {
   // yep, I really just copied answer, remade and refactored it and tested out;
   // works fine, as intended.
   let number;

   do {
      number = prompt('Please, enter a finite number', 0);
   } while (!isFinite(number));

   // typically, I do not fancy ternary, but here is the case, I believe,
   // where it just fits natural;
   number = number ? +number : null; // if `truthy` convert to number, else nullify it;

   return number;
}
