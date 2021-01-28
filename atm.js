"use strict";

// Functions for use of the ATM

const account = require("./account");

function getBalance() {
	console.log("Your balance is: $" + account.balance);
}

function withdraw(amount) {
	return account.balance - amount;
}

function deposit(amount) {
	return account.balance + amount;
}

function validatePin(number) {
	if (number === account.pinNum) {
		 return true;
	}
	else {
		 return false;
	}
}

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
// module.exports.account.balance = balance;