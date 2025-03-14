const readline = require('readline-sync');

const userName = readline.question("Please enter your name: ");
console.log("Hello, " + userName);

const answer1 = readline.questionInt("Question 1: What is the result of '10' + 5: ");
const answer2 = readline.question("Question 2: What JS statement imports the readline module: ");
const answer3 = readline.question("Question 3: Demonstrate 1 way to convert a number to a String: ");
const answer4 = readline.question("Question 4: List 3 keywords used to create variables in JS: ");
const answer5 = readline.question("Question 5: List 5 primitive data types: ");

console.log("A1: " + answer1);
console.log("A2: " + answer2);
console.log("A3: " + answer3);
console.log("A4: " + answer4);
console.log("A5: " + answer5);


