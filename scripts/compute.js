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
  // console.log("-------------------------------------------");
  // console.log("STORE: " + universal.shops[x].location);
  for (y = 0; y < universal.timeBlocks.length; y++) { // repeat for each row
    var checkPieRange = [universal.shops[x].pieRange[y][0],universal.shops[x].pieRange[y][1]];
    var checkPieRandom = random(universal.shops[x].pieRange[y][0],universal.shops[x].pieRange[y][1]);
      // console.log("----------------------------------------------------------");
      // console.log("PIZZA RANGE: " + checkPieRange);
      // console.log("PIZZA RANDOM: " + checkPieRandom);
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

function createShop(location, address, cityState, pieRange, delRange) {
  this.location = location;
  this.address = address;
  this.cityState = cityState;
  this.pieRange = pieRange;
  this.delRange = delRange;
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
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]]
);
var hillsboro = new createShop (
  "Hillsboro",
  "6715 SE 1st Avenue",
  "Hillsboro, OR",
  [[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]],
  [[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]]
);
var downtown = new createShop (
  "Downtown",
  "770 W Burnside",
  "Portland, OR",
  [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[10,26],[10,26],[10,26],[8,22],[8,22],[8,22],[0,2],[0,2],[0,2]],
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[4,6],[4,6],[4,6],[7,15],[7,15],[7,15],[2,8],[2,8],[2,8]]
);
var northeast = new createShop (
  "Northeast",
  "215 Broadway Street",
  "Portland, OR",
  [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[5,15],[5,15],[5,15],[25,39],[25,39],[25,39],[22,36],[22,36],[22,36],[5,21],[5,21],[5,21]],
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[13,18],[13,18],[13,18],[5,22],[5,22],[5,22],[16,31],[16,31],[16,31]]
);
var clackamas = new createShop (
  "Clackamas",
  "51511 SE 2nd Street",
  "Clackamas, OR",
  [[2,7],[2,7],[2,7],[3,8],[3,8],[3,8],[1,5],[1,5],[1,5],[5,13],[5,13],[5,13],[22,41],[22,41],[22,41],[15,20],[15,20],[15,20]],
  [[3,5],[3,5],[3,5],[3,9],[3,9],[3,9],[1,4],[1,4],[1,4],[2,4],[2,4],[2,4],[15,42],[15,42],[15,42],[6,21],[6,21],[6,21]]
);
var airport = new createShop (
  "Airport",
  "78 E. Harbor Street",
  "Portland, OR",
  [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[6,9],[6,9],[6,9],[4,8],[4,8],[4,8],[2,4],[2,4],[2,4]],
  [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[5,18],[5,18],[5,18],[2,5],[2,5],[2,5],[3,11],[3,11],[3,11]]
);

var colHeadings = ["Time", "# Pizzas", "# Deliveries", "# Drivers"];
var timeBlocks = ["8:00 - 8:59am", "9:00 - 9:59am", "10:00 - 10:59am", "11:00 - 11:59am", "12:00 - 12:59pm", "1:00 - 1:59pm", "2:00 - 2:59pm", "3:00 - 3:59pm", "4:00 - 4:59pm", "5:00 - 5:59pm", "6:00 - 6:59pm", "7:00 - 7:59pm", "8:00 - 8:59pm", "9:00 - 9:59pm", "10:00 - 10:59pm", "11:00 - 11:59pm", "12:00 - 12:59am", "1:00 - 1:59am"];
var shops = [beaverton, hillsboro, downtown, northeast, clackamas, airport];
var countArray = [];
var perShopTotal = [];
var allShopTotal = [];
var pizzaShopTotals = [];

var pizzaResult;
var deliveryResult;
var driversResult;
var wrapper;

function random(min,max) {
  var randomResult = Math.floor(Math.random() * ((max - min) + 1) + min);
  return randomResult;
}

/******************************************************************************/
/************************** HERE LIES MY FRUSTRATION **************************/
/******************************************************************************/

// THIS WAS THE ORIGNAL IDEA I HAD FOR HOW TO ACCOMPLISH THIS WITH PULLING THE PIERANGE AND DELRANGE FROM MY CONSTRUCTORS OBJECTS

// function pizzas() {
//   for (y = 0; y < universal.timeBlocks.length; y++) { // repeat for each row
//     var pizzaTotal;
//     min = universal.shops[0].pieRange[y][0]; //**refactor here to take individual shops
//     max = universal.shops[0].pieRange[y][1]; //**refactor here to take individual shops
//     random(min,max);
//     console.log(pizzaTotal);
//     return pizzaTotal;
// pizzaResult.push(random(universal.shops[0].pieRange[y][0],universal.shops[0].pieRange[y][1])) ;
//
//   } // close the y loop
//
// } // close the pizzas function

// ANOTHER IDEA, TRYING TO TAKE SOME OF THE LOOPS OUT OF THE FUNCTION...

// function pizzas(x) {
//
//     for (y = 0; y < timeBlocks.length; y++) { // repeat for each row
//       min = shops[x].pieRange[y][0];
//       max = shops[x].pieRange[y][1];
//       pizzaResult = random(min,max);
//       return pizzaResult;
//     }
//
// }

// THIS WAS MY SECOND ATTEMPT AT REFACTORING IT OUT STEP BY STEP (IE. CALCULATE THE RANDOM PIZZAS BAKED FOR A SINGLE TIME BLOCK, LOOP THAT PROCESS TO FIGURE OUT ALL THE TIME BLOCKS FOR THAT STORE, PUSH ALL THOSE VALUES TO AN ARRAY, REDUCE THE ARRAY AND PUSH TO A NEW ARRAY WHERE WE STORE EACH STORE'S TOTAL...) BUT NOW I'M GETTING AN UNDEFINED AND CAN'T FIGURE OUT WHERE IT'S COMING FROM.

// var get = {
//   pizza : function (x,y) { // calculates pizza totals for a single time slot for store x
//     pizzaResultB = random(shops[x].pieRange[y][0], shops[x].pieRange[y][1]);
//     return pizzaResultB;
//   },
//   shopTotals : function (x) { //
//     for (y = 0; y < timeBlocks.length; y++) { // repeats along all the rows of a single table, push all those values to a storeTotal array, reduce that array and save to a new array that will store all store totals together
//       this.pizza(x,y);
//
//       return pizzaShopTotals;
//     }
//   },
// }

// pizzaResult.push(random(universal.shops[0].pieRange[y][0],universal.shops[0].pieRange[y][1])) ;
// var shopTotal = pizzaResult.reduce(function(a,b) {return a+b;});


/******************************************************************************/
/****************************** OLD CALCULATIONS ******************************/
/******************************************************************************/

pieRange = [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]];
delRange = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]];

var my = {
  pizzas : function(x) {
    pizzaResult = random(pieRange[x][0],pieRange[x][1]);
    // console.log("# Pizzas: " + pizzaResult);
    return pizzaResult;
  },
  deliveries : function(y) {
    this.pizzas(y);
    // console.log("# Potential Deliveries: " + delRange[y][1]);
    deliveryResult = 0;
    if (pizzaResult == 0) { // when pizza = 0, make the deliveries needed 0
      deliveryResult = 0;
      // console.warn("# DELIVERIES MODIFIED: when pizza = 0, deliveries = 0");
      return deliveryResult;
    }
    // if the max number of deliveries is higher (but not equal to) than the number of pizzas baked, cap the number of deliveries at # pizzas.
    else if (delRange[y][1] > pizzaResult) {
      deliveryResult = random(1, pizzaResult);
      // console.warn("# DELIVERIES MODIFIED: fewer pizzas than deliveries made, cap deliveries: " + deliveryResult);
      return deliveryResult;
    }
    // if there are more than zero pizzas, make sure the delivery minimum is at least one
    else if (pizzaResult > 0) {
      deliveryResult = random(1, pizzaResult);
      // console.warn("# DELIVERIES MODIFIED: has pizza but min delivery is 0, new min of 1 delivery: " + deliveryResult);
      return deliveryResult;
    }
    else if (deliveryResult > pizzaResult) {
      confirm("ruh roh shaggy, there are too many deliveries!");
    }
    else {
      confirm("the fuck did you do?");
    }
    return deliveryResult;
  },
  drivers : function(z) {
    this.pizzas(z);
    this.deliveries(z);
    driversResult = 0;
    // console.log("# Pizzas: " + pizzaResult);
    // console.log("# Deliveries: " + deliveryResult);
    driversResult = Math.ceil(deliveryResult / 3);
    // console.log("# Drivers: " + driversResult);
    // console.log("----------------------------------------");
    return driversResult;
  }
};

/******************************************************************************/
/************************* APPENDING DATA TO THE PAGE *************************/
/******************************************************************************/

for (i = 0; i < shops.length; i++) { // creates as many tables as there are shop objects

  function generate_table() {

      // get the reference for where you want the table placed
      var body = document.getElementsByTagName("body")[0];

      var wrapper = document.getElementById("tableWrapper");

      // creates <table> and puts it in tableWrapper
      var tbl = document.createElement("table");
        wrapper.appendChild(tbl);

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

              // pulls the text for the shopLoc <th> from the universal.shops[i].locations array
              var locName = document.createTextNode(shops[i].location);
              shopLoc.appendChild(locName);

          // creates the colHead <tr> and puts it in <thead>
          var colHead = document.createElement("tr");
            tblHead.appendChild(colHead);

            // creates the <th>s in the colHead <tr>
            for (j = 0; j < colHeadings.length; j++) { // creates as many columns as there are colHeadings

              // creates the <th>s in the colHead <tr>
              var colTitle = document.createElement("th");
                  colHead.appendChild(colTitle);

                  // pulls the text for the colTitle <th> from the universal.colHeadings array
                  var colName = document.createTextNode(colHeadings[j]);
                  colTitle.appendChild(colName);

            } // closes for (j) loop

        //creates <tbody> and puts it in <table>
        var tblBody = document.createElement("tbody");
          tbl.appendChild(tblBody);

          // creating all cells within the <tbody>
          for (k = 0; k < timeBlocks.length; k++) { // creates as many rows as there are timeBlocks

            var numDriversText = document.createTextNode(my.drivers(k)); // this has to be called here so that all sections that follow have numbers generate for them to fill in.

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

              var numPizzasText = document.createTextNode(pizzaResult);
              numPizzas.appendChild(numPizzasText);
              row.appendChild(numPizzas);
              countArray.push(pizzaResult);

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

console.log("Weekly All-Shop Total: " + myTotal);

/******************************************************************************/
/*********************************** THE END **********************************/
/******************************************************************************/
