'use strict';

export function lastLoopValue() {
   // determine the last value of the loop;
   let i = 3;

   while (i) {
      alert(i--);
   }

   // 1;
}

export function showLoopValues() {
   // first set;
   let i = 0;
   while (++i < 5) alert(i);
   // 1 to 4;

   // second one;
   i = 0;
   while (i++ < 5) alert(i);
   // 1 to 5;
}
