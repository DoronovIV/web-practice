`use strict`;

export function calculateSum(n) {
    return formulaSumTo(n); // the fastest one, obviously;
}

function loopSumTo(n) {
    let sum = 0;
    for (let i = 1, iSize = n; i <= iSize; ++i) {
        sum += i;
    }
    return sum;
}

function recursiveSumTo(n) {
    if (n == 1) return 1;
    return n + recursiveSumTo(n - 1);
}

function formulaSumTo(n) {
    return (n * (n + 1)) / 2;
}

export function factorial(n) {
    return n >= 1 ? n * factorial(n - 1) : 1;
}

export function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function makePrintList() {
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                },
            },
        },
    };

    printReverseList(list);
}

function printList(list) {
    alert(list.value);

    if (list.next) {
        printList(list.next);
    }
}

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}
