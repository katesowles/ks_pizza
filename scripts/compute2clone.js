var deliveries = function(shopLocation) {
    //pizzas(shopLocation);
    for (repeatByTimeBlock = 0; repeatByTimeBlock < timeBlocks.length; repeatByTimeBlock++) {
      deliveryResult = 0;
      if (shopTotal == 0) { // when pizza = 0, make the deliveries needed 0
        deliveryResult = 0;
        // console.warn("# DELIVERIES MODIFIED: when pizza = 0, deliveries = 0");
        return deliveryResult;
      }
      else if (loc.delRange[repeatByTimeBlock][1] > shopTotal) { // if the max number of deliveries is higher (but not equal to) than the number of pizzas baked, cap the number of deliveries at # pizzas.
        deliveryResult = random(1, shopTotal);
        // console.warn("# DELIVERIES MODIFIED: fewer pizzas than deliveries made, cap deliveries: " + deliveryResult);
        return deliveryResult;
      }
      else if (shopTotal > 0) { // if there are more than zero pizzas, make sure the delivery minimum is at least one
        deliveryResult = random(1, shopTotal);
        // console.warn("# DELIVERIES MODIFIED: has pizza but min delivery is 0, new min of 1 delivery: " + deliveryResult);
        return deliveryResult;
      }
      else if (deliveryResult > shopTotal) {
        confirm("ruh roh shaggy, there are too many deliveries!");
      }
      else {
        confirm("the fuck did you do?");
      }
      return deliveryResult;
    }
}
// deliveries();
var drivers = function(shopLocation) {
    shopLocation.pizzas();
    deliveries(shopLocation);
    driversResult = 0;
    // console.log("# Pizzas: " + pizzaResult);
    // console.log("# Deliveries: " + deliveryResult);
    driversResult = Math.ceil(deliveryResult / 3);
    // console.log("# Drivers: " + driversResult);
    // console.log("----------------------------------------");
    return driversResult;
}
// drivers();



// for (repeatByTimeBlock = 0; repeatByTimeBlock < timeBlocks.length; repeatByTimeBlock++) {
//
// function generate_table() {
//
//    var body = document.getElementsByTagName("body")[0]; // get the reference for where you want the table placed
//
//     var wrapper = document.getElementById("tableWrapper");
//
//     var tbl = document.createElement("table"); // creates <table> and puts it in tableWrapper
//       wrapper.appendChild(tbl);
//
//       var tblHead = document.createElement("thead"); // creates <thead> and puts it in <table>
//         tbl.appendChild(tblHead);
//
//         var shopHead = document.createElement("tr"); // creates the shopHead <tr> and puts it in <thead>
//           tblHead.appendChild(shopHead);
//
//           var shopLoc = document.createElement("th"); // creates the <th> in the shopHead <tr>
//           shopLoc.setAttribute("colspan", "4"); // sets the colspan attribute of tbl to 4;
//           shopHead.appendChild(shopLoc);
//
//             var shopLocation = document.createTextNode(shops[repeatByTimeBlock].loc); // pulls the text for the shopLoc <th> from the universal.shops[i].locations array
//             shopLoc.appendChild(shopLocation);
//
//         var colHead = document.createElement("tr"); // creates the colHead <tr> and puts it in <thead>
//           tblHead.appendChild(colHead);
//
//           for (repeatByColHead = 0; repeatByColHead < colHeadings.length; repeatByColHead++) { // creates as many columns as there are colHeadings
//
//             var colTitle = document.createElement("th"); // creates the <th>s in the colHead <tr>
//
//                 colHead.appendChild(colTitle);
//
//                 var colName = document.createTextNode(colHeadings[repeatByColHead]); // pulls the text for the colTitle <th> from the universal.colHeadings array
//                 colTitle.appendChild(colName);
//
//           } // closes for (repeatByColHead) loop
//
//           //creates <tbody> and puts it in <table>
//           var tblBody = document.createElement("tbody");
//             tbl.appendChild(tblBody);
//
//             // creating all cells within the <tbody>
//             for (repeatByTimeBlock = 0; repeatByTimeBlock < timeBlocks.length; repeatByTimeBlock++) { // creates as many rows as there are timeBlocks
//
//               var numDriversText = document.createTextNode(drivers(shops[repeatByTimeBlock])); // this has to be called here so that all sections that follow have numbers generate for them to fill in.
//
//               // creates a <tr> and adds it to <tbody>
//               var row = document.createElement("tr");
//               tblBody.appendChild(row);
//
//                 // creates the timeCell <td> and adds it the <tr> (this is the first TIME column)
//                 var timeCell = document.createElement("td");
//                 var timeCellText = document.createTextNode(timeBlocks[repeatByTimeBlock]);
//                 timeCell.appendChild(timeCellText);
//                 row.appendChild(timeCell);
//
//                 // creates the numPizza <td> and adds it the <tr> (this is the second #Pizza column)
//                 var numPizzas = document.createElement("td");
//                 numPizzas.className = 'pizzaResults';
//                 var numPizzasText = document.createTextNode(pizzaResult[repeatByTimeBlock]);
//                 numPizzas.appendChild(numPizzasText);
//                 row.appendChild(numPizzas);
//                 countArray.push(pizzaResult);
//
//                 // creates the numDeliveries <td> and adds it the <tr> (this is the third #Deliveries column)
//                 var numDeliveries = document.createElement("td");
//                 var numDeliveriesText = document.createTextNode(deliveryResult);
//                 numDeliveries.appendChild(numDeliveriesText);
//                 row.appendChild(numDeliveries);
//
//                 // creates the numDrivers <td> and adds it the <tr> (this is the fourth #Drivers column)
//                 var numDrivers = document.createElement("td");
//                 // var numDriversText = document.createTextNode(my.drivers(i));
//                 numDrivers.appendChild(numDriversText);
//                 row.appendChild(numDrivers);
//
//             }; // closes the repeatByTimeBlock loop
//           }
//
//
//     generate_table()
// }
