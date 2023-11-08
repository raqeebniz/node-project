import chalk from "chalk";
import inquirer from "inquirer";

const api : string="https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
let fetchData = async (data:string) =>{
    let fetchquiz :any = await fetch(data)
    let res = await fetchquiz.json();
    return res;
} 
let data = await fetchData(api);
console.log(data)  
let startquiz = async () => {
    let score =0;
    let name = await inquirer.prompt({
        type:"input",
        name:"fname",
        message:"who is there"
    })
    for (let i=1; i<= 10; i++){
        let answer = [data[i].correct_answer,...data[i].incorrect_answers]
        let ans = await inquirer.prompt({
            type:"list",
            name:"quiz",
            message:data[i].question,
            choices:answer.map((val : any )=> val),
        });
        if (ans.quiz == data[i].correct_answer){
            score++
        }
    }
    
   console.log(" your score is "+ score) 
  }
  startquiz()