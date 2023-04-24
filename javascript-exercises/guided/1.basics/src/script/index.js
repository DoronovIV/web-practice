'use strict';

// show alert message;
import { showAlert } from "./0.alerts/alerts.js";

// show alert of the local variable;
import { showVariableAlert } from "./1.variables/variables.js";

// show alert of the local const value;
import { uppercaseConst } from "./1.variables/variables.js";

// show string interpolation output;
import { showAlertOutput } from "./2.data-types/strings.js";

// read user string with prompt and then alert it back;
import { loopbackUserName } from "./3.prompt/prompt.js";


// let taskOne = showAlert();
// let taskTwo = showVariableAlert();
// let taskThree = uppercaseConst();
// let taskFour = showAlertOutput();
let taskFive = loopbackUserName();