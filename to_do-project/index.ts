import inquirer from "inquirer";

//todoo arrays=done
// function=done
//operation= Done dana Dan Done

let todos:string[] = ["Raqeeb", "Zabi"];

async function createTodo (todos:string[]){


do{
    
    let ans = await inquirer.prompt({
        type:"list",
        message:"select an operation",
        name:"select",
        choices:["add", "update", "veiw", "delete"]
    })

    if(ans.select == "add"){
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"add item..",
            name:"Todo"
        });
        todos.push(addTodo.Todo)
        console.log(todos)
    }
    if(ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            type:"list",
            message:"select item for update",
            name:"todo",
            choices:todos.map(item => item)
        })

        let addTodo = await inquirer.prompt({
            type:"input",
            message:"add item..",
            name:"Todo"
        })

        let newtodos = todos.filter(val => val !== updateTodo.todo)
        todos = [...newtodos,addTodo.Todo]
        console.log(todos)
    }
    if(ans.select == "veiw"){
        console.log(todos)
    };
    if(ans.select == "delete"){
        let deleteTodo = await inquirer.prompt({
            type:"list",
            message:"select item for update",
            name:"todo",
            choices:todos.map(item => item)
        });
        let newtodos = todos.filter(val => val !== deleteTodo.todo)
        todos = [...newtodos];
        console.log(todos);
    }
}while(true)

}
createTodo(todos)




    
   
    