console.log("Variable change");

let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
age = parseInt(age);
console.log(typeof(age));
if (isNaN(age)) {
    console.error("Wrong! Please, enter a valid age.");
} else if (age < 18) {
    alert(`Hello ${name}, you are not an adult. Keep learning and enjoying the code!`);
} else {
    alert(`Hello ${name}, you are an adult. Get ready for the great opportunities in the coding world!`);
}

console.log(`Variable name is: ${typeof(name)} with the value: ${name}`);
console.log(`Variable age is: ${typeof(age)} with the value: ${age}`);

name = 24;
age = "Julio";

console.log(`Variable name is: ${typeof(name)} with the value: ${name}`);
console.log(`Variable age is: ${typeof(age)} with the value: ${age}`);