#! usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome To CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number (Number limit from 1 to 5)",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation You Guess a Correct Number");
}
else {
    console.log("Sorry ! You Guess a Wrong Number");
}
