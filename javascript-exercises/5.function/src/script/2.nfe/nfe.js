`use strict`;

export function makeCounter() {
    // just wanted to make it chainable. looks awful though;
    // p.s.: I did not know that the second task will be featuring just that;
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => {
        count = value;
        return counter;
    };

    counter.decrease = () => {
        count -= 1;
        return counter;
    };

    counter.toString = function () {
        return count;
    };

    return counter;
}

export function sum(firstValue) {
    let currentValue = firstValue;

    function addNext(nextValue) {
        currentValue += nextValue;
        return addNext;
    }

    addNext.toString = function () {
        return currentValue;
    };

    return addNext;
}
