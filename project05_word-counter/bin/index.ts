#! /usr/bin/env node
import inquirer from "inquirer";
async function input():Promise<string> {
    const inp= await inquirer.prompt([{
type:"input",
name: "work",
message: "Enter the stentence"

    }]);
return inp.work;
    
}
let inputString= await input();
const words = inputString.split(" ");
console.log("there are "+words.length +" words in your sentence");