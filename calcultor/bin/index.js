#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow('Lets Start Calculation');
    await sleep();
    rainbow.stop();
    console.log(`
_____________________
|  _________________  |
| | Abdul       0.  | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`);
}
welcome();
async function askQuestion() {
    const answer = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform?\n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            massage: "enter number 1:"
        },
        {
            type: "number",
            name: "num2",
            massage: "enter number 2:"
        },
    ]);
    let res;
    //console.log(answer);
    if (answer.operator === "Addition") {
        res = answer.num1 + answer.num2;
    }
    else if (answer.operator === "Subtraction") {
        res = answer.num1 - answer.num2;
    }
    else if (answer.operator === "Multiplication") {
        res = answer.num1 * answer.num2;
    }
    else if (answer.operator === "Division") {
        res = answer.num1 / answer.num2;
    }
    console.log(`Result is ${res} `);
    //console.log(`${answer.num1} + ${answer.num2} = ${answer.num1} + ${answer.num2}`);  
}
async function startAgain() {
    do {
        await askQuestion();
        var Again = await inquirer
            .prompt({
            type: "input",
            name: "Restart",
            message: "Do You Want To Continue? press Y Or N:"
        });
    } while (Again.Restart == "Y" || Again.Restart == "Y" || Again.Restart == "Yes" || Again.Restart == "Yes");
}
startAgain();
