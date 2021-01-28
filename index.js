"use strict";

// JS ATM Program Using Node

const prompt = require("prompt-sync")();
const atm = require("./atm");

console.log("Hello. Please enter your PIN");

let enteredPin = parseInt(prompt().trim());

while (!atm.validatePin(enteredPin)) {
   console.log("I'm sorry, but the PIN you entered is incorrect. Please try again.");
   enteredPin = parseInt(prompt());
}

if (atm.validatePin(enteredPin)) {
   mainMenu();
}

/*======================================================================*/

function mainMenu() {
   console.log("Welcome to the Main Menu.  Please choose from the following options:" + "\n" +
   "Enter the number 1 to check your current balance." + "\n" +
   "Enter the number 2 to make a withdrawl." + "\n" +
   "Enter the number 3 to make a deposit." + "\n" +
   "You may alse enter the number 4 stop using this ATM.");
   let displayOption = parseInt(prompt().trim());

   while (displayOption !== 1 && displayOption !== 2 && displayOption !== 3 && displayOption !== 4) {
      console.log("I'm sorry, but the option you entered is not valid. Please try again." + "\n" +
      "Enter the word 'balance' to check your current balance." + "\n" +
      "Enter the word 'withdraw' to make a withdrawl." + "\n" +
      "Enter the word 'deposit' to make a deposit."  + "\n" +
      "You may alse enter 'exit' stop using this ATM.");
      displayOption = prompt().trim().toLowerCase();
   }

   switch(displayOption) {
      case 1:
         atm.getBalance();
         console.log("Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
         let balanceResponse = prompt().toLowerCase();
         while (balanceResponse !== 'yes' && balanceResponse !== "exit") {
            console.log("Your response was invalid. Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
            balanceResponse = prompt().trim().toLowerCase();
         }
         if (balanceResponse === "yes") {
            return mainMenu();
         }
         else if (balanceResponse === "exit") {
            return;
         }
      case 2:
         console.log("How much would you like to withdraw?")
         let withdrawAmount = parseInt(prompt());
         while (!Number.isInteger(withdrawAmount)) {
            console.log("The amount you have entered is invalid. Please enter an integer for withdrawl.");
            withdrawAmount = parseInt(prompt());
         }
         while (withdrawAmount > parseInt(atm.balance)) {
            console.log("Insufficient funds.  Please enter a number less than " + atm.balance);
            withdrawAmount = parseInt(prompt());
         } 
         console.log("Thank you. Your new balance is: $" + atm.withdraw(withdrawAmount));
         console.log("Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
         let withdrawResponse = prompt().trim().toLowerCase();
         while (withdrawResponse !== 'yes' && withdrawResponse !== "exit") {
            console.log("Your response was invalid. Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
            withdrawResponse = prompt().trim().toLowerCase();
         }
         if (withdrawResponse === "yes") {
            return mainMenu();
         }
         else if (withdrawResponse === "exit") {
            return;
         }
      case 3:
         console.log("How much would you like to deposit?");
         let depositAmount = parseInt(prompt());
         while (!Number.isInteger(depositAmount)) {
            console.log("The amount you have entered is invalid. Please enter an integer for deposit.");
            depositAmount = parseInt(prompt());
         }
         console.log("Thank you. Your new balance is: $" + atm.deposit(depositAmount));
         console.log("Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
         let depositResponse = prompt().trim().toLowerCase();
         while (depositResponse !== 'yes' && depositResponse !== "exit") {
            console.log("Your response was invalid. Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
            depositResponse = prompt().trim().toLowerCase();
         }
         if (depositResponse === "yes") {
            return mainMenu();
         }
         else if (depositResponse === "exit") {
            return;
         }
      case 4:
      return;
      default:
         return mainMenu();
   }
}

console.log("Thank you, and have a nice day!");

module.exports.depositAmount = depositAmount;
module.exports.withdrawAmount = withdrawAmount;