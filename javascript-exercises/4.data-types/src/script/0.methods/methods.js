export function showMethodsDemo() {
    `use strict`;

    let str = 'Hello';

    str.test = 5;

    alert(str.test);
    // this stuff will create a wrapper object for the `str` primitive;
    // since the object is not assigned anywhere, it disappears completely;
    // the result will be `undefined`;
    //
    // the scenario up above is true for the `default` mode;
    // however, since we are using strict, the code will produce an error.
}
