/******************************************************************************/
/************************************ TESTS ***********************************/
/******************************************************************************/

function lengthTest() {
  console.log("---------------------- START TESTING ---------------------");
  console.log("number of items in the location array: " + universal.shops.length);
  console.log("number of items in the colHeadings array: " + universal.colHeadings.length);
  console.log("number of items in the timeBlocks array: " + universal.timeBlocks.length);
  console.log("---------------------- END TESTING -----------------------");
}
function storeTest(x) {

  for (y = 0; y < universal.timeBlocks.length; y++) { // repeat for each row
    var checkPieRange = [universal.shops[x].pieRange[y][0],universal.shops[x].pieRange[y][1]];
    var checkPieRandom = random(universal.shops[x].pieRange[y][0],universal.shops[x].pieRange[y][1]);
    if (checkPieRandom > universal.shops[x].pieRange[y][1]) {
      console.alert("your pizza count is higher than the maximum");
    }
    else if (checkPieRandom < universal.shops[x].pieRange[y][0]) {
      console.alert("your pizza count is less than the minimum");
    }
    else {
      console.log("all is well.");
    }
  }
}
function allTest() { // will search all times at all stores, 100x tests each
  for (z = 0; z < 1000; z++) {
    for (x = 0; x < universal.shops.length; x++) { // repeat for each store
      storeTest(x) // calls the store test which will search every time block
    }
  }
  return "TESTING COMPLETE, AS YOU WERE..."
}

/******************************************************************************/
/*********************** "OUTSIDE" VARIABLES & FUNCTIONS **********************/
/******************************************************************************/

function createShop(name, address, cityState, pieRange, delRange, dailyTotal) {
  this.name = name;
  this.address = address;
  this.cityState = cityState;
  this.pieRange = pieRange;
  this.delRange = delRange;
  this.dailyTotal = dailyTotal;
}
function random(min,max) {
  var randomResult = Math.floor(Math.random() * ((max - min) + 1) + min);
  return randomResult;
}

var beaverton = new createShop (
  "Beaverton",
  "620 Olney Avenue",
  "Beaverton, OR",
  [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]],
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]],
  []
);
var hillsboro = new createShop (
  "Hillsboro",
  "6715 SE 1st Avenue",
  "Hillsboro, OR",
  [[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]],
  [[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]],
  []
);
var downtown = new createShop (
  "Downtown",
  "770 W Burnside",
  "Portland, OR",
  [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[10,26],[10,26],[10,26],[8,22],[8,22],[8,22],[0,2],[0,2],[0,2]],
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[4,6],[4,6],[4,6],[7,15],[7,15],[7,15],[2,8],[2,8],[2,8]],
  []
);
var northeast = new createShop (
  "Northeast",
  "215 Broadway Street",
  "Portland, OR",
  [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[5,15],[5,15],[5,15],[25,39],[25,39],[25,39],[22,36],[22,36],[22,36],[5,21],[5,21],[5,21]],
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[13,18],[13,18],[13,18],[5,22],[5,22],[5,22],[16,31],[16,31],[16,31]],
  []
);
var clackamas = new createShop (
  "Clackamas",
  "51511 SE 2nd Street",
  "Clackamas, OR",
  [[2,7],[2,7],[2,7],[3,8],[3,8],[3,8],[1,5],[1,5],[1,5],[5,13],[5,13],[5,13],[22,41],[22,41],[22,41],[15,20],[15,20],[15,20]],
  [[3,5],[3,5],[3,5],[3,9],[3,9],[3,9],[1,4],[1,4],[1,4],[2,4],[2,4],[2,4],[15,42],[15,42],[15,42],[6,21],[6,21],[6,21]],
  []
);
var airport = new createShop (
  "Airport",
  "78 E. Harbor Street",
  "Portland, OR",
  [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[6,9],[6,9],[6,9],[4,8],[4,8],[4,8],[2,4],[2,4],[2,4]],
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[5,18],[5,18],[5,18],[2,5],[2,5],[2,5],[3,11],[3,11],[3,11]],
  []
);

var colHeadings = ["Time", "# Pizzas", "# Deliveries", "# Drivers"];
var timeBlocks = ["8:00 - 8:59am", "9:00 - 9:59am", "10:00 - 10:59am", "11:00 - 11:59am", "12:00 - 12:59pm", "1:00 - 1:59pm", "2:00 - 2:59pm", "3:00 - 3:59pm", "4:00 - 4:59pm", "5:00 - 5:59pm", "6:00 - 6:59pm", "7:00 - 7:59pm", "8:00 - 8:59pm", "9:00 - 9:59pm", "10:00 - 10:59pm", "11:00 - 11:59pm", "12:00 - 12:59am", "1:00 - 1:59am"];
var shops = [beaverton, hillsboro, downtown, northeast, clackamas, airport];

var countArray = [];    // this array will hold the total count of pizzas, to be printed to index.html
var allShopTotals = []; // this array will hold each shop's daily total, to be reduced and ported over countArray
var shopTotal = [];     // this array will hold each shop's hourly totals, to be reduced...
var pizzaResult = [];   // this will hold each shop's hourly totals while calculating...

var deliveryResult;     // this will hold the calculated delivery results for each time block before it's pushed to that row in the respecitve table
var driversResult;      // this will hold the calculated driver results for each time block before it's pushed to that row in the respecitve table
var wrapper;            //
var min;                // finds the minimum value for the
var max;                //

/******************************************************************************/
/************************** HERE LIES MY FRUSTRATION **************************/
/******************************************************************************/

var my = {
  pizzas : function(shopLocation) { // shopLocation = shops[x]
    var shopTotal = [];
    var pizzaResult = [];
    var min;
    var max;
      for (var y = 0; y < timeBlocks.length; y++) {
        min = shopLocation.pieRange[y][0];
        max = shopLocation.pieRange[y][1];
        pizzaResult.push(random(min, max));
      }
      shopTotal = pizzaResult.reduce(function(a,b) {return a+b;});
      console.log("shop total: " + shopTotal);
      return shopTotal;
  },
  deliveries : function(shopLocation) {
    this.pizzas(shopLocation);

    for (f = 0; f < timeBlocks.length; f++) {
      deliveryResult = 0;
      if (shopTotal == 0) { // when pizza = 0, make the deliveries needed 0
        deliveryResult = 0;
        // console.warn("# DELIVERIES MODIFIED: when pizza = 0, deliveries = 0");
        return deliveryResult;
      }
      else if (shopLocation.delRange[y][1] > shopTotal) { // if the max number of deliveries is higher (but not equal to) than the number of pizzas baked, cap the number of deliveries at # pizzas.
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

  },
  drivers : function(shopLocation) {
    this.pizzas(shopLocation);
    this.deliveries(shopLocation);
    driversResult = 0;
    // console.log("# Pizzas: " + pizzaResult);
    // console.log("# Deliveries: " + deliveryResult);
    driversResult = Math.ceil(deliveryResult / 3);
    // console.log("# Drivers: " + driversResult);
    // console.log("----------------------------------------");
    return driversResult;
  }
};

for(var x = 0; x < shops.length; x++) {
  allShopTotals.push(my.pizzas(shops[x]));
}

// wtf = function(shopLocation) { // shopLocation = shops[x]
//   var shopTotal = [];
//   var pizzaResult = [];
//   var min;
//   var max;
//     for (y = 0; y < timeBlocks.length; y++) {
//       min = shopLocation.pieRange[y][0];
//       max = shopLocation.pieRange[y][1];
//       pizzaResult.push(random(min, max));
//     }
//     shopTotal = pizzaResult.reduce(function(a,b) {return a+b;});
//     console.log("shop total: " + shopTotal);
//     return shopTotal;
// }
//
// for(var x = 0; x < shops.length; x++) {
//   allShopTotals.push(wtf(shops[0]));
// }
console.log(allShopTotals);

// allShopTotals.push(my.pizzas(shops[0]));

/******************************************************************************/
/************************* APPENDING DATA TO THE PAGE *************************/
/******************************************************************************/

for (i = 0; i < shops.length; i++) { // creates as many tables as there are shop objects

  function generate_table() {

      var body = document.getElementsByTagName("body")[0]; // get the reference for where you want the table placed

      var wrapper = document.getElementById("tableWrapper");

      var tbl = document.createElement("table"); // creates <table> and puts it in tableWrapper
        wrapper.appendChild(tbl);

        var tblHead = document.createElement("thead"); // creates <thead> and puts it in <table>
          tbl.appendChild(tblHead);

          var shopHead = document.createElement("tr"); // creates the shopHead <tr> and puts it in <thead>
            tblHead.appendChild(shopHead);

            var shopLoc = document.createElement("th"); // creates the <th> in the shopHead <tr>
            shopLoc.setAttribute("colspan", "4"); // sets the colspan attribute of tbl to 4;
            shopHead.appendChild(shopLoc);

              var locName = document.createTextNode(shops[i].name); // pulls the text for the shopLoc <th> from the universal.shops[i].locations array
              shopLoc.appendChild(locName);

          var colHead = document.createElement("tr"); // creates the colHead <tr> and puts it in <thead>
            tblHead.appendChild(colHead);

            for (j = 0; j < colHeadings.length; j++) { // creates as many columns as there are colHeadings

              var colTitle = document.createElement("th"); // creates the <th>s in the colHead <tr>

                  colHead.appendChild(colTitle);

                  var colName = document.createTextNode(colHeadings[j]); // pulls the text for the colTitle <th> from the universal.colHeadings array
                  colTitle.appendChild(colName);

            } // closes for (j) loop

        //creates <tbody> and puts it in <table>
        var tblBody = document.createElement("tbody");
          tbl.appendChild(tblBody);

          // creating all cells within the <tbody>
          for (k = 0; k < timeBlocks.length; k++) { // creates as many rows as there are timeBlocks

            var numDriversText = document.createTextNode(my.drivers(shops[i])); // this has to be called here so that all sections that follow have numbers generate for them to fill in.

            // creates a <tr> and adds it to <tbody>
            var row = document.createElement("tr");
            tblBody.appendChild(row);

              // creates the timeCell <td> and adds it the <tr> (this is the first TIME column)
              var timeCell = document.createElement("td");
              var timeCellText = document.createTextNode(timeBlocks[k]);
              timeCell.appendChild(timeCellText);
              row.appendChild(timeCell);

              // creates the numPizza <td> and adds it the <tr> (this is the second #Pizza column)
              var numPizzas = document.createElement("td");

              numPizzas.className = 'pizzaResults';
              var numPizzasText = document.createTextNode(allShopTotals);
              numPizzas.appendChild(numPizzasText);
              row.appendChild(numPizzas);
              countArray.push(allShopTotals);

              // creates the numDeliveries <td> and adds it the <tr> (this is the third #Deliveries column)
              var numDeliveries = document.createElement("td");
              var numDeliveriesText = document.createTextNode(deliveryResult);
              numDeliveries.appendChild(numDeliveriesText);
              row.appendChild(numDeliveries);

              // creates the numDrivers <td> and adds it the <tr> (this is the fourth #Drivers column)
              var numDrivers = document.createElement("td");
              // var numDriversText = document.createTextNode(my.drivers(i));
              numDrivers.appendChild(numDriversText);
              row.appendChild(numDrivers);

          }; // closes the k loop

  }; // closes the generate_table function

  generate_table();

}; // closes the i loop

/******************************************************************************/
/************************ ADDING MYTOTAL TO COUNTERSPAN ***********************/
/******************************************************************************/

var myTotal = countArray.reduce(function(a,b) {return a+b;});

var counterOutput = document.getElementById("counterSpan");
if( document.getElementById("counterSpan") ) {
  counterOutput.textContent = myTotal;
}

// console.log("Weekly All-Shop Total: " + myTotal);

/******************************************************************************/
/*********************************** THE END **********************************/
/******************************************************************************/
