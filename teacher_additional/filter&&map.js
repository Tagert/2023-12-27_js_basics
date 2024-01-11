"use strict";

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
//----------------------------------------------------------------

const arr = [
  "start",
  2,
  3,
  5,
  11,
  155,
  888,
  "15x",
  6789,
  -5564,
  "obuolys",
  -51,
  55,
  0,
  33,
  789,
  6543,
  1,
  "trylika",
  444,
  321,
  654,
  -1,
  987,
  -333,
  -321,
  "end",
];
console.groupCollapsed("3.1 - 3.9");
// 3.1. Gauti tik teigiamus skaičius.
const filteredArr1 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 0) {
    return true;
  }
});
console.log(filteredArr1);
// 3.2. Gauti tik neigiamus skaičius.
const filteredArr2 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 0) {
    return true;
  }
});
console.log(filteredArr2);
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
const filteredArr3 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 2 === 0) {
    return true;
  }
});
console.log(filteredArr3);
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
const filteredArr4 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 3 === 0) {
    return true;
  }
});
console.log(filteredArr4);
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
const filteredArr5 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 5 === 0) {
    return true;
  }
});
console.log(filteredArr5);
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
const filteredArr6 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 11 === 0) {
    return true;
  }
});
console.log(filteredArr6);
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
const filteredArr7 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 31 === 0) {
    return true;
  }
});
console.log(filteredArr7);
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
const filteredArr8 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 2 === 0 && num % 3 === 0) {
    return true;
  }
});
console.log(filteredArr8);
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
const filteredArr9 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 3 === 0 && num % 7 === 0) {
    return true;
  }
});
console.log(filteredArr9);

console.groupEnd();
console.groupCollapsed("3.10 - 3.19");
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
const filteredArr10 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num % 5 === 0 && num % 9 === 0 && num !== 0) {
    return true; // (arr[i] < 0) {"empty array"}
  }
});
console.log(filteredArr10);

const checkType1 = (expression) => {
  if (expression.length === 0) {
    return "In array there is no such a number";
  } else {
    return expression;
  }
};
console.log(checkType1(filteredArr10));

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
const filteredArr11 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 5 === 0 && num % 11 === 0) {
    return true;
  }
});
console.log(filteredArr11);
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
const filteredArr12 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 5 === 0 && num % 2 === 0 && num % 12 === 0) {
    return true; // (arr[i] < 0) {"empty array"}
  }
});
console.log(filteredArr12);

const checkType2 = (expression) => {
  if (expression.length === 0) {
    return "In array there is no such a number";
  } else if (expression[0] === 0) {
    return "Your number is zero, try again";
  } else {
    return expression;
  }
};
console.log(checkType2(filteredArr12));

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
const filteredArr13 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return true;
  }
});
console.log(filteredArr13);
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
const filteredArr14 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 3 === 0 || num % 5 === 0) {
    return true;
  }
});
console.log(filteredArr14);
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
const filteredArr15 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 5 === 0 || num % 6 === 0) {
    return true;
  }
});
console.log(filteredArr15);
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
const filteredArr16 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 7 === 0 || num % 8 === 0) {
    return true;
  }
});
console.log(filteredArr16);
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
const filteredArr17 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num % 9 === 0 || num % 13 === 0) {
    return true;
  }
});
console.log(filteredArr17);
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
const filteredArr18 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if ((num % 2 === 0 && num % 3 === 0) || num % 5 === 0) {
    return true;
  }
});
console.log(filteredArr18);
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
const filteredArr19 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if ((num % 5 === 0 && num % 7 === 0) || num % 9 === 0) {
    return true;
  }
});
console.log(filteredArr19);

console.groupEnd();
console.groupCollapsed("3.20 - 3.29");
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
const filteredArr20 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if ((num % 7 === 0 && num % 8 === 0) || num % 11 === 0) {
    return true;
  }
});
console.log(filteredArr20);
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
const filteredArr21 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num === 0) {
    return false;
  } else if ((num % 9 === 0 && num % 12 === 0) || num % 13 === 0) {
    return true;
  }
});
console.log(filteredArr21);
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
const filteredArr22 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 100) {
    return true;
  }
});
console.log(filteredArr22);
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
const filteredArr23 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 555) {
    return true;
  }
});
console.log(filteredArr23);
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
const filteredArr24 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num >= 888) {
    return true;
  }
});
console.log(filteredArr24);
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
const filteredArr25 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num >= 6789) {
    return true;
  }
});
console.log(filteredArr25);
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
const filteredArr26 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 50) {
    return true;
  }
});
console.log(filteredArr26);
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
const filteredArr27 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 1000) {
    return true;
  }
});
console.log(filteredArr27);
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
const filteredArr28 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num <= -1) {
    return true;
  }
});
console.log(filteredArr28);
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
const filteredArr29 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num <= -5564) {
    return true;
  }
});
console.log(filteredArr29);

console.groupEnd();
console.groupCollapsed("3.30 - 3.39");
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
const filteredArr30 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 1000 && num > 500) {
    return true;
  }
});
console.log(filteredArr30);
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
const filteredArr31 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 100 && num > 0) {
    return true;
  }
});
console.log(filteredArr31);
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
const filteredArr32 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 0 && num > -50) {
    return true;
  }
});
console.log(filteredArr32);
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
const filteredArr33 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num <= 0 && num > -100) {
    return true;
  }
});
console.log(filteredArr33);
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
const filteredArr34 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num >= 0 && num < 55) {
    return true;
  }
});
console.log(filteredArr34);
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
const filteredArr35 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num >= 444 && num <= 654) {
    return true;
  }
});
console.log(filteredArr35);
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
const filteredArr36 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 0 || num === 0) {
    return false;
  } else if (num % 2 === 0) {
    return true;
  }
});
console.log(filteredArr36);
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
const filteredArr37 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 0 || num === 0) {
    return false;
  } else if (num % 3 === 0) {
    return true;
  }
});
console.log(filteredArr37);
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
const filteredArr38 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 0 || num === 0) {
    return false;
  } else if (num % 4 === 0) {
    return true;
  }
});
console.log(filteredArr38);
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
const filteredArr39 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 0 || num === 0) {
    return false;
  } else if (num % 111 === 0) {
    return true;
  }
});
console.log(filteredArr39);

console.groupEnd();
console.groupCollapsed("3.40 - 3.50");
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
const filteredArr40 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 500 && num % 2 === 0) {
    return true;
  }
});
console.log(filteredArr40);
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
const filteredArr41 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 1000 && num % 3 === 0) {
    return true;
  }
});
console.log(filteredArr41);
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
const filteredArr42 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 1000 && num % 9 === 0 && num !== 0) {
    return true;
  }
});
console.log(filteredArr42);
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
const filteredArr43 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 500 && num % 2 === 0 && num !== 0) {
    return true;
  }
});
console.log(filteredArr43);
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
const filteredArr44 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num >= 33 && num % 3 === 0) {
    return true;
  }
});
console.log(filteredArr44);
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
const filteredArr45 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num >= 444 && num % 12 === 0) {
    return true;
  }
});
console.log(filteredArr45);
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
const filteredArr46 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num <= 155 && num % 5 === 0 && num !== 0) {
    return true;
  }
});
console.log(filteredArr46);
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
const filteredArr47 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num <= -333 && num % 9 === 0) {
    return true;
  }
});
console.log(filteredArr47);
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
const filteredArr48 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 100 && num < 500 && num % 5 === 0) {
    return true;
  }
});
console.log(filteredArr48);
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
const filteredArr49 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num >= 888 && num <= 1000 && num % 2 === 0) {
    return true;
  }
});
console.log(filteredArr49);
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
const filteredArr50 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num <= 888 && num >= -333 && num % 3 === 0 && num !== 0) {
    return true;
  }
});
console.log(filteredArr50);

console.groupEnd();
console.groupCollapsed("3.51 - 3.59");

// 3.51. Gauti tik skaičius.
const filteredArr51 = arr.filter((num) => {
  if (typeof num !== "string") {
    return true;
  }
});
console.log(filteredArr51);
// 3.52. Gauti tik tekstus (string).
const filteredArr52 = arr.filter((num) => {
  if (typeof num === "string") {
    return true;
  }
});
console.log(filteredArr52);
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
const filteredArr53 = arr.filter(
  (arr) => typeof arr === "string" && arr.length > 5
);
console.log(filteredArr53);
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
const filteredArr54 = arr.filter(
  (arr) => typeof arr === "string" && arr.length <= 5
);
console.log(filteredArr54);
// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
const filteredArr55 = arr.filter(
  (arr) => typeof arr === "string" && arr.length < 7
);
console.log(filteredArr55);
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
const letter1 = "t";
const filteredArr56 = arr.filter(
  (arr) => typeof arr === "string" && arr.includes(letter1)
);
console.log(filteredArr56);
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
const filteredArr57 = arr.filter(
  (arr) => typeof arr === "string" && arr.includes("y")
);
console.log(filteredArr57);
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
const filteredArr58 = arr.filter(
  (arr) => typeof arr === "string" && (arr.includes("a") || arr.includes("e"))
);
console.log(filteredArr58);
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
const filteredArr59 = arr.filter(
  (arr) => typeof arr === "string" && arr.includes("t") && arr.includes("i")
);
console.log(filteredArr59);
console.groupEnd();
console.groupCollapsed("3.60 - 3.69");
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
const filteredArr60 = arr.filter(
  (arr) => typeof arr === "string" && arr.includes("t") && !arr.includes("k")
);
console.log(filteredArr60);
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
const filteredArr61 = arr.filter(
  (arr) => typeof arr === "string" && arr.includes("a") && !arr.includes("s")
);
console.log(filteredArr61);
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let filteredArr62 = arr.filter((item) => {
  if (typeof item === "string") {
    let letterCount = 0;

    for (let i = 0; i < item.length; i++) {
      let letter = item[i];

      if (letter === "t") {
        letterCount++;
      }
    }
    return letterCount > 1;
  }
});
console.log(filteredArr62);
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
const filteredArr63 = arr.filter(
  (arr) => typeof arr === "string" && arr.includes("st")
);
console.log(filteredArr63);
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
const filteredArr64 = arr.filter(
  (arr) => typeof arr === "string" && arr.includes("nd")
);
console.log(filteredArr64);
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
const filteredArr65 = arr.filter(
  (arr) => typeof arr === "string" && !arr.includes("s")
);
console.log(filteredArr65);
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
const filteredArr66 = arr.filter(
  (arr) => typeof arr === "string" && !arr.includes("t")
);
console.log(filteredArr66);
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
const filteredArr67 = arr.filter(
  (arr) => typeof arr === "string" && !arr.includes("r") && !arr.includes("l")
);
console.log(filteredArr67);
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
const filteredArr68 = arr.filter(
  (arr) => typeof arr === "string" && !isNaN(arr[0])
);
console.log(filteredArr68);
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
const filteredArr69 = arr.filter(
  (arr) => typeof arr === "string" && arr.startsWith("s")
);
console.log(filteredArr69);
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
console.groupEnd();
console.groupCollapsed("3.70 - 3.80");
const filteredArr70 = arr.filter(
  (arr) => typeof arr === "string" && arr.startsWith("o")
);
console.log(filteredArr70);
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.
const filteredArr71 = arr.filter(
  (arr) => typeof arr === "string" && arr.endsWith("d")
);
console.log(filteredArr71);
// 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.
const filteredArr72 = arr.filter(
  (arr) => typeof arr === "string" && arr.endsWith("s")
);
console.log(filteredArr72);
// 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
const filteredArr73 = arr.filter(
  (arr) => typeof arr === "string" && arr.length > 4 && arr.includes("o")
);
console.log(filteredArr73);
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
const filteredArr74 = arr.filter(
  (arr) => typeof arr === "string" && arr.length > 4 && arr.includes("o")
);
console.log(filteredArr74);
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
const filteredArr75 = arr.filter(
  (arr) => typeof arr === "string" && arr.length % 2 === 0
);
console.log(filteredArr75);
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
const filteredArr76 = arr.filter(
  (arr) => typeof arr === "string" && arr.length % 2 !== 0 && arr.includes("s")
);
console.log(filteredArr76);
// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
const filteredArr77 = arr.filter(
  (arr) => typeof arr === "string" && arr[2] === "a"
);
console.log(filteredArr77);
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
const filteredArr78 = arr.filter(
  (arr) => typeof arr === "string" && arr[3] === "l"
);
console.log(filteredArr78);
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
const filteredArr79 = arr.filter(
  (arr) => typeof arr === "string" && arr[4] !== "t" && arr.length > 4
);
console.log(filteredArr79);
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
const filteredArr80 = arr.filter(
  (arr) =>
    typeof arr === "string" && arr[0] !== "e" && arr.length < 6 && isNaN(arr[0])
);
console.log(filteredArr80);
console.groupEnd();
