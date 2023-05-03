let doc = document;
let counter = 0;
let buttonWidth = 100;
let buttonHeight = 20;

let score = doc.querySelector('.score');
let field = doc.querySelector('.field');

score.style.visibility = 'hidden';

let scoreLabel = doc.querySelector('.score__label');
let scoreValue = doc.querySelector('.score__value');

let button = doc.querySelector('.field__button-container__agile-button');
let buttonContainer = button.parentElement;

button.addEventListener('click', onClick);

function onClick() {
    inc();
    leap();
}

function OnCounterChange() {
    scoreValue.textContent = counter;
    score.style.visibility = counter > 0 ? 'visible' : 'hidden';
}

function inc() {
    counter++;
    OnCounterChange();
}

function reset() {
    counter = 0;
    OnCounterChange();
}

function leap() {
    let currentX = buttonContainer.style.left;
    let currentY = buttonContainer.style.top;

    let newPoint = getNewPoint(currentX, currentY);

    buttonContainer.style.left = newPoint[0];
    buttonContainer.style.top = newPoint[1];
}

function getNewPoint(currentX, currentY) {
    let newX = currentX;
    let newY = currentY;

    newX = Math.round(Math.random() * 800);
    newY = Math.round(Math.random() * 800);

    return [newX, newY];
}
