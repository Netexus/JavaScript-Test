let balance = parseFloat(prompt("Enter your balance: "));

if (balance < 10000){
    alert("Insufficient balance");
} else if (balance >= 10000 && balance < 1000000) {
    alert("Moderate balance");
} else {
    alert("VIP")
}
