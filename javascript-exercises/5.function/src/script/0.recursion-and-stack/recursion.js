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
    return n !== 1 ? n * factorial(n - 1) : 1;
}
