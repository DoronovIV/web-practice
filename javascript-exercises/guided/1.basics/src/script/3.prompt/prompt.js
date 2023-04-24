export function loopbackUserName() {
    'use strict';

    let userName = prompt("What is thy name?");

    userName = (!userName) ? ':(' : userName;

    alert(userName);
}