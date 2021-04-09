const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function setOutput(operator, initialResult, calcNumber){
    const calcDesc = `${initialResult} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDesc);
}

function setToObject(operation, prevResult, number, result){
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number: number,
        result: result
    };
    logEnteries.push(logEntry);
    console.log(logEnteries);
}

function calculation(calcType){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calcType == 'ADD'){
        currentResult += enteredNum;
        mathOperator = '+';
    }
    else if(calcType == 'SUBTRACT'){
        currentResult -= enteredNum;
        mathOperator = '-';
    }
    else if(calcType == 'MULTIPLY'){
        currentResult *= enteredNum;
        mathOperator = '-';
    }
    else if(calcType == 'DIVIDE'){
        currentResult /= enteredNum;
        mathOperator = '-';
    }
    setOutput(mathOperator, initialResult, enteredNum);
    setToObject('ADD', initialResult, enteredNum, currentResult);
}

function add(){
    calculation('ADD');
}

function subtract(){
    calculation('SUBTRACT');
}

function multiply(){
    calculation('MULTIPLY');
}

function divide(){
    calculation('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);