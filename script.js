"use strict";

// let year = 2023;
// year -= 18;
// console.log(year);

// let celsius = 37;
// celsius *= 1.8;
// celsius += 32;
// console.log(celsius);

// // First Method

// const beforeBankBalance = 999.99;
// const percentages = beforeBankBalance + beforeBankBalance * 0.09;
// const multiplication = percentages * 2;
// const minus = multiplication - 50;
// const roundedString = minus.toFixed(2);
// const afterBankBalance = Number(roundedString);

// console.log(afterBankBalance);

// // Second Method

// const balance = 999.99;
// const percentage = 9;
// const interest = (balance * percentage) / 100;
// const fee = 50;
// const formula = (balance + interest) * 2 - fee;
// const rounded = formula.toFixed(2);
// const finalBalance = Number(rounded);

// console.log(finalBalance);

// const currentBalance = 50;
// const transaction = -50;

// const currentBalance1 = 50;
// const transaction1 = 50;

// const currentBalance2 = 50;
// const transaction2 = -51;
// const comparison2 = currentBalance2 + transaction2;

// const currentBalance3 = 50;
// const transaction3 = -50;
// const comparison3 = currentBalance3 + transaction3;

// console.log(currentBalance >= transaction);
// console.log(currentBalance1 === transaction1);
// console.log(comparison2 >= 0);
// console.log(comparison3 >= 0);

// const a = 546;
// const b = 74;
// const result = a % b === 0;
// console.log(result);

// let country = prompt();

// if (country === "Vatikanas") {
//   alert("Teisingai!");
// } else {
//   alert("Rimtai? Taigi Vatikanas!");
// }

// Task No. 1 / part 1

const a = 2;
const b = 1;

const result = a + b < 4 ? "Below" : "Over";

console.log(result);

const login = "Director";

// Task No. 1 / part 2

const message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "Error";

console.log(message);

// Task No. 2 / part 1

const clientAge = 19;
const legalAge = 20;

if (clientAge >= legalAge) {
  console.log("Your age is legal to continue");
} else {
  console.log("Your age is NOT legal to continue");
}

// Task No. 2 / part 2

const yourName = "Andrejus";
const lettersNumber = yourName.length;

console.log(lettersNumber);

if (lettersNumber > 6) {
  console.log(" Your name is long");
} else {
  console.log("Your name is short");
}

// Task No. 2 / part 3

const yourAge = 19;

if (yourAge > 100 || yourAge < 0) {
  console.log("Invalid age");
} else if (yourAge <= 18) {
  console.log("You are a child");
} else {
  console.log("You are and adult");
}

// Task No. 2 / part 4

const car = "BMW";

if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  console.log("It belongs to VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  console.log("It belongs to BMW Group");
} else {
  console.log("Sorry, this car belongs to nether BMW Group or Vw Group");
}

// Task No. 3 / part 1

const myName = "Andrejus";
const letterNumber = myName.length;

letterNumber > 5
  ? console.log(" Your name is to long")
  : console.log("Your name is to short");

// Task No. 3 / part 2

const myAge = -1;
const needAge = 18;

myAge >= needAge
  ? console.log("You can drive")
  : console.log("You can't drive");

// Task No. 3 / part 3

myAge < 0 || myAge > 120
  ? console.log("Invalide age, try again")
  : myAge >= needAge
  ? console.log("You can drive")
  : console.log("You can't drive");

// Task No. 3 / part 4

const phone = "iPhone";
const isIphoneUser = phone === "iPhone";

console.log(isIphoneUser);

// Task No. 4 / part 1

const mainAge = 13;

if (mainAge >= 14 && mainAge <= 90) {
  console.log("Your age between 14-90");
} else {
  console.log("Please insert correct age");
}

// Task No. 4 / part 2

if (!(mainAge >= 14 && mainAge <= 90)) {
  console.log("Your age is not between 14-90");
} else {
  console.log("Please insert correct age");
}

// Task No. 5 / part 1

const browser = "Chrome";

if (browser === "Edge") {
  console.log("RIP Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Safari"
) {
  console.log("Šios naršykles palaikomos");
} else {
  console.log("Tikimes, kad šis puslapis atrodys puikiai!");
}

// Task No. 5 / part 2

// const v = +prompt("v?", "");
const v = 1;

switch (v) {
  case 0:
    console.log(`Your number - ${v}`);
    break;
  case 1:
    console.log(`Your number is ${v}`);
    break;
  case 2:
  case 3:
    console.log(`Your number - ${v}`);
    break;
  default:
    console.log("Please choose another number");
}

console.log(v);

// Task No. 6 / part 1

const brand = "Mini";

switch (brand) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porsche":
    console.log("It belongs to VW Group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("It belongs to BMW Group");
    break;
  default:
    console.log("Sorry, this car belongs to nether BMW Group or Vw Group");
}

// Task No. 6 / part 2

const userInput = "Onion";

switch (userInput) {
  case "Apple":
  case "Orange":
  case "Pineapple":
  case "Grapefruit":
  case "Lemon":
    console.log("It's a fruit");
    break;
  case "Onion":
  case "Carrot":
  case "Potato":
  case "Tomato":
  case "Pepper":
    console.log("It's a vegetable");
    break;
  default:
    console.log("It's not a fruit or vegetable");
}

// Task No. 6 / part 3

let weekDay = 5;

switch (weekDay) {
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
  case 7:
    weekDay = "Sunday";
    break;
  default:
    weekDay = "There is no such a day of the week";
}

console.log(weekDay);
