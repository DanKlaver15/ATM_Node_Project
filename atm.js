"use strict";

// Functions for use of the ATM

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