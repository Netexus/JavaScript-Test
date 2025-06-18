console.log("Welcome to our grade calculator");

let grade = parseInt(prompt("Enter your grade: "));
console.log(typeof(grade));
if (isNaN(grade)) {
    console.error("Wrong! Please, enter a valid age.");
} else if (grade >= 3) {
    alert(`Approved!`);
} else {
    alert(`Not approved!`);
}