"use strict";

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.
// 3.2. Gauti tik neigiamus skaičius.
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.

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
// 3.1.
const filteredArr1 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num > 0) {
    return true;
  }
});
console.log(filteredArr1);
// 3.2.
const filteredArr2 = arr.filter((num) => {
  if (typeof num === "string") {
    return false;
  } else if (num < 0) {
    return true;
  }
});
console.log(filteredArr2);
// 3.3.
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
// 3.4.
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
// 3.5.
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
// 3.6.
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
// 3.7.
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
