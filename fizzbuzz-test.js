"use strict";

// ----------------------------------------------------------------------------------------- PART 1
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";
// ----------------------------------------------------------------------------------------- PART 2
// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";
// ----------------------------------------------------------------------------------------- PART 3
// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".
// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".
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
    const divBy3 = i % 3 === 0;
    const divBy5 = i % 5 === 0;
    const divBy7 = i % 7 === 0;
    const divBy9 = i % 9 === 0;
    const divBy11 = i % 11 === 0;

    divBy7 && divBy5 && divBy3
      ? console.log(FizzBuzzBiff)
      : divBy7 && divBy5
      ? console.log(BuzzBiff)
      : divBy7 && divBy3
      ? console.log(FizzBiff)
      : divBy11
      ? console.log(Bizz)
      : divBy9
      ? console.log(Fuzz)
      : divBy7
      ? console.log(Biff)
      : divBy5
      ? console.log(Buzz)
      : divBy3
      ? console.log(Fizz)
      : console.log(i);
  }
}

testYourSelf(105);
