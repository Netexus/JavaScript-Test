let weekday = prompt("Enter a weekday: ");

switch (weekday.toLowerCase()) {
    case "monday":
        alert("Mondongo");
        break;
    case "tuesday":
        alert("Fríjoles");
        break;
    case "wednesday":
        alert("Tamales");
        break;
    case "thursday":
        alert("Chicharrón");
        break;
    case "friday":
        alert("Lechona");
        break;
    case "saturday":
        alert("Fiambre")
        break;
    case "sunday":
        alert("Nothing")
        break;

    default:
        alert("Enter a valid weekday!")
        break;
}