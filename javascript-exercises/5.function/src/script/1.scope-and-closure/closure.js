`use strict`;

export function nestedAdd(firstValue) {
    return function (secondValue) {
        return firstValue + secondValue;
    };
}

export function makeReference() {
    let variable = 1;

    function func() {
        alert(variable); // ReferenceError: Cannot access 'x' before initialization
        let variable = 2;
    }

    func();
}

export function makeArrayFilters() {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    alert(arr.filter(getInnerJoin([1, 2, 10]))); // shows 1 and 2;
}

function inBetween(minValue, maxValue) {
    return function (result) {
        return minValue <= result && result <= maxValue;
    };
}

function getInnerJoin(array) {
    return function (result) {
        return array.includes(result);
    };
}

export function makeSortByProperty() {
    let users = [
        { name: 'John', age: 20, surname: 'Johnson' },
        { name: 'Pete', age: 18, surname: 'Peterson' },
        { name: 'Ann', age: 19, surname: 'Hathaway' },
    ];

    users.sort(selectMaxField('age'));

    for (let u of users) {
        alert(u.name + ' ' + u.age);
    }
}

function selectMaxField(fieldName) {
    return (f, s) => (f[fieldName] >= s[fieldName] ? 1 : -1);
}
