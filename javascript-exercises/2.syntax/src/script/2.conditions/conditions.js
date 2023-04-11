'use strict';

export function showTheSign() {
    let promptResult = prompt('Please, type in a numeric value');

    promptResult = Number(promptResult);

    // Not going to write something like this in a serious project :p
    // Was just playing with `NaN` and `null`;
    promptResult = (promptResult > 0) ? 1 : ((promptResult < 0) ? -1 : ((promptResult === 0) ? 0 : 'false'));

    alert(promptResult);
}

export function rewriteIfIntoTernary() {
    let result;
    let a, b;
    
    // objective: turn this ->
    //
    // if (a + b < 4) {
    //     result = 'Below';
    //  } 
    //  else {
    //     result = 'Over';
    //  }
    //
    // into this ->

    result = (a + b) < 4 ? 'Below' : 'Over'; 
}

export function rewriteIfIntoBs() {
    // it's ok to make this for fun,
    // but I will not write something like that outside of some joke context;
    
    let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' : '';
}