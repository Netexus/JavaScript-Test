let opc = true;
while (opc) {
    prompt(`
        Menú de opciones:
        1. See profile
        2. Edit profile
        3. Logout
        4. Exit
      `);

    switch (opc) {
        case 1:
            console.log("See profile");
            break;
        case 2:
            "Edit profile";
            break;
        case 3:
            "Logout";
            break;
        case 4:
            "Exit";
            break;
        default:
            "Enter a valid number";
            break;
    }
    opc = prompt("Do you want to try again? (y/n)")
    if (opc === "y" || opc == "yes") {
        opc = true
    } else {
        break;
    }

     
}