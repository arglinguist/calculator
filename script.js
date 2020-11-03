/* 
- CLEAR function wipes ALL exisiting data
- create function to populate DISPLAY & updates with solution when operate is called
- *KEY* Figure out how to store all values and call operator function with them.

WATCH OUT
- evaluate only 2 at a time, even if a string of numbers & operators is inputted
- round numbers with long decimals
- what happens if pressing (=) before numbers or operator entered?

BONUS
- decimal (only once)
- backspace
- keyboard support(event listener)
*/

// Assign buttons 
 const addButton = document.getElementById("add"),
     subButton = document.getElementById("sub"),
     mulButton = document.getElementById("mult"),
     divButton = document.getElementById("divide"),
     eqButton = document.getElementById("equals"),
     button1 = document.getElementById("1"),
     button2 = document.getElementById("2"),
     button3 = document.getElementById("3"),
     button4 = document.getElementById("4"),
     button5 = document.getElementById("5"),
     button6 = document.getElementById("6"),
     button7 = document.getElementById("7"),
     button8 = document.getElementById("8"),
     button9 = document.getElementById("9"),
     button0 = document.getElementById("0"),
     decButton = document.getElementById("."),
     backButton = document.getElementById("back"),
     clearButton = document.getElementById("clear"),
     reverseButton = document.getElementById("rev"),
     percButton = document.getElementById("%");

const display = document.getElementById("display");
let currentDisplay = "0",
    currentA = 0, 
    currentB = 0,
    currentResult = 0,
    currentOperator = "+";

//digits --- can this be consolidated into an array??
button0.onclick = function(){
    currentDisplay += "0";
    setDisplay(currentDisplay);
};
button1.onclick = function(){
    currentDisplay += "1";
    setDisplay(currentDisplay);
};
button2.onclick = function(){
    currentDisplay += "2";
    setDisplay(currentDisplay);
};
button3.onclick = function(){
    currentDisplay += "3";
    setDisplay(currentDisplay);
};
button4.onclick = function(){
    currentDisplay += "4";
    setDisplay(currentDisplay);
};
button5.onclick = function(){
    currentDisplay += "5";
    setDisplay(currentDisplay);
};
button6.onclick = function(){
    currentDisplay += "6";
    setDisplay(currentDisplay);
};
button7.onclick = function(){
    currentDisplay += "7";
    setDisplay(currentDisplay);
};
button8.onclick = function(){
    currentDisplay += "8";
    setDisplay(currentDisplay);
};
button9.onclick = function(){
    currentDisplay += "9";
    setDisplay(currentDisplay);
};
clearButton.onclick = function(){
    reset();
}

//functions
function setDisplay(newContent){
        //need to shorten if too long for display
        //get rid of leading 0
    display.textContent = newContent;
}

function clearDisplay(){
    display.textContent = "0";
}

function reset(){
    clearDisplay();
    //do
    currentA = 0, 
    currentB = 0,
    currentResult = 0,
    currentOperator = "+";
}


function removeLast(str){
    let length = str.length;
        newStr = "";
    for (i = 0; i<length-1; i++){
        newStr += str.char[i];
    }
    return newStr;
}


// The maths...
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
        alert ("You won't fool me into dividing by zero again! Fool me once, shame on you, fool me twice... UNDEFINED");
        return 0;
    } else {
        return a / b;
    }
}
