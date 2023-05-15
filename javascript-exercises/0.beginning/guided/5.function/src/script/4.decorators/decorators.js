`use strict`;

export function makeEspionage() {
    work = spy(work);

    work(1, 2); // 3
    work(4, 5); // 9

    for (let args of work.calls) {
        alert('call:' + args.join()); // "call:1,2", "call:4,5"
    }
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

function work(a, b) {
    alert(a + b); // work is an arbitrary function or method
}

export function makeDelay() {
    let f3000 = delay(alert, 3000);
    f3000('test');
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

export function makeDebounce() {
    let func = debounce(alert, 1000);

    func('a');

    setTimeout(() => func('b'), 200);
    setTimeout(() => func('c'), 500);
}

function debounce(func, ms) {
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            return func.apply(this, arguments);
        }, ms);
    };
}

export function makeThrottling() {
    function func(arg) {
        console.log(arg);
    }

    let f1000 = throttle(func, 1000);

    f1000(1);
    f1000(2);
    f1000(3);
}

function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs, savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;

        func.apply(this, arguments);

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
