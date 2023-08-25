// Variables
const screenInput = document.querySelector('.input');
const screenError = document.querySelector('.error');
const screenOutput = document.querySelector('.output');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalButton = document.querySelector('.equal');
const minusButton = document.querySelector('.minus');

// Functions
function add(num1, num2) {
 return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function clearDisplay() {
    screenInput.textContent = "";
    screenError.textContent = "";
    screenOutput.textContent = "";
}

function getResult() {
    // read the matemathic expression
    let mathExpression = screenInput.textContent.split(' ');
    let num1 = parseFloat(mathExpression[0]);
    let num2 = parseFloat(mathExpression[2]);
    let operator = mathExpression[1];

    // calculate the result
    let result = 0;
    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = substract(num1, num2);
    } else if (operator === 'x') {
        result =  multiply(num1, num2);
    } else if (operator === '÷') {
        result =  divide(num1, num2);
    }
    return result;
}


// Event Listener
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        screenInput.textContent = screenInput.textContent + button.textContent; 
    })
})


minusButton.addEventListener('click', () => {
    let mathExpression = screenInput.textContent.split(' ');
    if (mathExpression.length === 1 && mathExpression[0] === '') {
        screenInput.textContent = `${minusButton.textContent}`;
    } else if (mathExpression.length === 1 && !isNaN(parseFloat(mathExpression[0]))) {
        screenInput.textContent = screenInput.textContent + ` ${minusButton.textContent} `;
    } else if (mathExpression.length === 3 && mathExpression[2] === '') {
        screenInput.textContent = `${mathExpression[0]} ${minusButton.textContent} `;
    } else if (mathExpression.length === 3 && mathExpression !== '') {
        let result = getResult();
        screenInput.textContent = `${result} ${minusButton.textContent} `;
    } else if (mathExpression.length === 4 && screenOutput !== ''){
        let result = screenOutput.textContent;
        clearDisplay();
        screenInput.textContent = `${result} ${minusButton.textContent} `;
    }
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        let mathExpression = screenInput.textContent.split(' ');
        if (mathExpression.length === 1 && !isNaN(parseFloat(mathExpression[0]))) {
            screenInput.textContent = screenInput.textContent + ` ${button.textContent} `;
        } else if (mathExpression.length === 3 && mathExpression[2] === '') {
            screenInput.textContent = `${mathExpression[0]} ${button.textContent} `;
        } else if (mathExpression.length === 3 && mathExpression !== '') {
            let result = getResult();
            screenInput.textContent = `${result} ${button.textContent} `;
        } else if (mathExpression.length === 4 && screenOutput !== ''){
            let result = screenOutput.textContent;
            clearDisplay();
            screenInput.textContent = `${result} ${button.textContent} `;
        }
    })
})

equalButton.addEventListener('click', () => {
    let mathExpression = screenInput.textContent.split(' ');
    if (mathExpression.length === 3 && !isNaN(parseFloat(mathExpression[0])) && !isNaN(parseFloat(mathExpression[2]))) {
        let result = getResult();
        screenInput.textContent = screenInput.textContent + ` ${equalButton.textContent}`;
        screenOutput.textContent = screenOutput.textContent + `${result}`; 
    }
})

clearButton.addEventListener('click', () => {
    clearDisplay();
})

deleteButton.addEventListener('click', () => {
    let orginalText = screenInput.textContent;
    if (orginalText.length === 4 || orginalText.length === 7) {
        screenInput.textContent = orginalText.slice(0, -3);
        if (screenOutput.textContent !== "") screenOutput.textContent = "";
    } else {
        screenInput.textContent = orginalText.slice(0, -1);
    }
})

// Keyboard support
window.addEventListener('keydown', (event) => {
    console.log(event);
    if (!isNaN(parseFloat(event.key))) {
        screenInput.textContent = screenInput.textContent + event.key; 
    } else if (event.code === 'Backspace') {
        let orginalText = screenInput.textContent;
        if (orginalText.length === 4 || orginalText.length === 7) {
            screenInput.textContent = orginalText.slice(0, -3);
            if (screenOutput.textContent !== "") screenOutput.textContent = "";
        } else {
            screenInput.textContent = orginalText.slice(0, -1);
        }
    } else if (event.key === "-") {
        let mathExpression = screenInput.textContent.split(' ');
        if (mathExpression.length === 1 && mathExpression[0] === '') {
            screenInput.textContent = `${event.key}`;
        } else if (mathExpression.length === 1 && !isNaN(parseFloat(mathExpression[0]))) {
            screenInput.textContent = screenInput.textContent + ` ${event.key} `;
        } else if (mathExpression.length === 3 && mathExpression[2] === '') {
            screenInput.textContent = `${mathExpression[0]} ${event.key} `;
        } else if (mathExpression.length === 3 && mathExpression !== '') {
            let result = getResult();
            screenInput.textContent = `${result} ${event.key} `;
        } else if (mathExpression.length === 4 && screenOutput !== ''){
            let result = screenOutput.textContent;
            clearDisplay();
            screenInput.textContent = `${result} ${event.key} `;
        }
    } else if (event.key === '+' || event.key === '-') {
        let mathExpression = screenInput.textContent.split(' ');
        if (mathExpression.length === 1 && !isNaN(parseFloat(mathExpression[0]))) {
            screenInput.textContent = screenInput.textContent + ` ${event.key} `;
        } else if (mathExpression.length === 3 && mathExpression[2] === '') {
            screenInput.textContent = `${mathExpression[0]} ${event.key} `;
        } else if (mathExpression.length === 3 && mathExpression !== '') {
            let result = getResult();
            screenInput.textContent = `${result} ${event.key} `;
        } else if (mathExpression.length === 4 && screenOutput !== ''){
            let result = screenOutput.textContent;
            clearDisplay();
            screenInput.textContent = `${result} ${event.key} `;
        }
    } else if (event.key === '*') {
        let mathExpression = screenInput.textContent.split(' ');
        if (mathExpression.length === 1 && !isNaN(parseFloat(mathExpression[0]))) {
            screenInput.textContent = screenInput.textContent + ` x `;
        } else if (mathExpression.length === 3 && mathExpression[2] === '') {
            screenInput.textContent = `${mathExpression[0]} x `;
        } else if (mathExpression.length === 3 && mathExpression !== '') {
            let result = getResult();
            screenInput.textContent = `${result} x `;
        } else if (mathExpression.length === 4 && screenOutput !== ''){
            let result = screenOutput.textContent;
            clearDisplay();
            screenInput.textContent = `${result} x `;
        }
    } else if (event.key === '/') {
        let mathExpression = screenInput.textContent.split(' ');
        if (mathExpression.length === 1 && !isNaN(parseFloat(mathExpression[0]))) {
            screenInput.textContent = screenInput.textContent + ` ÷ `;
        } else if (mathExpression.length === 3 && mathExpression[2] === '') {
            screenInput.textContent = `${mathExpression[0]} ÷ `;
        } else if (mathExpression.length === 3 && mathExpression !== '') {
            let result = getResult();
            screenInput.textContent = `${result} ÷ `;
        } else if (mathExpression.length === 4 && screenOutput !== ''){
            let result = screenOutput.textContent;
            clearDisplay();
            screenInput.textContent = `${result} ÷ `;
        }
    } else if (event.key === 'Enter') {
        let mathExpression = screenInput.textContent.split(' ');
        if (mathExpression.length === 3 && !isNaN(parseFloat(mathExpression[0])) && !isNaN(parseFloat(mathExpression[2]))) {
            let result = getResult();
            screenInput.textContent = screenInput.textContent + ` ${equalButton.textContent}`;
            screenOutput.textContent = screenOutput.textContent + `${result}`; 
        }
    }
})






