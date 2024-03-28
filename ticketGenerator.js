function generateTicket(boardingStop, destinationStop, adults, totalFare, availableBuses) {
    var ticketDetails = document.getElementById("ticketInfo").innerHTML;
    var currentTime = new Date();
    var date = currentTime.toDateString();
    var time = currentTime.toLocaleTimeString();

    // Open a new window to display the ticket details
    var ticketWindow = window.open("", "PMPML Ticket", "width=600,height=400");
    
    //ticketWindow.document.write("<html><head><title>PMPML Ticket</title><style> body { font-family: Arial, sans-serif; } h1 { text-align: center; font-size:4rem } .ticket-info { margin-top: 20px; }  .ticket-info p { margin: 5px 0; }         .ticket-info p strong { font-weight: bold; } .ticket-info .dat { margin-top: 20px; font-size:1rem; position:absolute; left:1rem } .ticket-info .tim { margin-top: 20px; font-size:1rem; position:absolute; right:1rem }</style></head> <body>         <h1><img src='download.jpg' alt='PMPML Logo' style='margin-top: 1em; width: 1.2em; '>PMPML Ticket</h1> <div class='ticket-info'>        <div class='dat'><strong style='margin-left: 0;'>Time:</strong> " + time + "</div><div class='tim'><strong style='align-content: flex-end;'>Date:</strong> " + + "</div><br>       <p><strong>From:</strong> " + boardingStop + "</p>        <p><strong>To:</strong> " + destinationStop + "</p> <p><strong>Bus ID:</strong> " + availableBuses.join(",") + "</p>        <p><strong>Number of Persons:</strong> " + adults + "</p>        <p><strong>Total Amount:</strong> $" + totalFare + "</p></div></body></html>");
    //ticketWindow.document.write("");
    //ticketWindow.document.write("");
    ticketWindow.document.write("<html><head><title>PMPML Ticket</title><style>body { font-family: Arial, sans-serif; } h1 { text-align: center; font-size:4rem} .ticket-info { margin-top: 20px; font-size:1.5rem } .ticket-info p { margin: 5px 0; }");
    ticketWindow.document.write(".ticket-info p strong { font-weight: bold; font-size:.5em; }.ticket-info p section strong { font-weight: bold; font-size:1em }.ticket-info .dat {  font-size:1rem; position:absolute; left:1rem } .ticket-info .tim {  font-size:1rem; position:absolute; right:1rem }.ticket-info .from {  font-size:1rem; position:absolute; left:1rem } .ticket-info .to {  font-size:1rem; position:absolute; right:1rem }");
    ticketWindow.document.write("</style></head><body width=50%>");
    ticketWindow.document.write("<h1><img src='download.jpg' alt='PMPML Logo' style='margin-top: 10%; margin: 0 auto; width: 1em; '>PMPML Ticket</h1> ");
    ticketWindow.document.write("<div class='ticket-info'>");
    ticketWindow.document.write("<div class='dat'><strong style='margin-left: 0;'>Time:</strong> " + time + "</div>");
    ticketWindow.document.write("<div class='tim'><strong style='align-content: flex-end;'>Date:</strong> " + date + "</div><br>");
    ticketWindow.document.write("<div class='from'><strong>From:</strong> " + boardingStop + "</div>");
    ticketWindow.document.write("<div class='to'><strong>To:</strong> " + destinationStop + "</div><br>");
    ticketWindow.document.write("<div class='from'><strong>Bus ID:</strong> " + availableBuses.join(",") + "</div><br>");
    ticketWindow.document.write("<div class='from'><strong>Number of Persons:</strong> " + adults + "</div>");
    ticketWindow.document.write("<div class='to'><strong>Total Amount:</strong> $" + totalFare + "</div>");
    ticketWindow.document.write("</div></body></html>");
    //ticketWindow.document.write("");
    //ticketWindow.document.write("");
    //ticketWindow.document.write("");
    ticketWindow.document.close();
}
