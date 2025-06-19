const username = "lucho24";
const pass = "9876543210";

attempt = 1

while (attempt <= 3) {
    console.log("Attemt: " + attempt)
    user = prompt("Enter your username: ")
    password = prompt("Enter your password: ")
    if (user != username && password != pass) {
        console.log("User or password incorrect! Attempt number: " + attempt)
        attempt++
    } else {
        console.log("Welcome!")
        break;
    }
}

