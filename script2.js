const addButton = document.getElementById("add"),
    subButton = document.getElementById("sub"),
    multButton = document.getElementById("mult"),
    divButton = document.getElementById("divide"),
    clearButton = document.getElementById("clear"),
    revButton = document.getElementById("rev"),
    percentButton = document.getElementById("%"),
    equalsButton = document.getElementById("equals"),
    backButton = document.getElementById("back"),
    decimalButton = document.getElementById("."),
    displayWindow = document.getElementById("display"),
    numArray = document.getElementByClassName("digit");

let valueA = 0,
    valueB = 0,
    inputedValue = 0,
    calculatedResult = 0, 
    currentOperator = '+',
    displayText = '0';

revButton.onclick(reverse()); //syntax okay?
clearButton.onclick(resetAll());
addButton.onclick(function(){

})

function shiftValues(){
    valueA = valueB;
    valueB = displayText;
}
function calcAndDisplay(){
    calculatedResult = calcNewValue(valueA, valueB, currentOperator);
    displayText = calculatedResult;
    updateDisplay();
    displayText = 0;
}
function getInput(){//WIP. check what worked on the other file.
   // addEventListener
}
function reverse(){
    displayText*=(-1);
    updateDisplay();
}

function updateDisplay(){
    displayWindow.textContent = displayText;
}

function resetAll(){
    valueA = 0;
    valueB = 0;
    inputedValue = 0;
    calculatedResult = 0; 
    currentOperator = '+';
    displayText = '0';
}

function calcNewValue(a, b, op){
    switch(op){
        case "+":
            return 1*a + 1*b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/": 
            if (b*1 === 0){
                alert("You won't trick me into dividing by zero!"); 
                return 0;
            } else {
                return a/b;
            }
        default: 
            alert("We've got a problem, captain...");
            return 0;
    }
}

