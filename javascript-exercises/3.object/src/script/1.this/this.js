`use strict`;

export function makeCalculator() {
   let calculator = {
      sum() {
         return this.firstValue + this.secondValue;
      },

      multiply() {
         return this.firstValue * this.secondValue;
      },

      read() {
         this.firstValue = Number(prompt('Please specify the firstValue', 0));
         this.secondValue = Number(prompt('Please specify the secondValue', 0));
      },
   };

   calculator.read();
   alert(calculator.sum());
   alert(calculator.mul());
}

export function makeChaining() {
   let ladder = {
      step: 0,
      up() {
         this.step++;
         return this;
      },
      down() {
         this.step--;
         return this;
      },
      showStep() {
         alert(this.step);
         return this;
      },
   };
}
