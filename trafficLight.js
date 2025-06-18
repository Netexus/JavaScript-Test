let color = prompt("Enter the color: ");

switch (color.toLocaleLowerCase()) {
    case "red":
        alert("STOP!");
        break;
    case "yellow":
        alert("Wait");
        break;
    case "green":
        alert("Move");
        break;
    default:
        alert("Please, enter yellow, red or green");
        break;
}