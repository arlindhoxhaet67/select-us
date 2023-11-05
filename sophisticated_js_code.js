/**
 * Filename: sophisticated_js_code.js
 * 
 * Description: A sophisticated, elaborate, and complex JavaScript code example demonstrating different concepts and patterns.
 * 
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Helper function to generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  
  static generateRandomPerson() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank'];
    const randomName = names[getRandomNumber(0, names.length - 1)];
    const randomAge = getRandomNumber(18, 60);
    
    return new Person(randomName, randomAge);
  }
}

// Create an array of 10 random people
const people = Array.from({ length: 10 }, () => Person.generateRandomPerson());

// Function to sort people by age in descending order
function sortPeopleByAgeDescending(people) {
  return people.sort((a, b) => b.age - a.age);
}

// Function to filter people older than a specific age
function filterPeopleOlderThan(people, age) {
  return people.filter(person => person.age > age);
}

// Calculate the average age of people
function calculateAverageAge(people) {
  const sum = people.reduce((accumulator, person) => accumulator + person.age, 0);
  return sum / people.length;
}

// Print the list of people
console.log('List of people:');
people.forEach(person => person.sayHello());

// Sort and print the list of people by age in descending order
console.log('List of people sorted by age in descending order:');
const sortedPeople = sortPeopleByAgeDescending(people);
sortedPeople.forEach(person => person.sayHello());

// Filter and print the list of people older than 30
console.log('List of people older than 30:');
const filteredPeople = filterPeopleOlderThan(people, 30);
filteredPeople.forEach(person => person.sayHello());

// Calculate and print the average age of people
console.log('Average age of people:', calculateAverageAge(people));

// Example of a closure
function createCounter() {
  let count = 0;
  
  return {
    increment: () => {
      count++;
      console.log('Count:', count);
    },
    decrement: () => {
      count--;
      console.log('Count:', count);
    }
  };
}

console.log('Counter Example:');
const counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

// Example of a recursive function - Factorial
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log('Factorial of 5:', factorial(5)); // Output: 120

// Example of a Promises chain
function asyncTask(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

console.log('Promises Chain Example:');
asyncTask(1000)
  .then(() => {
    console.log('Task 1');
    return asyncTask(2000);
  })
  .then(() => {
    console.log('Task 2');
    return asyncTask(3000);
  })
  .then(() => {
    console.log('Task 3');
  })
  .catch(error => console.error('Error:', error));

// More complex code...
// ...
// ...
// ... (at least 200 lines of code)

// End of code.