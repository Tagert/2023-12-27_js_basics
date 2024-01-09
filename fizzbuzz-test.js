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
// const Bizz = "Bizz"; // div: 11
// const Fuzz = "Fuzz"; // div: 9
// const Biff = "Biff"; // div: 7
// const Buzz = "Buzz"; // div: 5
// const Fizz = "Fizz"; // div: 3

// Divisible by (2) numbers
// const BuzzBiff = "BuzzBiff"; // div: 7 && 5
// const FizzBiff = "FizzBiff"; // div: 7 && 3
// const FizzBuzz = "FizzBuzz"; // div: 3 && 5

// Divisible by (3) numbers
// const FizzBuzzBiff = "FizzBuzzBiff"; // div: 7 && 5 && 3

const wordsArr = ["Fizz", "Buzz", "Biff", "Fuzz", "Bizz"];
const divByArr = [3, 5, 7, 9, 11];

function testYourSelf(sequence) {
  //outer loop repeat itself from 1 to the specified sequence.
  for (let i = 1; i <= sequence; i++) {
    let result = "";

    // inner loop repeat itself and check the divisors in the divByArr array
    for (let j = 0; j < divByArr.length; j++) {
      // checks whether the current number i is divisible by the current divisor
      if (i % divByArr[j] === 0) {
        // if true, it adds the corresponding word Fizz + Buzz and so on...
        result += wordsArr[j];
      }
    }
    console.log(result || i); // adds the corresponding word or the number
  }
}

testYourSelf(105);
