/* 
- create function to populate DISPLAY & updates with solution when operate is called
- *KEY* Figure out how to store all values and call operator function with them.

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
     eqButton = document.getElementById("equals"),
     backButton = document.getElementById("back"),
     clearButton = document.getElementById("clear"),
     reverseButton = document.getElementById("rev"),
     percButton = document.getElementById("%");

const display = document.getElementById("display");

let currentDisplay = "0",
    currentA = 0, 
    currentB = 0,
    prevCalc = 0,
    prevOperator = "+",
    currentOperator = "+",
    digitGroup = document.getElementsByClassName("digit");


clearButton.onclick = function(){
    reset();
};

backButton.onclick = function(){
    currentDisplay = removeLast(currentDisplay);
    setDisplay(currentDisplay);
};

reverseButton.onclick = function(){ //problematic when currentDislay sets as zero.
    currentDisplay*= -1;
    setDisplay(currentDisplay);
};

percButton.onclick = function(){
    currentDisplay/= 100;
    setDisplay(currentDisplay);
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
//THE PROBLEM IS THE END OF =, A 2ND HIT OF "=" or any other funtion thereafter causes issues. 

eqButton.onclick = function(){ //I need this to perform the calculation using the previous operator if the current operator is already =. AND don't mess up the stored data.
    shiftData();
    runCalc();
    storeData();
    clearDisplayCache();
}

function useOperator(operator){
    prevOperator=currentOperator;
    shiftData();
    runCalc();
    storeData();
    clearDisplayCache();
    currentOperator=`${operator}`;
}

function shiftData(){
    currentA = prevCalc;
    currentB = currentDisplay*1;
}  

function runCalc(){
    currentDisplay = operate(currentA, currentB, currentOperator);  
    setDisplay(currentDisplay);
}
function storeData(){
    prevCalc = currentDisplay*1;
}
function clearDisplayCache(){
    currentDisplay = "0"; //<-- likely source of problems
}
function getInput(){
    for (let button in digitGroup){ //adds any digit to display when clicked
       digitGroup[button].addEventListener('click', function(){ //WHY is safari flagging as not a function? Seems to work...
            currentDisplay += digitGroup[button].id;
            setDisplay(currentDisplay);
        });
    }
}

function setDisplay(newContent){
    //TO DO: need to shorten if too long for display
    newContent*=1;
    display.textContent = `${newContent}`;
}

function clearDisplay(){
    display.textContent = "0";
}

function reset(){
    clearDisplay();
    currentDisplay = "0",
    currentA = 0, 
    currentB = 0,
    prevCalc = 0,
    currentOperator = "+";
}

function removeLast(str){
    return str.substr(0, str.length-1);
}
function operate(a, b, opp){
    let result = 0;
    switch (opp){
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        case "=": 
            result = operate(a, b, prevOperator);//basically something like this????
            break;
        default: 
            alert ("Uh-oh, captain... something went wrong.")
    }
    return result;
}
function add(a, b){
    a*=1;
    b*=1;
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0){
        alert ("You won't fool me into dividing by zero! Fool me once, shame on you, fool me twice... Anyway, here's a zero.");
        return 0;
    } else {
        return a / b;
    }
}

getInput(); //calls function with event listeners... needs to be adjusted to remove alerts
