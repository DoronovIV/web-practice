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
