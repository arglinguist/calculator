/* 
- create function to populate DISPLAY & updates with solution when operate is called
- *KEY* Figure out how to store all values and call operator function with them.

WATCH OUT
- evaluate only 2 at a time, even if a string of numbers & operators is inputted
- round numbers with long decimals
- what happens if pressing (=) before numbers or operator entered?

BONUS
- decimal (only once)
- keyboard support(event listener)
*/

// Assign buttons 
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
    currentResult = 0,
    currentOperator = "+",
    digitGroup = document.getElementsByClassName("digit");

getInput(); //calls function with event listeners... needs to be adjusted to remove alerts

clearButton.onclick = function(){
    reset();
}

backButton.onclick = function(){
    currentDisplay = removeLast(currentDisplay);
    setDisplay(currentDisplay);
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
    currentResult = 0,
    currentOperator = "+";
}

function removeLast(str){
    return str.substr(0, str.length-1);
}
function operate (a, b, opp){
    let result = 0;
    switch (opp){
        case "+":
            result = add (a, b);
            break;
        case "-":
            result = subtract (a, b);
            break;
        case "*":
            result = multiply (a, b);
            break;
        case "/":
            result = divide (a, b);
            break;
        default: 
            alert ("Uh-oh, captain... something went wrong.")
    }
    return result;
}
function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    if (b === 0){
        alert ("You won't fool me into dividing by zero! Fool me once, shame on you, fool me twice... Anyway, here's a zero.");
        return 0;
    } else {
        return a / b;
    }
}
