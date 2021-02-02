"use strict";

// Functions for use of the ATM

const account = require("./account");
const prompt = require("prompt-sync")();

let balance = parseFloat(account.balance);

/*====================================================================*/

function getBalance() {
	console.log("Your balance is: $" + balance.toFixed(2));
}

/*====================================================================*/

function withdraw(amount) {
   while (notANumber(amount)) {
      console.log("The amount you have entered is invalid. Please enter a number for withdrawl.");
      amount = prompt();
   }

   while (amount > balance) {
      console.log("Insufficient funds.  Please enter a number less than " + balance.toFixed(2));
      amount = prompt();
      while (notANumber(amount)) {
         console.log("The amount you have entered is invalid. Please enter a number for withdrawl.");
         amount = prompt();
      }
   }

   balance -= parseFloat(amount);
   console.log("Thank you. Your new balance is: $" + balance.toFixed(2));
	return balance;
}

/*====================================================================*/

function deposit(amount) {
	while (notANumber(amount)) {
      console.log("The amount you have entered is invalid. Please enter a number for deposit.");
      amount = prompt();
   }
   balance += parseFloat(amount);
   console.log("Thank you. Your new balance is: $" + balance.toFixed(2));
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

function notANumber (amount) {
   let regex = new RegExp(/^[0-9]+\.*[0-9]*$/);
   if (Number.isNaN(amount) && !regex.test(amount)) {
      return true;
   }
   else if (!regex.test(amount)) {
      return true;
   }
   else {
      return false;
   }
}

/*======================================================================*/

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
module.exports.balance = balance;
