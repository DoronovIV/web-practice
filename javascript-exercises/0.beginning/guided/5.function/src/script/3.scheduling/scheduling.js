`use strict`;

export function printNumbers(minValue, maxValue) {
    let currentValue = minValue;
    let timerInterval;

    let timer = function () {
        alert(currentValue);

        if (currentValue >= maxValue) {
            clearInterval(timerInterval);
        }

        currentValue += 1;
    };

    timerInterval = setInterval(timer, 2000);
}

export function makeSetTimeoutAlert() {
    let i = 0;

    setTimeout(() => alert(i), 100); // ?

    // assume that the time to execute this function is >100ms
    for (let j = 0; j < 100000000; j++) {
        i++;
    }
    // yeah, as the author have said: the setTimeout will run after the code executes;
    // the alert outputs 100000000 as expected;
}
