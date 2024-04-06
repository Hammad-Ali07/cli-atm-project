import inquirer from "inquirer";
//make a variable of of my current amount in account....
let myBalance = 20000;
//make a variable in which i store  my atm pin
let myPin = 5544;
//now i make promt in which user enter atm pin
let pinAnswer = await inquirer.prompt({
    name: "Pin",
    message: "Enter your Pin",
    type: "number",
});
//if user enter right pin then print a message where user select option
if (pinAnswer.Pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"],
        },
    ]);
    //if user select withdraw option
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            }
        ]);
        console.log(amountAns);
        // if user enter amount for withdraw then subtract their amount from currrent balance and show remaining balance
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`The remaining Balance is  ${balance}`);
        }
        //if user enter greater amount than their available balance then print statment of insufficient balance
        else {
            console.log(`You Have Insufficient Balance`);
        }
    }
    // if user select fast cash options
    else if (operationAns.operation === "Fast cash") {
        let FastcashAns = await inquirer.prompt({
            name: "amount",
            type: "list",
            choices: ["1000", "5000", "10000", "25000"],
        });
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance - FastcashAns.amount;
            console.log(`The remaining Balance is  ${balance2}`);
        }
        else {
            console.log(`You Have Insufficient Balance`);
        }
    }
    // if user enter greater amount than current balance
    else if (operationAns.operation === "check balance") {
        console.log(`Your current Balance is ${myBalance}`);
    }
}
//if user enter wrong pin .......
else {
    console.log("Invalid pin code");
}
