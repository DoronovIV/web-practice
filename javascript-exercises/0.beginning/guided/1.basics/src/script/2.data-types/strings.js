export function showAlertOutput() {
    'use strict';

    // we have used string interpolation in C#, although there it worked with all kinds of the quotation marks;

    let name = "Ilya";

    alert( `hello ${1}` ); // "hello 1";

    alert( `hello ${"name"}` ); // "hello name";

    alert( `hello ${name}` ); // "hello Ilya";
}