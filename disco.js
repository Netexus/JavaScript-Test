console.log("Disco system");

let age = prompt("Enter your age: ");
age = parseInt(age);
if (isNaN(age)) {
    console.error("Wrong! Please, enter a valid age.");
} else if (age < 18) {
    alert(`You are not an adult, so you cannot enter this place!`);
} else {
    alert(`You are an adult. Welcome to the disco!`);
}