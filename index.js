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
   "You may alse enter the number 4 to stop using this ATM.");
   let displayOption = parseInt(prompt().trim());
   while (displayOption !== 1 && displayOption !== 2 && displayOption !== 3 && displayOption !== 4) {
      console.log("I'm sorry, but the option you entered is not valid. Please try again." + "\n" +
      "Enter the number 1 to check your current balance." + "\n" +
      "Enter the number 2 to make a withdrawl." + "\n" +
      "Enter the number 3 to make a deposit."  + "\n" +
      "You may alse enter the number 4 to stop using this ATM.");
      displayOption = parseInt(prompt().trim().toLowerCase());
   }

   switch(displayOption) {
      case 1:
         mainMenuBalance();
         break;
      case 2:
         mainMenuWithdraw();
         break;
      case 3:
         mainMenuDeposit();
         break;
      case 4:
         return;
      default:
         return mainMenu();
   }
}

console.log("Thank you, and have a nice day!");

/*====================================================================*/

function mainMenuBalance() {
   atm.getBalance();
   menuReturn();
}

/*====================================================================*/

function mainMenuWithdraw() {
   console.log("How much would you like to withdraw?")
   let withdrawAmount = prompt();
   atm.withdraw(withdrawAmount);
   module.exports.withdrawAmount = withdrawAmount;
   menuReturn();
}

/*====================================================================*/

function mainMenuDeposit() {
   console.log("How much would you like to deposit?");
   let depositAmount = prompt();
   atm.deposit(depositAmount);
   module.exports.depositAmount = depositAmount;
   menuReturn();
}

/*====================================================================*/

function menuReturn() {
   console.log("Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
   let response = prompt().trim().toLowerCase();
   while (response !== 'yes' && response !== "exit") {
      console.log("Your response was invalid. Would you like to return to the main menu? Please enter 'yes' to do so, otherwise enter 'exit' if you are finished using this ATM");
      response = prompt().trim().toLowerCase();
   }
   if (response === "yes") {
      return mainMenu();
   }
   else if (response === "exit") {
      return;
   }
}
