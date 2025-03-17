const input = require('readline-sync');

let name = input.question(" Enter name ");

let lastName = input.question(" Enter last name ");

console.log("Hello " + name + " " + lastName);



let question = input.question(" What is a value? ");

let questionTwo = input.question(" What is a data type? ");

let questionThree = input.question(" What is an operation? ");

let questionFour = input.question(" What is a boolean? ");

let questionFive = input.questionInt(" What is your age? ");

if (question === "Data" && questionTwo === "Info" && questionThree === "Action" && questionFour === "True/False" && questionFive >= 20) {



console.log("Correct!" + "\n" + question + "\n" + questionTwo + "\n" + questionThree + "\n" + questionFour + "\n" + questionFive);
} else {
console.log("false");
}
