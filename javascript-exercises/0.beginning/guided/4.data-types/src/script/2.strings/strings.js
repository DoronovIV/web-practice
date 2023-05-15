`use strict`;

export function uppercaseFirstCharacter(str) {
    let result = checkStringForUpperCase(str) ? doUppercaseSafely(str) : str;
    return result;
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function checkStringForUpperCase(str) {
    str && isLetter(str[0]);
}

function doUppercaseSafely(str) {
    str[0].toUpperCase() + str.substring(1);
}

export function checkForSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

export function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + '…' : str;
}

export function extractCurrencyValue(str) {
    return +str.slice(1);
}
