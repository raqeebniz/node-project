import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const responce = await inquirer.prompt({
    type:"number",
    name:"inp",
    message:"enter the seconds of countdown",

});
let value=responce.inp
function counter (val:number){
    const initaltime= new Date().setSeconds(new Date().getSeconds() + val)
    const interval= new Date(initaltime);
    setInterval((()=>{
        const time=new Date()
        const timediff= differenceInSeconds(interval,time)
        if (timediff <=0){
            console.log("Counter has expired")
        process.exit();
        }
        const min=Math.floor((timediff % (3600*24))/3600);
        const sec = Math.floor(timediff % 60);
        console.log(`${min}:${sec}`)

    }),1000)
}
counter(value);