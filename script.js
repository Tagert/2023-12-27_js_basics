"use strict";
console.groupCollapsed("if else statement, switch and variables");
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

console.groupEnd();
console.groupCollapsed("functions and arrays");

// Task No. 7 (functions) / part 1

function userName(uName) {
  console.log(uName);
}

userName("Antanas");

// Task No. 7 (functions) / part 2

function randomNumber(min, max) {
  let random = Math.random();
  random = random * (max - min);
  random = random + min;
  random = Math.round(random);
  return random;
}

const randomGen = randomNumber(1, 5);

console.log(randomGen);

// Task No. 7 (functions) / part 3

const firstName = "Petras";
const lastName = "Slekys";

function nameLetterCalc(fName, lName) {
  const fNameLength = fName.length;
  const lNameLength = lName.length;
  const sumLength = fNameLength + lNameLength;
  return sumLength;
}

const calcLength = nameLetterCalc(firstName, lastName);

console.log(calcLength);

// Task No. 7 (functions) / part 4 (assign a number (form 1, 2, 3 ... etc.) to each letter, goal is: when calling a number from an array, it produces a corresponding letter)

const abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function numLetter(num) {
  // const abcNum = [];
  num -= 1;
  const abcNumIndex = abc[num];

  // for (let i = 1; i < abc.length + 1; i++) {
  //   if (true) {
  //     abcNum.push(i);
  //   }
  // }
  return abcNumIndex;
}

console.log(numLetter(1));

// Task No. 7 (functions) / part 5

const numA = 6;
const numB = 11;

function oper(n1, n2, operator) {
  if (operator === "sum") {
    return n1 + n2;
  } else if (operator === "sub") {
    return n1 - n2;
  } else if (operator === "div") {
    return n1 / n2;
  } else if (operator === "multi") {
    return n1 * n2;
  }
}

const summary = oper(numA, numB, "div");

console.log(summary);

// Task No. 7 (functions) / part 6

function random10(min, max) {
  const randomGen = Math.random();
  const form = Math.round(randomGen * (max - min) + min);
  return form;
}

function squareNum(num) {
  const square = Math.pow(num, 2);
  return square;
}

console.log(squareNum(random10(1, 10)));

// Task No. 8 (arrays) / part 1 (simple adding (at beginning) to array)

const arr = [2, 3, 4];
arr.unshift(1);

console.log(arr);

// Task No. 8 (arrays) / part 2 (how many numbers not repeating them self?)

const myArr = [
  1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8, 9, 9, 9, 9, 10,
];

for (let index = 0; index < myArr.length; index++) {
  const myArrayNum1 = myArr[index];

  console.log(myArrayNum1);
}

// another method__

const myArrayElements = [];

for (let i = 0; i < myArr.length; i++) {
  if (!myArrayElements.includes(myArr[i])) {
    myArrayElements.push(myArr[i]);
  }
}

console.log(myArrayElements);
console.log(myArrayElements.length);

// testing Set() functionality

const myArrSet = new Set([
  1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 8, 9, 9, 9, 9, 10,
]);

console.log(myArrSet);

console.groupEnd();

console.groupCollapsed("more arrays and loops (for, while)");
// Task No. 8 (arrays) / part 3 (only positive numbers from array)

const arrChange = [-3, 1, -2, -5, 6, 3, -1, 5, -3];

function keepPositive(arr) {
  const arrNew = [];

  for (let i = 0; i < arrChange.length; i++) {
    if (arrChange[i] > 0) {
      arrNew.push(arrChange[i]);
    }
  }
  return arrNew;
}

console.log(keepPositive(arrChange));

// Task No. 8 (arrays) / part 4 (check if the number of your choice is repeating itself in the array)

const arrRepeat = [1, 2, 3, 4, 3, 5, 1, 6, 7, 3, 8, 9];

function doesRepeat(arr, num) {
  const repeatItSelf = arr.indexOf(num) !== arr.lastIndexOf(num);

  if (repeatItSelf) {
    return console.log(
      `The number ${num} is repeating. Please check your array.`
    );
  } else {
    return console.log(`The number ${num} does not repeat.`);
  }
  console.log(num);
}

doesRepeat(arrRepeat, 5);

// Task No. 8 (arrays) / part 5 (transform the numbers in array, if number is even then divide it by 2, if number is odd then multiply it by 3, return a transformed array)

const arrBefore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function multiplyArr(arr) {
  const transformedArr = [];

  for (let i = 0; i < arrBefore.length; i++) {
    if (arrBefore[i] % 2 === 0) {
      transformedArr.push(arrBefore[i] / 2);
    } else {
      transformedArr.push(arrBefore[i] * 3);
    }
    console.log(arrBefore[i]);
  }

  return transformedArr;
}

console.log(multiplyArr(arrBefore));

// Task No. 9 (for loop) / part 1 and 2 (combined) (repeat you name (10 times) with - for loop)

const tellYourName = "Andrew";
const howManyRepeats = 10;

function sayYourName() {
  return console.log(`Your name is ${tellYourName}`);
}

// for (let i = 0; i < howManyRepeats; i++) {
//   sayYourName();
// }

// Task No. 9 (for loop) / part 2 (number of and next to it your name)

const yourNameIs = "Andrew";
const manyRepeats = 10;

// function whatYourName() {
//   return console.log(`Your name is ${yourNameIs}`);
// }

const sentenceWithName = `Your name is ${yourNameIs}`;

for (let i = 1; i <= manyRepeats; i++) {
  let count = i;
  console.log(`${sentenceWithName} and it's ${count} loop.`);
}

// Task No. 10 (for loop) / part 3 (count down 10 to 1)

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Task No. 10 (while loop) part 1 (3 times your name)

const nameWhile = "Andrews";
let index = 0;

while (index < 3) {
  console.log(nameWhile);
  index++;
}

// Task No. 10 (while loop) part 2 (do while loop, how many times in one loop repeat your name)

let i = 0;

let combo = "";
const nameDo = "Andrews";
const times = 5;

do {
  combo += nameDo;
  console.log(combo);
  i++;
} while (i < times);

// Task No. 11 (loops and conditions, practice ) part 1 (loop from 1 to 5)

for (let i = 1; i <= 5; i++) {
  // console.log(i);
}

// Task No. 11 (loops and conditions, practice ) part 2 (loop - sum from 1 to 5)

let indexx = 1;
let sum = 0;

while (indexx <= 5) {
  sum = sum + indexx;
  indexx++;
}

console.log(sum);

// Task No. 11 (loops and conditions, practice ) part 3 (output - even numbers)

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task No. 11 (loops and conditions, practice ) part 4 (count down from 10 to 1)

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Task No. 11 (loops and conditions, practice ) part 5 (how many numbers are divisible by 3)

// while loop

let indexW = 1;

while (indexW <= 20) {
  if (indexW % 3 === 0) {
    console.log(indexW);
  }
  indexW++;
}

// for loop

let howMany = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    howMany++;
  }
}
console.log(`We can detect ${howMany} numbers, that are divisible by 3`);

// Task No. 11 (loops and conditions, practice ) part 6 (find the biggest number from array)

const arrBiggestNumber = [
  1, 3, 5, 4, 8, 54, 32, 12, 3, 8, 97, 34, 65, 56, 42, 67, 85, 1, 71,
];

let storeNumber = arrBiggestNumber[0];

for (let i = 0; i < arrBiggestNumber.length; i++) {
  if (arrBiggestNumber[i] > storeNumber) {
    storeNumber = arrBiggestNumber[i];
  }
}

console.log(storeNumber);

// Task No. 12 (loops and conditions, practice ) part 7 (output 15 numbers which divide by variable)

const providedNum = 50;

let countsUpTo = 15;

function dividing(num) {
  for (let i = 0; i <= countsUpTo; i++) {
    if (num % i === 0) {
      console.log(
        `Number witch you can divide - ${i} by your chosen number ${num}`
      );
    }
  }
}

dividing(providedNum);

// Task No. 12 (loops and conditions, practice ) part 8 (select all odd numbers from the array and output those in a new array)

const yourArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 20, 25, 30, 33, 36, 39, 48, 73,
  79, 81,
];

const oddNumbers = [];

function oddArr(arr) {
  for (let i = 0; i < yourArr.length; i++) {
    if (yourArr[i] % 2 !== 0) {
      oddNumbers.push(yourArr[i]);
    }
  }
  return oddNumbers;
}

console.log(oddArr(yourArr));

// Task No. 12 (loops and conditions, practice ) part 9 (need to find prime number from following sequence 1-20 )

const numTill = 20;
let zero = 0;

function primeNumber(num) {
  for (let i = 0; i <= num; i++) {
    if (i === 1) {
    } else if (i === 2 || i === 3) {
      console.log(i);
    } else if (i % 2 !== 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

primeNumber(numTill);

// Another method

for (let i = 1; i <= 20; i++) {
  let isPrime = true;
  if (i > 1) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

console.groupEnd();

console.groupCollapsed("expression and arrow functions");

// Task No. 12 (loops and conditions, practice ) part 10 (Fibonacci number)

// first method

const howManySequences = 10;

function fiboGen(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;

  for (let i = 0; i <= num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(`sequence - ${sum}`);
  }
  return sum;
}

console.log(
  `The last number of Fibonacci sequence is ${fiboGen(howManySequences)}`
);

// second method with - array

const arrFab = [0];

function Genfibonacci(num) {
  let nextTerm = 1;

  for (let i = 0; i < num - 1; i++) {
    arrFab.push(nextTerm);
    nextTerm = nextTerm + arrFab[i];
  }
  return arrFab;
}

const funGen = Genfibonacci(howManySequences);

console.log(`Array - ${funGen}`);

// Task No. 13 (additional tasks, practice ) part 1a (array - add, remove, replace)

const arrAdditional = [
  4,
  5,
  -5556,
  155,
  640,
  "15x",
  6789,
  -5564,
  478,
  654,
  "obuolys",
  789,
  -51,
  55,
  -222,
  0,
  -357,
  -56,
  "trylika",
  444,
  7778,
  4154,
  4751,
];

// task 1
arrAdditional.shift();
// task 2
arrAdditional.pop();
// task 3
let indexToRemove = 10;
arrAdditional.splice(indexToRemove, 1);
// task 4
let indexToRemove2 = 18;
arrAdditional.splice(indexToRemove2, 1);
// task 5
let indexToRemove3 = 1;
arrAdditional.splice(indexToRemove3, 1);
// task 6
let indexToRemove4 = 6;
arrAdditional.splice(indexToRemove4, 2);
// task 7
let indexToRemove5 = 10;
arrAdditional.splice(indexToRemove5, 3);
// task 8
arrAdditional.splice(2, 1, 888);
// task 9
arrAdditional.splice(9, 1, 33, 789, 6543);
// task 10
arrAdditional.pop();
arrAdditional.push(321, 654, 987);
// task 11
arrAdditional.splice(1, 0, 11);
// task 12
arrAdditional.splice(13, 0, 1);
// task 13
arrAdditional.splice(18, 0, -1);
// task 14
arrAdditional.unshift(1, 2, 3);
// task 15
arrAdditional.push(-333, -321, -312);
// task 16
arrAdditional.splice(13, 0, 0);
// task 17
arrAdditional.shift();
// task 18
arrAdditional.pop();
// task 19
arrAdditional.unshift("start");
// task 20
arrAdditional.push("end");
console.log(arrAdditional);

// Task No. 13 (additional tasks, practice ) part 12 (array - add, remove, replace (without modification))

// task 2.1
const slice1 = arrAdditional.slice(0, 1);
// task 2.2
const slice2 = arrAdditional.slice(-1);
// task 2.3
const slice3 = arrAdditional.slice(1, 2);
// task 2.4
const slice4 = arrAdditional.slice(-2, -1);
// task 2.5
const slice5 = arrAdditional.slice(7, 8);
// task 2.6
const slice6 = arrAdditional.slice(18, 19);
// task 2.7
const slice7 = arrAdditional.slice(13, 14);
// task 2.8
const slice8 = arrAdditional.slice(0, 3);
// task 2.9
const slice9 = arrAdditional.slice(-3);
// task 2.10
const slice10 = arrAdditional.slice(0, 10);
// task 2.11
const slice11 = arrAdditional.slice(-10, 27);
// task 2.12
const slice12 = arrAdditional.slice(2, 8);
// task 2.13
const slice13 = arrAdditional.slice(-5, 27);
// task 2.14
const slice14 = arrAdditional.slice(10, 19);
// task 2.15
const slice15 = arrAdditional.slice(-17, -8);
// task 2.16
const slice16 = arrAdditional.slice(1, 27);
// task 2.17
const slice17 = arrAdditional.slice(-27, -1);
// task 2.18
const slice18 = arrAdditional.slice(5, 27);
// task 2.19
const slice19 = arrAdditional.slice(-27, -5);
// task 2.20
const slice20 = arrAdditional.slice(1, 13);
// task 2.21
const slice21 = arrAdditional.slice(-12, 27);
// task 2.22
const slice22 = arrAdditional.slice(1, 26);
// task 2.23
const slice23 = arrAdditional.slice(5, 24);
// task 2.24
const slice24 = arrAdditional.slice(1, 20);
// task 2.25
const slice25 = arrAdditional.slice(7, 26);
// task 2.26
const slice26 = arrAdditional.slice(9, 15);
// task 2.27
const slice27 = arrAdditional.slice(11, 20);
// task 2.28
const slice28 = arrAdditional.slice(8, 21);
// task 2.29
const slice29 = arrAdditional.slice(0, 5).concat(arrAdditional.slice(-6, 27));
// task 2.30
const slice30 = arrAdditional.slice(2, 4).concat(arrAdditional.slice(14, 16));
console.log(slice30); // .concat is merging two arrays and return a new array

// Task No. 13 (additional tasks, practice ) part 2 (Fizz = if divide by 3, Buzz = if divide by 5 and FizzBuzz = combined, replacing numbers)

// first method (data in array)

const fi = "Fizz";
const bu = "Buzz";
const fiBu = "FizzBuzz";
const bi = "Biff";
const fiBi = "FizzBiff";
const buBi = "BuzzBiff";
const fiBuBiff = "FizzBuzzBiff";

function fb(sequence) {
  const arrFizzBuzz = [];

  for (let i = 1; i <= sequence; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrFizzBuzz.push(fiBu);
    } else if (i % 5 === 0) {
      arrFizzBuzz.push(bu);
    } else if (i % 3 === 0) {
      arrFizzBuzz.push(fi);
    } else {
      arrFizzBuzz.push(i);
    }
  }
  return arrFizzBuzz;
}

console.log(fb(100));

// second method (data in c.l output)

function fiBuzz(sequence) {
  for (let i = 1; i <= sequence; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(fiBu);
    } else if (i % 5 === 0) {
      console.log(bu);
    } else if (i % 3 === 0) {
      console.log(fi);
    } else {
      console.log(i);
    }
  }
}

fiBuzz(100);

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";
// --------------------------------------------------------
// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".
// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".

console.groupEnd();

console.groupCollapsed("more function practice and updated fizzBuzz function");

// Task No. 14 (expressions and arrow functions ) part 1 (output your name with arrow function)

const myNameFunc = (yourName) => console.log(yourName);

myNameFunc("Andrew");

// Task No. 14 (expressions and arrow functions ) part 2 (random generator from 1 to 5)

const myRandomNumber = (min, max) => {
  const rand = Math.random();
  const randNum = Math.round(rand * (max - min) + min);
  return randNum;
};

console.log(myRandomNumber(1, 5));

// Task No. 14 (expressions and arrow functions ) part 3 (strings of name and last name words sum)

const nameSum = (yourName, lastName) => {
  const n1 = yourName.length;
  const n2 = lastName.length;
  return n1 + n2;
};

console.log(nameSum("Petras", "Slekys"));

// Task No. 14 (expressions and arrow functions ) part 4 (assign a numerical value to the letter 'abd' based on position in the alphabet)

const abcNumerical = (num) => {
  const transformNum = abc[num - 1];
  return transformNum;
};

console.log(abcNumerical(1));

// Task No. 14 (expressions and arrow functions ) part 5 (output = sum, sub, dvi, multi)

const operatorInUse = "dvi";
const number1 = 332;
const number2 = 201;

const calculator = (n1, n2, operator) => {
  if (operator === "sum") {
    return Math.n1 + n2;
  } else if (operator === "sub") {
    return n1 - n2;
  } else if (operator === "dvi") {
    return n1 / n2;
  } else if (operator === "multi") {
    return n1 * n2;
  } else {
    return console.log(
      `Occurred error, please use one of operators: "sum", "sub", "dvi", "multi".`
    );
  }
};

console.log(calculator(number1, number2, operatorInUse));

// Task No. 14 (expressions and arrow functions ) part 6 (2 functions: first create random number from 1 to 10, second function randomly generated a number and calculates its square)

const yourRandomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const youSquareNum = (randomNum) => {
  return Math.pow(randomNum, 2);
};

console.log(youSquareNum(yourRandomNum(1, 10)));

// Task No. 15 (more practice with functions) part 1 (convert km/h to m/s and vice versa)

const kmH = 75; // kilometers per hour
const mS = 15; // meters per second

function convertKMHtoMS(num) {
  const calc = (num * 1000) / (60 * 60);
  const converter = +calc.toFixed(2);

  return `${converter} m/s`;
}

function convertMStoKMH(num) {
  const calc = num * 3.6;
  return `${calc} km/h`;
}

console.log(convertKMHtoMS(kmH));
console.log(convertMStoKMH(mS));

// Task No. 15 (more practice with functions) part 2 (compare numbers and output the bigger one, if numbers is equal then output a string - "equal", if one of comparing argument is not a number output a string - "Error: most arguments must be numbers")

// Numbers to compare:
const firstArgument = 3;
const secondArgument = 2;
// ---------------------------
const compareNumber = (num1, num2) => {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return "Error: most arguments must be numbers";
  }

  if (num1 === num2) {
    return `When comparing the numbers ${num1} and ${num2} the result is equal`;
  }

  if (num1 > num2) {
    return num1;
  }

  return num2;
};

// one of the ways = can be used as ternary method --> (num1 > num2 ? num1 : num 2);

console.log(compareNumber(firstArgument, secondArgument));

// Task No. 15 (more practice with functions) part 3 (provide a boolean output for leap years based on user input for any year -> return true if it is a leap year, otherwise return false.)

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(600));

// Task No. 15 (more practice with functions) part 4 (biggest number in array)

const mainArr = [-1, -3, -2, -5, -4];

const findMaxInArray = (arr) => {
  let findMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > findMax) {
      findMax = arr[i];
    }
  }
  return findMax;
};

console.log(findMaxInArray(mainArr));

// Task No. 15 (more practice with functions) part 5 (sum all array elements)

const sumArr = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let numTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    numTotal += arr[i];
  }
  return numTotal;
};

console.log(sumArray(sumArr));

// Task No. 15 (more practice with functions) part 6 (compare to arrays and if they identical return true and if they have differences return false)

// first method (convert -> toString() it have imperfection, because it's return true when comparing string "1" with number 1)

const arr1 = [1, 2, 3];
const arr2 = [1, 2, "3"];
const arr1String = arr1.toString();
const arr2String = arr2.toString();

const areArrayEqual = (arr1, arr2) => {
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
};

console.log(areArrayEqual(arr1String, arr2String));

// second method (check length and index in array)

const areArrayEqual2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(areArrayEqual2(arr1, arr2));

console.groupEnd();
console.groupCollapsed("function callout using it another function");

// Task No. 15 (more practice with functions) part 7 (create array with revers order of array elements)

const reverseString = (string) => {
  let stringReverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
  }
  return stringReverse;
};

console.log(reverseString("Please help me out"));

// Task No. 15 (more practice with functions) part 8 (check string if it palindrome)
const wordChecked = "savas";

const isPalindrome = (string) => {
  let stringReverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
    // console.log(string[i]);
    // console.log(i);
    // console.log(stringReverse);
  }
  if (stringReverse === string) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(wordChecked));

// Task No. 15 (more practice with functions) part 8 (pyramid of numbers)

const pyramidEndNum = 20;

//task method - complete

// const printPyramid = (numEnd) => {
//   let inNum = 0;
//   for (let i = 1; i <= numEnd; i++) {
//     inNum = i;
//     let inNumString = inNum.toString();
//     for (let j = 1; j < i; j++) {
//       inNumString += i;
//     }
//     console.log(inNumString);
//   }
// };

// pyramid method, when numbers bigger than 9

const printPyramid = (numEnd) => {
  let inNum = 0;
  for (let i = 1; i <= numEnd; i++) {
    inNum = i;
    let inNumString = inNum.toString();
    for (let j = 1; j < i; j++) {
      if (i < 10) {
        inNumString += i;
      }
      inNumString += i;
    }
    console.log(inNumString);
  }
};

printPyramid(pyramidEndNum);

console.groupEnd();

console.groupCollapsed("string, number and boolean methods");

// Task No. 16 (string, numbers and booleans) part 1 (convert text to uppercase)

const textToUpperCase = "Labas";
const convertToUpperCase = textToUpperCase.toUpperCase();

console.log(convertToUpperCase);

// Task No. 16 (string, numbers and booleans) part 2 (extract symbols from string)

const textString = "Sveikas pasauli";
const extractSubstring = textString.slice(2, 7);

console.log(extractSubstring);

// Task No. 16 (string, numbers and booleans) part 3 (first letter of the word need to convert to uppercase)

const textCapitalize = "labas rytas, pasauli!";

const capitalizeFirstLetter = (string) => {
  const wordsSplit = string.split(" ");
  let newString = ""; // empty string, it will fill with a new value

  for (let i = 0; i < wordsSplit.length; i++) {
    const word = wordsSplit[i]; // string split to a separate words
    if (word) {
      newString += word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (i < wordsSplit.length - 1) {
      newString += " ";
    }
  }

  return newString;
};

console.log(capitalizeFirstLetter(textCapitalize));

// Task No. 16 (string, numbers and booleans) part 4 (change a word from a string to another word)
const censor = "badword";
const censorString = "This is a badword and another badword";

const censorStringSplit = censorString.split(" ");
const censorCurseWords = (string, censor) => {
  let newCensorString = "";

  for (let i = 0; i < string.length; i++) {
    const word = censorStringSplit[i];

    if (word.includes(censor)) {
      newCensorString += word.replace(censor, " ****");
    }

    if (i < censorStringSplit.length - 1) {
      newCensorString += " ";
    }

    if (i < censorStringSplit.length - 1) {
      newCensorString += word;
    }
  }
  return newCensorString;
};

console.log(censorCurseWords(censorStringSplit, censor));

// Task No. 16 (string, numbers and booleans) part 5 (check is there any number after dot (integers))

const milkPrice = 3.41;

if (Number.isInteger(milkPrice)) {
  console.log("No need to have cents");
} else {
  console.log("Don't forget to take your cents");
}

console.log(milkPrice.toFixed(2));

// Task No. 16 (string, numbers and booleans) part 6 (find a biggest number)
const numbersArr = [1, 2, 4, 6, 9, 10, 15];

const findMax = (numbers) => Math.max(...numbers);

console.log(findMax(numbersArr));

// Task No. 16 (string, numbers and booleans) part 7 (simple boolean practice)

const isLegalAge = true;

console.log(isLegalAge);
console.log(isLegalAge.toString());

console.groupEnd();
