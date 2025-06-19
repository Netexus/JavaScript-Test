const username = "lucho24";
const pass = "9876543210";

for (let index = 1; index < 3; index++) {
    alert("Attempt: " + index)
    user = prompt("Enter your username: ")
    password = prompt("Enter your password: ")
    if (user != username && password != pass) {
        alert("User or password incorrect! Attempt")
    }
}