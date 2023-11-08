import chalk from "chalk";
import inquirer from "inquirer"
class Oppent{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name=name;
    }
    hit(){
        this.fuel -= 25;
    }
}
class Plear extends Oppent{
drink(){
    this.fuel=100;
}
}
let player= await inquirer.prompt({
type:"input",
name:"name",
message:"Please enter your name"
})
let oppent= await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select your opponent",
    choices:["Skelton","Assain","Zombie"]
})
let p1= new Plear(player.name)
let o1= new Oppent(oppent.select)
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
   do{ 
    let ask =await inquirer.prompt({
        type:"list",
        name:"opt",
        message:"Select your opponent",
        choices:["Attack","Drink Portion","Run for your life"]
    });
    if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() *2)
        if(num > 0){
        p1.hit();
        console.log(`${chalk.bold.red(p1.name)} fule =${chalk.bold.red(p1.fuel)}`)
        console.log(`${chalk.bold.green(o1.name)} fule =${chalk.bold.green(o1.fuel)}`)
        }
        else {
         o1.hit();
         console.log(`${chalk.bold.red(o1.name)} fule =${chalk.bold.red(o1.fuel)}`)
        console.log(`${chalk.bold.green(p1.name)} fule =${chalk.bold.green(p1.fuel)}`)
        }
    }
    else if(ask.opt == "Drink Portion"){
    p1.drink()
    console.log(`Now the fuel = ${chalk.bold.green(p1.fuel)}`)
    }
    else {
     p1.fuel=0;
    }
   }while (p1.fuel != 0 && o1.fuel != 0)
   if(o1.fuel == 0 ){
console.log(`${chalk.bold.italic.green("Hurrah! you have won the game")}`)
   }
   else {
    console.log(`${chalk.bold.italic.red("OHOO! you have Lose the game")}`)
   }

