"use strict";

// Functions for use of the ATM

const account = require("./account");
const prompt = require("prompt-sync")();

let balance = account.balance;

/*====================================================================*/

function getBalance() {
	console.log("Your balance is: $" + balance);
}

/*====================================================================*/

function withdraw(amount) {
	while (!Number.isInteger(amount)) {
      console.log("The amount you have entered is invalid. Please enter an integer for withdrawl.");
      amount = parseInt(prompt());
   }
   while (amount > parseInt(balance)) {
      console.log("Insufficient funds.  Please enter a number less than " + balance);
      amount = parseInt(prompt());
   }
   balance -= amount;
   console.log("Thank you. Your new balance is: $" + balance);
	return balance;
}

/*====================================================================*/

function deposit(amount) {
	while (!Number.isInteger(amount)) {
      console.log("The amount you have entered is invalid. Please enter an integer for deposit.");
      amount = parseInt(prompt());
   }
   balance += amount;
   console.log("Thank you. Your new balance is: $" + balance);
	return balance;
}

/*====================================================================*/

function validatePin(number) {
	if (number === account.pinNum) {
		 return true;
	}
	else {
		 return false;
	}
}

/*====================================================================*/

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
module.exports.balance = balance;
