let passwords = ["password123", "123", "abword", "validpass1", "admin"];
let regex = /\d/;

for (let word of passwords) {
  if (word.length >= 8 && regex.test(word)) {
    console.log("Valid password!:", word);
    break;
  } else {
    console.log("Try again!", word);
  }
}


