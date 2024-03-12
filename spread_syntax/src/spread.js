// Assignment: Exploring JavaScript Spread Syntax

// Task 1: Function Argument Expansion
export function task1() {
    function sum(a, b, c) {
        return a + b + c;
    }
    const numbers = [7, 7, 7];
    const result = sum(...numbers);
    console.log(result); // Expected output: 21
  }
  
  // Task 2: Merging Arrays
  export function task2() {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const mergedArray = [...array1, ...array2];
    console.log(mergedArray); // Expected output: [1, 2, 3, 4, 5, 6]
  }
  
  // Task 3: Array Element Insertion
  export function task3() {
    const colors = ['red', 'green', 'blue'];
    const extendedColors = ['yellow', ...colors, 'purple'];
    console.log(extendedColors); // Expected output: ['yellow', 'red', 'green', 'blue', 'purple']
  }
  
  // Task 4: Cloning and Modifying an Object
  export function task4() {
    const person = { name: 'John', age: 30 };
    const newPerson = { ...person, name: 'Jane', gender: 'female' };
    console.log(person); // Expected output: { name: 'John', age: 30 }
    console.log(newPerson); // Expected output: { name: 'Jane', age: 30, gender: 'female' }
  }
  
  // Task 5: Combining Objects
  export function task5() {
    const object1 = { a: 1, b: 2 };
    const object2 = { b: 3, c: 4 };
    const combinedObject = { ...object1, ...object2 };
    console.log(combinedObject); // Expected output: { a: 1, b: 3, c: 4 }
  }
  