console.log("Welcome to our tournament");

let age = parseInt(prompt("Enter your age: "));
let resident = prompt("Enter your nationality: ")
console.log(typeof(age));
if (isNaN(age)) {
    console.error("Wrong! Please, enter a valid age.");
} else if ((age >= 15 || age <= 35) & resident === "Colombian") {
    alert(`You can participate!`);
} else {
    alert(`You cannot participate!`);
}