'use strict';

export function resultOfOr() {
   alert(null || 2 || undefined); // alert 2;
}

export function resultOfOrAlert() {
   alert(alert(1) || 2 || alert(3)); // alert 1, alert 2;
}

export function resultOfAnd() {
   alert(1 && null && 2); // alert null;
}

export function resultOfAndAlert() {
   alert(alert(1) && alert(2)); // alert 1, alert undefined;
}

export function resultOfOrAndOR() {
   alert(null || (2 && 3) || 4); // 3;
}

export function checkRangeBetween() {
   let condition = 14 <= age && age <= 90;
}

export function checkRangeOutside() {
   let condition = 90 < age && age < 14;
}

export function questionIf() {
   // what executes?
   if (-1 || 0) alert('first'); // executes;
   if (-1 && 0) alert('second');
   if (null || (-1 && 1)) alert('third'); // also executes;
}

export function readTheNews() {
   // somewhere at this moment I have read the news.
   // I have made js programs that were a little more complicated.
   // I already know it all, so I have just copied.
   // sorry.

   let userName = prompt("Who's there?", '');

   if (userName === 'Admin') {
      let pass = prompt('Password?', '');

      if (pass === 'TheMaster') {
         alert('Welcome!');
      } else if (pass === '' || pass === null) {
         alert('Canceled');
      } else {
         alert('Wrong password');
      }
   } else if (userName === '' || userName === null) {
      alert('Canceled');
   } else {
      alert("I don't know you");
   }
}
