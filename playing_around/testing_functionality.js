"use strict";

const arrayToEdit3 = [6, "city", 7, "countryside", "district", "county"];

const addNewMembers = [5, 1, "life", 47, "cheery"];

const addElementToBeginning = (arr, newMembers) => {
  let editedArrayFromStart = [];

  for (let i = 0; i < newMembers.length; i++) {
    editedArrayFromStart[i] = newMembers[i];
  }

  console.log(editedArrayFromStart);

  for (let i = 0; i < arr.length; i++) {
    editedArrayFromStart[i + newMembers.length] = arr[i];
  }

  return editedArrayFromStart;
};

console.log(addElementToBeginning(arrayToEdit3, addNewMembers));
