"use strict";

// 1. Skaičius nuo 1 iki 100.

// ----------------------------------------------------------------------------------------- PRACTICAL ASSIGNMENT

// Divisible by (1) number
const Bizz = "Bizz"; // div: 11
const Fuzz = "Fuzz"; // div: 9
const Biff = "Biff"; // div: 7
const Buzz = "Buzz"; // div: 5
const Fizz = "Fizz"; // div: 3

// Divisible by (2) numbers
const BuzzBiff = "BuzzBiff"; // div: 7 && 5
const FizzBiff = "FizzBiff"; // div: 7 && 3
const FizzBuzz = "FizzBuzz"; // div: 3 && 5

// Divisible by (3) numbers
const FizzBuzzBiff = "FizzBuzzBiff"; // div: 7 && 5 && 3

function testYourSelf(sequence) {
  for (let i = 1; i <= sequence; i++) {
    // Operators - (remainder (%))
    const divBy3 = i % 3 === 0;
    const divBy5 = i % 5 === 0;
    const divBy7 = i % 7 === 0;
    const divBy9 = i % 9 === 0;
    const divBy11 = i % 11 === 0;

    // 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";
    if (divBy7 && divBy5 && divBy3) {
      console.log(FizzBuzzBiff);
      // 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
    } else if (divBy7 && divBy5) {
      console.log(BuzzBiff);
      // 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
    } else if (divBy7 && divBy3) {
      console.log(FizzBiff);
      // 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";
    } else if (divBy3 && divBy5) {
      console.log(FizzBuzz);
      // 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".
    } else if (divBy11) {
      console.log(Bizz);
      // 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".
    } else if (divBy9) {
      console.log(Fuzz);
      // 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
    } else if (divBy7) {
      console.log(Biff);
      // 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
    } else if (divBy5) {
      console.log(Buzz);
      // 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
    } else if (divBy3) {
      console.log(Fizz);
    } else {
      console.log(i);
    }
  }
}

testYourSelf(105);

// (divBy11 && divBy9 && divBy7 && divBy5 && divBy3)
// console.log("BizzFuzzBiffBuzzFizz")

// (divBy11 && divBy9 && divBy7 && divBy5)
// console.log("BizzFuzzBiffBuzz")

// (divBy11 && divBy9 && divBy7)
// console.log("BizzFuzzBiff")

// (divBy11 && divBy9)
// console.log("BizzFuzz")
