/* 
-make functions for each operation
    - ADD
    - SUBTRACT
    - MULTIPLY
    - DIVIDE (give snarky message for /0)
-make OPERATE function that takes an operator & 2 numbers and calls one of the above
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
