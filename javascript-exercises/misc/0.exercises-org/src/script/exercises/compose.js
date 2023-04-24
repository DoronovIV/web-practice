`use strict`;

// found on: https://www.educative.io/answers/function-composition-in-javascript;
export function compose(...funcs) {
    return function (x) {
        return funcs.reduceRight((y, f) => f(y), x);
    };
}

export function double(number) {
    return number * 2;
}

export function negate(number) {
    return 0 - number;
}
