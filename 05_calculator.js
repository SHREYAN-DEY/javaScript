// making a faulty calculator 

/*

This faulty calculator does following : 
1. It takes two numbers as input from the user,
2. It performs wrong operation as follows :
    a. + ----> -
    b. * ----> +
    c. - ----> /
    d. / ----> *
 *[It only performs wrong operation 10% of the times]  

*/


"use strict";
// Added { sigint: true } to allow graceful exit with Ctrl+C
const prompt = require("prompt-sync")({ sigint: true });


function add(a,b,r) {
    const isFaulty = r < 0.1;
    let result;
    if (isFaulty) {
        result = a - b;
        console.log(`\nFaulty operation: ${a} + ${b} = ${result}`);
    } else {
        result = a + b;
        console.log(`\nCorrect operation: ${a} + ${b} = ${result}`);
    }
    return result;
}

function dif(a,b,r) {
    const isFaulty = r < 0.1;
    let result;
    if (isFaulty) {
        // Handle division by zero for faulty operation
        if (b === 0) {
            console.log(`\nFaulty operation: ${a} - ${b}`);
            return NaN;
        }
        result = a / b;
        console.log(`\nFaulty operation: ${a} - ${b} = ${result} (should be ${a - b})`);
    } else {
        result = a - b;
        console.log(`\nCorrect operation: ${a} - ${b} = ${result}`);
    }
    return result;  
}


function mul(a,b,r) {
    const isFaulty = r < 0.1;
    let result;
    if (isFaulty) {
        result = a + b;
        console.log(`\nFaulty operation: ${a} * ${b} = ${result}`);
    } else {
        result = a * b;
        console.log(`\nCorrect operation: ${a} * ${b} = ${result}`);
    }
    return result; 
}


function div(a,b,r) {
    const isFaulty = r < 0.1;
    let result;
    if (isFaulty) {
        result = a * b;
        console.log(`\nFaulty operation: ${a} / ${b} = ${result} (should be ${a / b})`);
    } else {
        // Handle division by zero for correct operation
        if (b === 0) {
            console.log(`\nCorrect operation: ${a} / ${b} (division by zero error)`);
            return NaN;
        }
        result = a / b;
        console.log(`\nCorrect operation: ${a} / ${b} = ${result}`);
    }
    return result;
}



function faultyCalculator() {
    let rand;
    rand = Math.random();

    while (true) {
        console.log("\n------------------------------------------");
        console.log("Choose an operation : ");
        console.log("1 -> +, 2 -> -, 3 -> *, 4 -> /, 5 -> exit");
        console.log("------------------------------------------");
        const ip = prompt("Enter what want to perform : ");
        console.log("------------------------------------------");

        let a = prompt("Enter number for a : ");
        let b = prompt("Enter number for b : ");
        a = parseFloat(a);
        b = parseFloat(b);

        let out;
        switch (ip) {
            case "1":
                    out = add(a,b,rand);
                break;
            case "2":
                    out = dif(a,b,rand);
                break;
            case "3":
                    out = mul(a,b,rand);
                break;
            case "4":
                    out = div(a,b,rand);
                break;
            case "5":
                console.log("Exiting........");
                return;
        
            default:
                console.log("Invalid operation choice. Enter again ");
                out = null;
                break;
        }
    }
        
        
}



let result = faultyCalculator()
// console.log(object);

