// 1. Count Even and Odd Numbers

// Write a function that takes an array of numbers and returns how many are even and how many are odd.

function evenOddInput1(num) {
  let result = { Even: 0, Odd: 0 };
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      result.Even++;
    } else {
      result.Odd++;
    }
  }
  return result;
}

console.log(evenOddInput1([2, 3, 4, 5]));

function evenOddInput2(num) {
  let result = { Even: 0, Odd: 0 };
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      result.Even++;
    } else {
      result.Odd++;
    }
  }
  return result;
}
console.log(evenOddInput2([11, 14, 16, 17, 19]));

//Grade Distributation
//Given an array of marks, return how many students score in grade range: A(90+), B(80-89), C(70-79), D(60-69), F(<60).

function gradeInput1(marks) {
  let result = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 90) {
      result.A++;
    } else if (marks[i] >= 80) {
      result.B++;
    } else if (marks[i] >= 70) {
      result.C++;
    } else if (marks[i] >= 60) {
      result.D++;
    } else {
      result.F++;
    }
  }
  return result;
}

console.log(gradeInput1([95, 82, 67, 50]));

function gradeInput2(marks) {
  let result = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 90) {
      result.A++;
    } else if (marks[i] >= 80) {
      result.B++;
    } else if (marks[i] >= 70) {
      result.C++;
    } else if (marks[i] >= 60) {
      result.D++;
    } else {
      result.F++;
    }
  }
  return result;
}
console.log(gradeInput2([91, 59, 76, 88]));

//All Positive Numbers
//Check all elements in the array are Greater than 0 using every()

function allPositiveNumbers1(num) {
  return num.every((x) => x > 0);
}

console.log(allPositiveNumbers1([1, 2, 3, 4]));

function allPositiveNumbers2(num) {
  return num.every((x) => x > 0);
}

console.log(allPositiveNumbers2([-1, 0, 5]));

//Find First number greater than 50
//Return the first number in the array greater then 50 using find() or Lood

let arr = [10, 25, 60, 40];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 50) {
    console.log(arr[i]);
    break;
  }
}

function firstNumberGreaterThan50(arr) {
  return arr.find((x) => x > 50);
}
console.log(firstNumberGreaterThan50([45, 52, 19]));

//Leap Year Checker
//Check if a year is leap year(divisible by 4 but not 100, unless divisible by 400)

function leapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

console.log(leapYear(2024));

function leapYear2(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

console.log(leapYear2(2023));

//Double the elements
//using map() return a new array where every number is modified by 2

function doubleElements(arr) {
  return arr.map((x) => x * 2);
}
console.log(doubleElements([1, 2, 3]));

function doubleElements2(arr) {
  return arr.map((x) => x * 2);
}
console.log(doubleElements2([5, 10]));

//Filter Out Even Numbers
//Return a new array with only the odd numbers using filter()

function filterOutEvenNumbers(arr) {
  return arr.filter((x) => x % 2 != 0);
}

console.log(filterOutEvenNumbers([1, 2, 3, 4, 5]));

function filterOutEvenNumbers2(arr) {
  return arr.filter((x) => x % 2 != 0);
}

console.log(filterOutEvenNumbers2([10, 15, 20, 25]));

//Total Charecter Count in string
//Return a total numbers of characters in an array of string using reduce()

function totalCharecterCount(arr) {
  return arr.reduce((a, b) => a + b.length, 0);
}

console.log(totalCharecterCount(["hi", "world"]));

function totalCharecterCount2(arr) {
  return arr.reduce((a, b) => a + b.length, 0);
}

console.log(totalCharecterCount2(["a", "ab", "abc"]));

//Get Last 3 Items
//Return the last 3 Items in the array using slice()

function getLast3Items(arr) {
  return arr.slice(-3);
}

console.log(getLast3Items([1, 2, 3, 4, 5]));

function getLast3Items2(arr) {
  return arr.slice(-3);
}

console.log(getLast3Items2([10, 20, 30, 40]));

//Remove Element at Index 2
//Use splice() to remove the element at index 2

function removeElementAtIndex2(arr) {
  arr.splice(2, 1);
  return arr;
}

console.log(removeElementAtIndex2([1, 2, 3, 4]));

function removeElementAtIndex22(arr) {
  arr.splice(2, 1);
  return arr;
}

console.log(removeElementAtIndex22([10, 11, 12, 13]));

//Capitalized First Letter
//Return a New array where each word starts with a uppercase letter

function capitalizeFirstLetter(arr) {
  return arr.map((x) => x.charAt(0).toUpperCase() + x.slice(1));
}

console.log(capitalizeFirstLetter(["hello", "world"]));

function capitalizeFirstLetter2(arr) {
  return arr.map((x) => x.charAt(0).toUpperCase() + x.slice(1));
}

console.log(capitalizeFirstLetter2(["code", "test"]));

//Check Divisibility by 5
//Use Some() to check if at least one number in the array is divisible by 5

function checkDivisibilityBy5(arr) {
  return arr.some((x) => x % 5 == 0);
}

console.log(checkDivisibilityBy5([3, 6, 10, 14]));

function checkDivisibilityBy52(arr) {
  return arr.some((x) => x % 5 == 0);
}

console.log(checkDivisibilityBy52([2, 4, 6]));

//Find Index of First Negative
//Return the Index of the first negative numbers, or -1 if none found

function findIndexOfFirstNegative(arr) {
  return arr.findIndex((x) => x < 0);
}

console.log(findIndexOfFirstNegative([1, 2, -3, 4]));

function findIndexOfFirstNegative2(arr) {
  return arr.findIndex((x) => x < 0);
}

console.log(findIndexOfFirstNegative2([5, 7, 8]));

//Count Word Frequencies
//Return an object where the keys are words and values are how many times each appears.

function countWordFrequencies(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }
  return result;
}

console.log(countWordFrequencies(["apple", "banana", "apple"]));

function countWordFrequencies2(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }
  return result;
}

console.log(countWordFrequencies2(["x", "x", "y"]));

//Group String by Length
//Create an Object groupping string based on their length

function groupStringByLength(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i].length]) {
      result[arr[i].length].push(arr[i]);
    } else {
      result[arr[i].length] = [arr[i]];
    }
  }
  return result;
}

console.log(groupStringByLength(["hi", "yes", "no", "maybe"]));

function groupStringByLength2(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i].length]) {
      result[arr[i].length].push(arr[i]);
    } else {
      result[arr[i].length] = [arr[i]];
    }
  }
  return result;
}

console.log(groupStringByLength2(["a", "ab", "abc"]));

// Convert Array to Object by ID
//Convert an array of objects to a single object where keys are IDs and values are names.

function convertArrayToObjectById(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].id] = arr[i].name;
  }
  return result;
}

console.log(
  convertArrayToObjectById([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ])
);

function convertArrayToObjectById2(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].id] = arr[i].name;
  }
  return result;
}

console.log(
  convertArrayToObjectById2([
    { id: 3, name: "X" },
    { id: 4, name: "Y" },
  ])
);

//Count Data Types
// Return a count of how many times each data type appears in an array

function countDataTypes(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[typeof arr[i]]) {
      result[typeof arr[i]]++;
    } else {
      result[typeof arr[i]] = 1;
    }
  }
  return result;
}

console.log(countDataTypes([1, "hi", true, {}]));

function countDataTypes2(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[typeof arr[i]]) {
      result[typeof arr[i]]++;
    } else {
      result[typeof arr[i]] = 1;
    }
  }
  return result;
}

console.log(countDataTypes2(["x", "y", 5]));

//Flatten One-Level Nested Array
//Flatten a single-level nested array (no recursion).

function flattenOneLevelNestedArray(arr) {
  return arr.flat();
}

console.log(flattenOneLevelNestedArray([1, [2, 3], 4]));

function flattenOneLevelNestedArray2(arr) {
  return arr.flat();
}

console.log(flattenOneLevelNestedArray2(["a", ["b", "c"]]));

// Remove Duplicate Numbers
// Return a new array without duplicate numbers

function removeDuplicateNumbers(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicateNumbers([1, 2, 2, 3]));

function removeDuplicateNumbers2(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicateNumbers2([4, 4, 4, 5]));

//Find Longest Word
// Return the longest word from an array of strings.

function findLongestWord(arr) {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(findLongestWord(["hi", "hello", "goodbye"]));

function findLongestWord2(arr) {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(findLongestWord2(["short", "longer", "lengthiest"]));
