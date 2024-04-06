#! /usr/bin/env node
import inquirer from "inquirer";
let todos_List = [];
while (true) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Enter your operation :",
            choices: ["READ", "ADD", "UPDATE", "DELETE", "EXIT"],
        },
    ]);
    if (ans.select === "READ") {
        for (let i = 0; i < todos_List.length; i++)
            console.log(i, todos_List[i]);
    }
    else if (ans.select === "ADD") {
        let addtodo = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: "Enter your item",
            },
        ]);
        todos_List.push(addtodo.add);
        for (let i = 0; i < todos_List.length; i++)
            console.log(i, todos_List[i]);
    }
    else if (ans.select === "UPDATE") {
        let updatetodo = await inquirer.prompt([
            {
                name: "update",
                type: "list",
                message: "Enter your updated item ",
                choices: todos_List,
            },
        ]);
        let newtodo = await inquirer.prompt([
            {
                name: "update",
                type: "add",
                message: "Enter your new item",
            },
        ]);
        let newTodos = todos_List.filter((val) => val !== updatetodo.update);
        todos_List = [...newTodos, newtodo.update];
        for (let i = 0; i < todos_List.length; i++)
            console.log(i, todos_List[i]);
    }
    else if (ans.select === "DELETE") {
        let deleteitem = await inquirer.prompt([
            {
                name: "delete",
                type: "list",
                message: "Enter your item to delete",
                choices: todos_List,
            },
        ]);
        let newTodos = todos_List.filter((val) => val !== deleteitem.delete);
        todos_List = [...newTodos];
        for (let i = 0; i < todos_List.length; i++)
            console.log(i, todos_List[i]);
    }
    else if (ans.select === "EXIT") {
        break;
    }
}
