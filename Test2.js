// Reverse an array
// Reverse the elements of an array manually (without using .reverse()).
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([10, 20, 30]));

// Find second largest number
// Return the second largest unique number from an array.
function findSecondLargest(arr) {
  let biggest = arr[0];
  let second = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      second = biggest;
      biggest = arr[i];
    } else if (arr[i] > second && arr[i] !== biggest) {
      second = arr[i];
    }
  }
  return second;
}
console.log(findSecondLargest([10, 5, 20, 8]));
console.log(findSecondLargest([1, 2, 2, 3]));

// Remove duplicates from array
// Return a new array with all duplicates removed (no Set).
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3]));
console.log(removeDuplicates([5, 5, 5, 1]));

// Check if two arrays are equal
// Compare if two arrays have same elements in same order.
function checkArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(checkArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(checkArraysEqual([1, 2], [2, 1]));

// Rotate array k times to the right
// Rotate array elements k times to the right.
function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([10, 20, 30], 1));

// Count vowels in a string
// Count number of vowels (a, e, i, o, u) in a given string.
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello"));
console.log(countVowels("JAVASCRIPT"));

// Print triangle pattern using loops
// Write a loop to print * pattern based on number of rows.
function printTrianglePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "* ";
    }
    console.log(stars);
  }
}
printTrianglePattern(3);
printTrianglePattern(2);

// Factorial using recursion
// Calculate factorial of a number using recursion.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(3));

// Check if number is prime
// Return true if number is prime (only divisible by 1 and itself).
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(9));

// Find Fibonacci number at Nth position
// Return the Nth Fibonacci number (0-indexed).
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));
console.log(fibonacci(6));

// Count frequency of array elements
// Return an object with count of each element in array.
function countFrequency(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  }
  return counts;
}
console.log(countFrequency([1, 2, 2, 3]));
console.log(countFrequency([4, 4, 4]));

// Invert object (key value)
// Swap keys and values in an object.
function invertObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(invertObject({ a: 1, b: 2 }));
console.log(invertObject({ x: "y", z: "w" }));

// Merge two objects
// Combine two objects into one.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(mergeObjects({ x: 10 }, { x: 20, y: 30 }));

// Find key with highest value in object
// Return the key which has the highest numeric value.
function findMaxKey(obj) {
  let maxKey = null;
  let maxValue = -Infinity;
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(findMaxKey({ a: 1, b: 5, c: 3 }));
console.log(findMaxKey({ x: 100, y: 99 }));

// Deep clone an object
// Create a deep copy of an object manually (no JSON.parse).
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
console.log(deepClone({ a: 1, b: { c: 2 } }));
console.log(deepClone({ x: [1, 2], y: { z: 3 } }));

// Check if string is palindrome
// Return true if string reads same forward and backward.
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// First non-repeating character
// Return the first character that does not repeat.
function firstNonRepeatingCharacter(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    count[ch] = count[ch] ? count[ch] + 1 : 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(firstNonRepeatingCharacter("aabbcdd"));
console.log(firstNonRepeatingCharacter("xxyz"));

// Reverse a string manually
// Reverse a string without using .reverse().
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));
console.log(reverseString("JS"));

// Flatten nested array
// Convert a nested array into a single flat array.
function flattenArray(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flattenArray(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
console.log(flattenArray([1, [2, [3]], 4]));
console.log(flattenArray([[1], [2, 3]]));

// Group objects by a property
// Group objects by a given property and collect their names.
function groupObjectsByProperty(arr, property) {
  let grouped = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][property];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(arr[i].name);
  }
  return grouped;
}
console.log(
  groupObjectsByProperty(
    [
      { type: "fruit", name: "apple" },
      { type: "fruit", name: "banana" },
    ],
    "type"
  )
);
console.log(
  groupObjectsByProperty(
    [
      { type: "a", name: "x" },
      { type: "b", name: "z" },
    ],
    "type"
  )
);
