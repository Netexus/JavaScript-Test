console.log("Welcome to our discount program");

let amount = parseInt(prompt("Enter the amount of products: "));
console.log(typeof(amount));
if (isNaN(amount)) {
    console.error("Wrong! Please, enter a valid age.");
} else if (amount >= 3) {
    alert(`You have a discount!`);
} else {
    alert(`Sorry, you do not apply for a discount!`);
}