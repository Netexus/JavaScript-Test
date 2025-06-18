const username = "lucho24";
const pass = "9876543210";
attempts = 3

while (attempts < 3) {
    user = prompt("Enter your username: ")
    password = prompt("Enter your password: ")
    if (user != username && password != pass) {
        alert("User or password incorrect! You have now" + attempts + " attempts")
    }
}