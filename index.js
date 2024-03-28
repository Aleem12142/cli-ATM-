#! /usr/bin/env node
import inquirer from 'inquirer';
let myBalance = 10000; // Dollars
let myPin = 1234;
let remainigAmount = "your remainig amount is:";
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Welcome to your account!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "select one of options",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount < myBalance) {
            myBalance -= amountAnswer.amount;
            console.log(remainigAmount + myBalance);
        }
        else {
            console.log("Insuficent balance!");
        }
    }
    else if (operationAnswer.operation === "fast cash") {
        let amountSelection = await inquirer.prompt([
            {
                name: "select",
                message: "select one of given amount",
                type: "list",
                choices: ["500", "1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= amountSelection.select;
        console.log(remainigAmount + myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
