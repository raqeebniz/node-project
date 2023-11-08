#! /usr/bin/env node

import inquirer from "inquirer";
async function convertor() {
    const inp  = await inquirer.prompt([{
        
        type:"list",
        name:"currency",
        message:"chose your currency",
        choices:["Pkr","USD","Riyal"]
    },
    {
      type:"number",
      name:"amount",
      message:"Enter amount"
    }

]);
if(inp.currency == "Pkr"){
    console.log("Amount you have in PKR    is = " + inp.amount);
    console.log("Amount you have in USD    is = " + inp.amount*0.0035);
    console.log("Amount you have in Riyall is = " + inp.amount*0.013);
}
else if (inp.currency == "USD"){
    console.log("Amount you have in PKR    is = " + inp.amount* 286.57);
    console.log("Amount you have in USD    is = " + inp.amount);
    console.log("Amount you have in Riyall is = " + inp.amount*3.75);

}
else{
    console.log("Amount you have in PKR    is = " + inp.amount* 76.4);
    console.log("Amount you have in USD    is = " + inp.amount* 0.27);
    console.log("Amount you have in Riyall is = " + inp.amount);
}   
}
await convertor();
