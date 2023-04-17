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

export function makeNewCalculator() {
   function calculate() {
      this.read = function () {
         this.firstValue = +prompt('Please specify the first value', 0);
         this.secondValue = +prompt('Please specify the second value', 0);
      };

      this.sum = function () {
         return this.firstValue + this.secondValue;
      };

      this.mul = function () {
         return this.firstValue * this.secondValue;
      };
   }

   let calculator = new Calculator();
   calculator.read();

   alert('Sum = ' + calculator.sum());
   alert('Mul = ' + calculator.mul());
}
