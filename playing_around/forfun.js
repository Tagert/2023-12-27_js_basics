"use strict";

const pyramidEndNum = 14;

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

const pyramidEndNum2 = 20;

const printPyramid2 = (numEnd) => {
  let inNum = 0;
  for (let i = 9; i <= numEnd; i++) {
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

printPyramid2(pyramidEndNum2);

const pyramidEndNum3 = 25;

const printPyramid3 = (numEnd) => {
  let inNum = 0;
  for (let i = 12; i <= numEnd; i++) {
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

printPyramid3(pyramidEndNum3);

const pyramidEndNum4 = 3;

const printPyramid4 = (numEnd) => {
  let inNum = 0;
  for (let i = 1; i <= numEnd; i++) {
    inNum = i;
    let inNumString = inNum.toString();

    for (let j = 0; j < i; j++) {
      if (i < 2) {
        inNumString = inNumString + i + i + i + i + i + i + i + i;
      } else if (i < 3) {
        inNumString = inNumString + i + i + i + i;
      } else if (i < 4) {
        inNumString = inNumString + i + i + i;
      }
      // inNumString += i;
    }
    console.log(inNumString);
  }
};

printPyramid4(pyramidEndNum4);
