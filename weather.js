let time = promt("Enter the time (Cloudy, Rainy, Sunny)");
let weather = "lluvioso";
let hasUmbrella = false;

if (weather === "Sunny".toLowerCase) {
  console.log("You can walk");
} else if (weather === "Rainy".toLowerCase && hasUmbrella) {
  console.log("You can walk");
} else if (weather === "Rainy".toLowerCase && !hasUmbrella) {
  console.log("You should wait or take a bus");
} else {
  console.log("Take a bus");
}