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

//Maybe simplify to make an event listener that differentiates operator by button (e.g. switch statement?) but otherwise has single function for this?
addButton.onclick = function(){
    runCalculation();
    currentOperator="+";
}

subButton.onclick = function(){
    runCalculation();
    currentOperator="-";
}

divButton.onclick = function(){
    runCalculation();
    currentOperator="/";
}

mulButton.onclick = function(){
    runCalculation();
    currentOperator="*";
}

eqButton.onclick = function(){
    runCalculation();
}


//STICKING POINT --> a zero keeps sneaking in, so subtraction/addition works but not multiplication/division. FIRST run works, but not subsequent. Somthing wr)
function runCalculation(){

    currentA = prevCalc;
    currentB = currentDisplay*1;    

    currentDisplay = operate(currentA, currentB, currentOperator);  
    setDisplay(currentDisplay);

    prevCalc = currentDisplay*1;
    currentDisplay = 0; //<-- likely source of problems
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
