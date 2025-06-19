let users = [];
let valid = 0;

for (let index = 0; index < 5; index++) {;
    let userGiven = prompt("Enter a name: ")
    users[index] = userGiven
}

console.log(users)

for (let name of users) {
  if (name.length > 3) {
    valid++;
  } else {
    alert(`Error: ${name} is too short!`);
  }
}
console.log(`Valid users: ${valid}`);