import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
const createrUser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            acountNumber: Math.floor(100000000 * Math.random() * 9000000),
            balance: 1000000 * i
        };
        users.push(user);
    }
    return users;
};
//atm machine
const atmMachine = async (users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: "Write pin code",
        name: "pin"
    });
    //console.log("Welcome Acount Holder")
    const user = users.find(val => val.pin == res.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmFunc(user);
        return;
    }
    else {
        console.log("Invalid user pin");
    }
};
//atm function
const atmFunc = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "salect",
        message: "karna kia chahty ho..",
        choices: ["withdraw", "balance", "deposite", "exit"]
    });
    if (ans.salect == "withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "enter amount",
            name: "rupee"
        });
        if (amount.rupee > user.balance) {
            console.log("mojuda blance na kafi hy");
        }
        if (amount.rupee > 25000) {
            console.log("app 25000 sy ziyada rupees nahi nikal sakty");
        }
        console.log(`withdraw amount: ${amount.rupee}`);
        console.log(`balance: ${user.balance - amount.rupee}`);
    }
    if (ans.salect == "balance") {
        console.log(`balance: ${user.balance}`);
        return;
    }
    if (ans.salect == "deposite") {
        const deposite = await inquirer.prompt({
            type: "number",
            message: "deposite amount enter",
            name: "rupee"
        });
        console.log(`Deposite amount: ${deposite.rupee}`);
        console.log(`Total Balance: ${user.balance + deposite.rupee}`);
    }
    if (ans.salect == "exit") {
        console.log("thanks for using Atm");
    }
};
const users = createrUser();
atmMachine(users);
