`use strict`;

export function makeNfeXperiment() {
    let sayHi = function func(who) {
        if (who) {
            alert(`Hello, ${who}`);
        } else {
            func('Guest'); // Now all fine
        }
    };

    // ok, so I tried to nullify `welcome` by playing with const references;
    // I have achieve what I wanted;
    const welcome = sayHi;
    sayHi = null;

    welcome(); // Hello, Guest (nested call works)
}
