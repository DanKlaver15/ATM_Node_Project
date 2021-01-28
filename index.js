"use strict";

// JS ATM Program Using Node

const prompt = require("prompt-sync")();
const atm = require("./atm");

console.log("Hello. Please enter your PIN");

let enteredPin = prompt();
while (!atm.validatePin(enteredPin)) {
   console.log("I'm sorry, but the PIN you entered is incorrect. Please try again");
   enteredPin = prompt();
}

if (atm.validatePin(enteredPin)) {
   mainMenu();
}

function mainMenu() {
   console.log("Welcome to the Main Menu.  Please choose from the following options:" + "\n" +
   "Enter the word 'balance' to check your current balance" + "\n" +
   "Enter the word 'withdraw' to make a withdrawl" + "\n" +
   "Enter the word 'deposit' to make a deposit");
   let displayOption = prompt();
}



console.log("Congrats, so far your program works");