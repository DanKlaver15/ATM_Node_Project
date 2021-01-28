"use strict";

// JS ATM Program Using Node

const prompt = require("prompt-sync")();
const atm = require("./atm");

console.log("Hello. Please enter your PIN");

let enteredPin = prompt();
while (!atm.validatePin(enteredPin)) {
   console.log("I'm sorry, but the PIN you entered is incorrect. Please try again.");
   enteredPin = prompt();
}

if (atm.validatePin(enteredPin)) {
   mainMenu();
}

/*======================================================================*/

function mainMenu() {
   console.log("Welcome to the Main Menu.  Please choose from the following options:" + "\n" +
   "Enter the word 'balance' to check your current balance." + "\n" +
   "Enter the word 'withdraw' to make a withdrawl." + "\n" +
   "Enter the word 'deposit' to make a deposit." + "\n" +
   "You may alse enter 'exit' stop using this ATM.");
   let displayOption = prompt().toLowerCase();
   while (displayOption !== "balance" || displayOption !== "withdraw" || displayOption !== "deposit") {
      console.log("I'm sorry, but the option you entered is not valid. Please try again." + "\n" +
      "Enter the word 'balance' to check your current balance." + "\n" +
      "Enter the word 'withdraw' to make a withdrawl." + "\n" +
      "Enter the word 'deposit' to make a deposit."  + "\n" +
      "You may alse enter 'exit' stop using this ATM.");
      displayOption = prompt().toLowerCase();
   }

   switch(displayOption) {
      case "balance":
         atm.getBalance();
         console.log("Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
         let response = prompt().toLowerCase();
         if (response === 'yes') {
            return mainMenu();
         }
         else {
            return;
         }
      case "withdraw":
         console.log("How much would you like to withdraw?")
         let withdrawAmount = parseInt(prompt());
         while (!Number.isInteger(withdrawAmount)) {
            console.log("The amount you have entered is invalid. Please enter an integer for withdrawl.");
            withdrawAmount = parseInt(prompt());
         }
         while (withdrawAmount > atm.balance) {
            console.log("Insufficient funds.  Please enter a number less than " + atm.balance);
            withdrawAmount = parseInt(prompt());
         } 
         console.log("Thank you. Your new balance is: $" + atm.withdraw(withdrawAmount));
         console.log("Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
         let response = prompt().toLowerCase();
         if (response === 'yes') {
            return mainMenu();
         }
         else {
            return;
         }
      case "deposit":
         console.log("How much would you like to deposit?");
         let depositAmount = parseInt(prompt());
         while (!Number.isInteger(depositAmount)) {
            console.log("The amount you have entered is invalid. Please enter an integer for deposit.");
            depositAmount = parseInt(prompt());
         }
         console.log("Thank you. Your new balance is: $" + atm.deposit(depositAmount));
         console.log("Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
         let response = prompt().toLowerCase();
         if (response === 'yes') {
            return mainMenu();
         }
         else {
            return;
         }
      case "exit":
      return;
      default:
         return mainMenu();
   }
}

console.log("Thank you, and have a nice day!");