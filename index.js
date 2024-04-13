#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) computer will generate a random number - done
// 2) user input for guessing number - done 
// 3) computer user input with computer generated number and show result - done.
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to number guessing game");
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userGuesseNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number ");
}
