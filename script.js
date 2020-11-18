/* 
WATCH OUT
- round numbers with long decimals

BONUS
- decimal (only once)
- keyboard support(event listener)
*/

const addButton = document.getElementById("add"),
     subButton = document.getElementById("sub"),
     mulButton = document.getElementById("mult"),
     divButton = document.getElementById("divide"),
     clearButton = document.getElementById("clear"),
     reverseButton = document.getElementById("rev"),
     percButton = document.getElementById("%"),
     eqButton = document.getElementById("equals"),
     backButton = document.getElementById("back"),
     decimalButton = document.getElementById("."),
     displayWindow = document.getElementById("display"),
     digitGroup = document.getElementsByClassName("digit");

let displayText = "0",
    valueA = 0, 
    valueB = 0,
    prevCalc = 0,
    newCalc = 0,
    prevOperator = "=",
    newOperator = "=";
    
clearButton.onclick = function(){
    reset();
};

backButton.onclick = function(){
    displayText = removeLast(displayText);
    updateDisplay();
};

reverseButton.onclick = function(){ //problematic when displayText sets as zero.
    displayText*= -1;
    updateDisplay();
};

percButton.onclick = function(){
    displayText/= 100;
    updateDisplay();
};
addButton.onclick = function(){
    useOperator("+");
}
subButton.onclick = function(){
    useOperator("-");
}
divButton.onclick = function(){
    useOperator("/");
}
mulButton.onclick = function(){
    useOperator("*");
}

eqButton.onclick = function (){
    evalTotal();
}

function evalTotal(){
    if (newOperator === "="){ 
        //make the calculation with most recent result and previous valueB and previous operator.
        //this seems to be working well sequentially with all operators.
        valueA = newCalc;
        newCalc = operate(valueA, valueB, prevOperator);
        storeAndUpdateDisplay();
    } else {//WIP
        valueA = valueB; 
        valueB = displayText;
        newCalc = operate(valueA, valueB, newOperator);
        storeAndUpdateDisplay();
        prevOperator = newOperator; //store most recent operator
    }
    newOperator = "=";
}

function useOperator(opp){//WIP
    if (newOperator === "="){ //act as if we're working from clean slate
        valueA = newCalc;
        valueB = displayText*1;
        newOperator = `${opp}`;
        displayText = "0";
    } else {//WIP
        valueA = valueB; 
        valueB = displayText*1;
        newCalc = operate(valueA, valueB, newOperator);
        storeAndUpdateDisplay();
        prevOperator = newOperator; //store most recent operator
    }
}
function updateOperator(opp){
    prevOperator = newOperator;
    newOperator = opp;
}

function storeAndUpdateDisplay(){
    displayText = newCalc;  
    updateDisplay(); 
    displayText = "0"; 
}

function shiftValues(){
    valueA = prevCalc;
    valueB = displayText*1;
}  
function storeResult(){
    prevCalc = newCalc;
}

function clearDisplayCache(){
    displayText = "0"; //<-- likely source of problems
}
function getInput(){
    for (let button in digitGroup){ //adds any digit to display when clicked
       digitGroup[button].addEventListener('click', function(){ //WHY is safari flagging as not a function? Seems to work...
            displayText += digitGroup[button].id;
            updateDisplay();
        });
    }
}

function updateDisplay(){
    displayWindow.textContent = displayText*1;
}

function clearDisplay(){
    displayWindow.textContent = "0";
}

function reset(){
    clearDisplay();
    displayText = "0";
    valueA = 0;
    valueB = 0;
    prevCalc = 0;
    newCalc = 0;
    prevOperator = "=";
    newOperator = "=";
}

function removeLast(str){
    return str.substr(0, str.length-1);
}
function operate(a, b, opp){
    switch(opp){
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
        case "=":
            return b;
        default: 
            alert("We've got a problem, captain...");
            return 0;
    }
}

getInput(); 
//THE PROBLEM IS THE END OF =, A 2ND HIT OF "=" or any other funtion thereafter causes issues. 

/* PREVIOUS APPROACH - hold for reference
eqButton.onclick = function(){ //I need this to perform the calculation using the previous operator if the current operator is already =. AND don't mess up the stored data.
    shiftData();
    runCalc();
    storeData();
    clearDisplayCache();
}

function useOperator(operator){
    prevOperator=newOperator;
    shiftData();
    runCalc();
    storeData();
    clearDisplayCache();
    newOperator=`${operator}`;
}

function shiftData(){
    valueA = prevCalc;
    valueB = displayText*1;
}  

function runCalc(){
    displayText = operate(valueA, valueB, newOperator);  
    updateDisplay();
}
function storeData(){
    prevCalc = displayText*1;
}*/