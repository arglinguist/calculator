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
