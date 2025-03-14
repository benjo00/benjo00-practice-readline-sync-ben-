const input = require('readline-sync');

let name = input.question(" Enter name ");

let lastName = input.question(" Enter last name ");

console.log("Hello " + name + " " + lastName);



let question = input.question(" What is a value? ");

let questionTwo = input.question(" What is a data type? ");

let questionThree = input.question(" What is an operation? ");

let questionFour = input.question(" What is a boolean? ");

let questionFive = input.questionInt(" What is your age? ");

console.log("Correct!" + "\n" + question + "\n" + questionTwo + "\n" + questionThree + "\n" + questionFour + "\n" + questionFive);