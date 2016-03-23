function random(min,max) {
  var randomResult = Math.floor(Math.random() * ((max - min) + 1) + min);
  return randomResult;
}

var shops = {
  colHeadings : ["Time", "# Pizzas", "# Deliveries", "# Drivers"],
  timeBlocks : ["8:00 - 8:59am", "9:00 - 9:59am", "10:00 - 10:59am", "11:00 - 11:59am", "12:00 - 12:59pm", "1:00 - 1:59pm", "2:00 - 2:59pm", "3:00 - 3:59pm", "4:00 - 4:59pm", "5:00 - 5:59pm", "6:00 - 6:59pm", "7:00 - 7:59pm", "8:00 - 8:59pm", "9:00 - 9:59pm", "10:00 - 10:59pm", "11:00 - 11:59pm", "12:00 - 12:59am", "1:00 - 1:59am"],
  location : ["Beaverton", "Hillsboro", "Downtown", "Northeast", "Clackamas", "Airport"],
  pieRange : [[0,4], [0,7], [2,15], [15,35], [12,31], [5,20]],
  delRange : [[0,4], [0,4], [1,4], [3,8], [5,12], [6,11]],
};

console.log("BLOCK ONE Pizza Min/Max (should be between 0-4):    " + random(shops.pieRange[0][0],shops.pieRange[0][1]));
console.log("BLOCK ONE Delivery Min/Max (should be between 0-4): " + random(shops.delRange[0][0],shops.delRange[0][1]));
console.log("----------------------------------------------------------");
console.log("BLOCK TWO Pizza Min/Max (should be between 0-7):    " + random(shops.pieRange[1][0],shops.pieRange[1][1]));
console.log("BLOCK TWO Delivery Min/Max (should be between 0-4): " + random(shops.delRange[1][0],shops.delRange[1][1]));
console.log("----------------------------------------------------------");
console.log("BLOCK THREE Pizza Min/Max (should be between 2-15):   " + random(shops.pieRange[2][0],shops.pieRange[2][1]));
console.log("BLOCK THREE Delivery Min/Max (should be between 1-4): " + random(shops.delRange[2][0],shops.delRange[2][1]));
console.log("----------------------------------------------------------");
console.log("BLOCK FOUR Pizza Min/Max (should be between 15-35):  " + random(shops.pieRange[3][0],shops.pieRange[3][1]));
console.log("BLOCK FOUR Delivery Min/Max (should be between 3-8): " + random(shops.delRange[3][0],shops.delRange[3][1]));
console.log("----------------------------------------------------------");
console.log("BLOCK FIVE Pizza Min/Max (should be between 12-31):   " + random(shops.pieRange[4][0],shops.pieRange[4][1]));
console.log("BLOCK FIVE Delivery Min/Max (should be between 5-12): " + random(shops.delRange[4][0],shops.delRange[4][1]));
console.log("----------------------------------------------------------");
console.log("BLOCK SIX Pizza Min/Max (should be between 5-20):    " + random(shops.pieRange[5][0],shops.pieRange[5][1]));
console.log("BLOCK SIX Delivery Min/Max (should be between 6-11): " + random(shops.delRange[5][0],shops.delRange[5][1]));
console.log("----------------------------------------------------------");
console.log("number of items in the location array: " + shops.location.length);
console.log("number of items in the colHeadings array: " + shops.colHeadings.length);
console.log("number of items in the timeBlocks array: " + shops.timeBlocks.length);
console.log("----------------------------------------------------------");
var pizzaResult;
var deliveryResult;
var driversResult
var my = {
  pizzas : function(x) {
    // console.log("pizzas needed: " + x); //x should denote the array from which we're pulling the min/max for that time block's pizza production
    pizzaResult = random(shops.pieRange[x][0],shops.pieRange[x][1]);
    // console.log("#Pizzas: " + random(shops.pieRange[x][0],shops.pieRange[x][1]));
  },
  deliveries : function(y) {
    this.pizzas(y);
    console.log("# Pizzas: " + pizzaResult);
    console.log("Potential Deliveries: " + shops.delRange[y][1]);
    deliveryResult = 0;
    if (pizzaResult == 0) { // when pizza = 0, make the deliveries needed 0
      deliveryResult = 0;
      console.log("Modified Deliveries (when pizza = 0, deliveries = 0): " + deliveryResult);
      return deliveryResult;
    }
    else if (pizzaResult >= shops.delRange[y][0]) { // when there are more pizzas baked than the minimum deliveries, make the # deliveries a new minimum of 1
      deliveryResult = random(1, pizzaResult);
      console.log("Modified Deliveries (when max is more than number of pizzas made): " + deliveryResult);
      return deliveryResult;
    }
    else if (pizzaResult < shops.delRange[y][0]) {
      deliveryResult = random(1, pizzaResult);
      console.log("Modified Deliveries (when min is less than number of pizzas made): " + deliveryResult);
      return deliveryResult;
    }
    else {
      console.error("the fuck did you do?");
    }
    if (deliveryResult > pizzaResult) {
      console.error("ruh roh shaggy, there are too many deliveries!");
    }
  },
  drivers : function(z) {
    this.pizzas(z);
    this.deliveries(z);
    console.log("# Pizzas: " + pizzaResult);
    console.log("# Deliveries: " + deliveryResult);
    driversResult = Math.ceil(deliveryResult / 3);
    console.log("DRIVER RESULT: " + driversResult);
    return driversResult;
  }
};


/**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/




for (i = 0; i < shops.location.length; i++) {

  function generate_table() {
      // get the reference for where you want the table placed
      var tblWrapper = document.getElementsByClassName("tableWrapper")[0];

      // creates <table> and puts it in TableWrapper
      var tbl = document.createElement("table");
        tblWrapper.appendChild(tbl);

        // creates <thead> and puts it in <table>
        var tblHead = document.createElement("thead");
          tbl.appendChild(tblHead);

          // creates the shopHead <tr> and puts it in <thead>
          var shopHead = document.createElement("tr");
            tblHead.appendChild(shopHead);

            // creates the <th> in the shopHead <tr>
            var shopLoc = document.createElement("th");
            // sets the colspan attribute of tbl to 4;
            shopLoc.setAttribute("colspan", "4");
            shopHead.appendChild(shopLoc);

              // pulls the text for the shopLoc <th> from the shops.locations array
              var locName = document.createTextNode(shops.location[i]);
              shopLoc.appendChild(locName);

          // creates the colHead <tr> and puts it in <thead>
          var colHead = document.createElement("tr");
            tblHead.appendChild(colHead);

            // creates the <th>s in the colHead <tr>
            for (j = 0; j < shops.colHeadings.length; j++) {

              // creates the <th>s in the colHead <tr>
              var colTitle = document.createElement("th");
                  colHead.appendChild(colTitle);

                  // pulls the text for the colTitle <th> from the shops.colheadings array
                  var colName = document.createTextNode(shops.colHeadings[j]);
                  colTitle.appendChild(colName);

            } // closes for (j) loop

        //creates <tbody> and puts it in <table>
        var tblBody = document.createElement("tbody");
          tbl.appendChild(tblBody);

          // creating all cells within the <tbody>
          for (k = 0; k < shops.timeBlocks.length; k++) {

            // creates a <tr> and adds it to <tbody>
            var row = document.createElement("tr");
            tblBody.appendChild(row);

//             for (var l = 0; l < shops.colHeadings.length; l++) {
//
//
//               // creates the <td> and adds it the <tr>
//               var cell = document.createElement("td");
//               row.appendChild(cell);
//
//               // adds text to each cell
//               var cellText = document.createTextNode("cell in row "+k+", column "+l);
//               cell.appendChild(cellText);
//             } // closes for (l) loop
//           } // closes for (k) loop
//
//   };
//   generate_table()
// }


/**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  // creates the timeCell <td> and adds it the <tr> (this is the first TIME column)
  var timeCell = document.createElement("td");
  var timeCellText = document.createTextNode(shops.timeBlocks[k]);
  timeCell.appendChild(timeCellText);
  row.appendChild(timeCell);

  // creates the numPizza <td> and adds it the <tr> (this is the second #Pizza column)
  var numPizzas = document.createElement("td");
  var numPizzasText = document.createTextNode("# pizzas");
  numPizzas.appendChild(numPizzasText);
  row.appendChild(numPizzas);

  // creates the numDeliveries <td> and adds it the <tr> (this is the third #Deliveries column)
  var numDeliveries = document.createElement("td");
  var numDeliveriesText = document.createTextNode("# deliveries");
  numDeliveries.appendChild(numDeliveriesText);
  row.appendChild(numDeliveries);

  // creates the numDrivers <td> and adds it the <tr> (this is the fourth #Drivers column)
  var numDrivers = document.createElement("td");
  var numDriversText = document.createTextNode("# drivers needed");
  numDrivers.appendChild(numDriversText);
  row.appendChild(numDrivers);

} // closes for (k) loop

};
generate_table()
}
