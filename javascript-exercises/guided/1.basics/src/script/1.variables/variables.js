'use strict';


export function showVariableAlert() {
    // declare two variables;
    let admin;
    let name;

    // set one to point to other;
    name = "John";
    admin = name;

    // show the pointed value;
    alert(admin);
}


export function variableNaming() {
    // the name of the Planet Earth as I see it;
    const earthPlanetName = 'Earth';

    // the name of the current web-site visitor;
    let currentVisitorName;
}


export function uppercaseConst() {
    // const value that is unlikely to change;
    const MY_BIRTHDAY_DATE_enGB = '2/6/1998';

    // a piece of code that can be altered during runtime;
    let age = someCode(MY_BIRTHDAY_DATE_enGB);
}


function someCode(sBirthdayDate) {
    // just some random instruction(s);
    alert(`Your birthday is on ${sBirthdayDate}.`);
}