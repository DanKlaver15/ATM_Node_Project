"use strict";

// Functions for use of the ATM

const account = require("./account");

function getBalance(balance) {
	console.log(balance);
}

function withdraw(amount, balance) {
	return balance - amount;
}

function deposit(amount, balance) {
	return balance + amount;
}

function validatePin(number, pin) {
	if (number === pin) {
		 return pin;
	}
	else {
		 console.log("The PIN you entered is invalid. Please try again.");
	}
}

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;