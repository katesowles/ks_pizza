function random(min,max) {
    var randomResult = Math.floor(Math.random() * ((max - min) + 1) + min);
    return randomResult;
}
function weeklyPizzaTotal () {
    var pizzaTotal = 0;
    for (repeatByNumShops2 = 0; repeatByNumShops2 < shops.length; repeatByNumShops2++) {
        pizzaTotal += shops[repeatByNumShops2].getPizzaTotal();
    }
    return pizzaTotal;
}

var colHeadings = ["Time", "# Pizzas", "# Deliveries", "# Drivers"];
var timeBlocks = ["8:00 - 8:59am", "9:00 - 9:59am", "10:00 - 10:59am", "11:00 - 11:59am", "12:00 - 12:59pm", "1:00 - 1:59pm", "2:00 - 2:59pm", "3:00 - 3:59pm", "4:00 - 4:59pm", "5:00 - 5:59pm", "6:00 - 6:59pm", "7:00 - 7:59pm", "8:00 - 8:59pm", "9:00 - 9:59pm", "10:00 - 10:59pm", "11:00 - 11:59pm", "12:00 - 12:59am", "1:00 - 1:59am"];

var Shop = function createShop(shopLoc, address, cityState, pieRange, delRange) {
    this.shopLoc = shopLoc;
    this.address = address;
    this.cityState = cityState;
    this.pieRange = pieRange;
    this.delRange = delRange;
    this.pizzaByHour = [];
    this.deliveryByHour = [];
    this.driverByHour = [];
    this.calcPizzaByHour = function() {
        for (var repeatByTimeBlock = 0; repeatByTimeBlock < timeBlocks.length; repeatByTimeBlock++) {
            var min = this.pieRange[repeatByTimeBlock][0];
            var max = this.pieRange[repeatByTimeBlock][1];
            var randomizer = random(min,max);
            this.pizzaByHour.push(randomizer);
        }
    };
    this.getPizzaTotal = function () {
        return this.pizzaByHour.reduce(function(a,b) {
            return a+b;
        });
    };
    this.calcDeliveryByHour = function() {
        for (repeatByTimeBlock2 = 0; repeatByTimeBlock2 < timeBlocks.length; repeatByTimeBlock2++) {
            hourlyDeliveryTotal = 0;
            if (this.pizzaByHour[repeatByTimeBlock2] == 0) { // when pizza = 0, make the deliveries needed 0
              hourlyDeliveryTotal = 0;
            //   console.warn("# DELIVERIES MODIFIED: when pizza = 0, deliveries = 0");
            }
            else if (this.delRange[repeatByTimeBlock2][1] > this.pizzaByHour[repeatByTimeBlock2]) { // if the max number of deliveries is higher (but not equal to) than the number of pizzas baked, cap the number of deliveries at # pizzas.
              hourlyDeliveryTotal = random(1, this.pizzaByHour[repeatByTimeBlock2]);
            //   console.warn("# DELIVERIES MODIFIED: fewer pizzas than deliveries made, cap deliveries: " + hourlyDeliveryTotal);
            }
            else if (this.pizzaByHour[repeatByTimeBlock2] > 0) { // if there are more than zero pizzas, make sure the delivery minimum is at least one
              hourlyDeliveryTotal = random(1, this.pizzaByHour[repeatByTimeBlock2]);
            //   console.warn("# DELIVERIES MODIFIED: has pizza but min delivery is 0, new min of 1 delivery: " + hourlyDeliveryTotal);
            }
            else if (hourlyDeliveryTotal > this.pizzaByHour[repeatByTimeBlock2]) {
              confirm("ruh roh shaggy, there are too many deliveries!");
            }
            else {
              confirm("the fuck did you do?");
            }
            this.deliveryByHour.push(hourlyDeliveryTotal);
            // console.log(this.deliveryByHour.length);
        }
    }
    this.calcDriversByHour = function() {
        for (repeatByTimeBlock3 = 0; repeatByTimeBlock3 < timeBlocks.length; repeatByTimeBlock3++) {
            // console.log("# Pizzas: " + pizzaResult);
            // console.log("# Deliveries: " + hourlyDeliveryTotal);
            this.driverByHour.push(Math.ceil(this.deliveryByHour[repeatByTimeBlock3] / 3));
            // console.log("# Drivers: " + driversResult);
            // console.log("----------------------------------------");
        }
    }
}

function getHourlyPizzaTotals(repeatByTimeBlock4) {
        var total = 0;
        for (shop = 0; shop < shops.length; shop++) {
            total += shops[shop].pizzaByHour[repeatByTimeBlock4];
        }
        return total;
    }

function getHourlyDeliveryTotals(repeatByTimeBlock4) {
        var total = 0;
        for (shop = 0; shop < shops.length; shop++) {
            total += shops[shop].deliveryByHour[repeatByTimeBlock4];
        }
        return total;
    }

function getHourlyDriverTotals(repeatByTimeBlock4) {
        var total = 0;
        for (shop = 0; shop < shops.length; shop++) {
            total += shops[shop].driverByHour[repeatByTimeBlock4];
        }
        return total;
    }

var beaverton = new Shop (
    "Beaverton",
    "620 Olney Avenue",
    "Beaverton, OR",
    [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]],
    [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]]
);
var hillsboro = new Shop (
"Hillsboro",
"6715 SE 1st Avenue",
"Hillsboro, OR",
[[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]],
[[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]]
);
var downtown = new Shop (
"Downtown",
"770 W Burnside",
"Portland, OR",
[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[10,26],[10,26],[10,26],[8,22],[8,22],[8,22],[0,2],[0,2],[0,2]],
[[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[4,6],[4,6],[4,6],[7,15],[7,15],[7,15],[2,8],[2,8],[2,8]]
);
var northeast = new Shop (
"Northeast",
"215 Broadway Street",
"Portland, OR",
[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[5,15],[5,15],[5,15],[25,39],[25,39],[25,39],[22,36],[22,36],[22,36],[5,21],[5,21],[5,21]],
[[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[13,18],[13,18],[13,18],[5,22],[5,22],[5,22],[16,31],[16,31],[16,31]]
);
var clackamas = new Shop (
"Clackamas",
"51511 SE 2nd Street",
"Clackamas, OR",
[[2,7],[2,7],[2,7],[3,8],[3,8],[3,8],[1,5],[1,5],[1,5],[5,13],[5,13],[5,13],[22,41],[22,41],[22,41],[15,20],[15,20],[15,20]],
[[3,5],[3,5],[3,5],[3,9],[3,9],[3,9],[1,4],[1,4],[1,4],[2,4],[2,4],[2,4],[15,42],[15,42],[15,42],[6,21],[6,21],[6,21]]
);
var airport = new Shop (
"Airport",
"78 E. Harbor Street",
"Portland, OR",
[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[6,9],[6,9],[6,9],[4,8],[4,8],[4,8],[2,4],[2,4],[2,4]],
[[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[5,18],[5,18],[5,18],[2,5],[2,5],[2,5],[3,11],[3,11],[3,11]]
);

var shops = [beaverton, hillsboro, downtown, northeast, clackamas, airport];

for (repeatByNumShops = 0; repeatByNumShops < shops.length; repeatByNumShops++ ) {
    generateShopTables(repeatByNumShops)
}

generateHourlyTable();

var counterSpan = document.getElementById("counterSpan");
counterSpan.textContent = (7 * weeklyPizzaTotal());

/******************************************************************************/
/******************* WHEREIN WE GENERATE THE TABLE CONTENTS *******************/
/******************************************************************************/

function generateShopTables(shopIndex) {
    var body = document.getElementsByTagName("body")[0]; // get the reference for where you want the table placed

    var wrapper = document.getElementById("tableWrapper");

    var tbl = document.createElement("table"); // creates <table> and puts it in tableWrapper
    wrapper.appendChild(tbl);

    var tblHead = document.createElement("thead"); // creates <thead> and puts it in <table>
    tbl.appendChild(tblHead);

    var shopHead = document.createElement("tr"); // creates the shopHead <tr> and puts it in <thead>
    tblHead.appendChild(shopHead);

    var shopName = document.createElement("th"); // creates the <th> in the shopHead <tr>
    shopName.setAttribute("colspan", "4"); // sets the colspan attribute of tbl to 4;
    shopHead.appendChild(shopName);

    var shopLocation = document.createTextNode(shops[shopIndex].shopLoc); // pulls the text for the shopLoc <th> from the universal.shops[i].locations array
    shopName.appendChild(shopLocation);

    var colHead = document.createElement("tr"); // creates the colHead <tr> and puts it in <thead>
    tblHead.appendChild(colHead);

    for (colheadingIndex = 0; colheadingIndex < colHeadings.length; colheadingIndex++) { // creates as many columns as there are colHeadings

        var colTitle = document.createElement("th"); // creates the <th>s in the colHead <tr>
        colHead.appendChild(colTitle);

        var colName = document.createTextNode(colHeadings[colheadingIndex]); // pulls the text for the colTitle <th> from the universal.colHeadings array
        colTitle.appendChild(colName);

    } // closes for (colheadingIndex) loop

    //creates <tbody> and puts it in <table>
    var tblBody = document.createElement("tbody");
    tbl.appendChild(tblBody);

    shops[shopIndex].calcPizzaByHour();
    shops[shopIndex].calcDeliveryByHour();
    shops[shopIndex].calcDriversByHour();

    // creating all cells within the <tbody>
    for (repeatByTimeBlock = 0; repeatByTimeBlock < timeBlocks.length; repeatByTimeBlock++) { // creates as many rows as there are timeBlocks

        // creates a <tr> and adds it to <tbody>
        var row = document.createElement("tr");
        tblBody.appendChild(row);

        // creates the timeCell <td> and adds it the <tr> (this is the first TIME column)
        var timeCell = document.createElement("td");
        var timeCellText = document.createTextNode(timeBlocks[repeatByTimeBlock]);
        timeCell.appendChild(timeCellText);
        row.appendChild(timeCell);

        // creates the numPizza <td> and adds it the <tr> (this is the second #Pizza column)
        var pizzaCell = document.createElement("td");
        pizzaCell.className = 'pizzaResults';
        var pizzaCellText = document.createTextNode(shops[shopIndex].pizzaByHour[repeatByTimeBlock]);
        pizzaCell.appendChild(pizzaCellText);
        row.appendChild(pizzaCell);

        // creates the numDeliveries <td> and adds it the <tr> (this is the third #Deliveries column)
        var deliveryCell = document.createElement("td");
        var deliveryCellText = document.createTextNode(shops[shopIndex].deliveryByHour[repeatByTimeBlock]);
        deliveryCell.appendChild(deliveryCellText);
        row.appendChild(deliveryCell);

        // creates the numDrivers <td> and adds it the <tr> (this is the fourth #Drivers column)
        var driverCell = document.createElement("td");
        var driverCellText = document.createTextNode(shops[shopIndex].driverByHour[repeatByTimeBlock]);
        driverCell.appendChild(driverCellText);
        row.appendChild(driverCell);

    }; // closes the repeatByTimeBlock loop

    var tblFoot = document.createElement("tfoot"); // creates <thead> and puts it in <table>
    tbl.appendChild(tblFoot);

    var totalFoot = document.createElement("tr"); // creates the shopHead <tr> and puts it in <thead>
    tblFoot.appendChild(totalFoot);

    var storeTotal = document.createElement("th"); // creates the <th> in the shopHead <tr>
    storeTotal.setAttribute("colspan", "4"); // sets the colspan attribute of tbl to 4;
    totalFoot.appendChild(storeTotal);

    var total = document.createTextNode("This Store's Daily Total: " + shops[shopIndex].getPizzaTotal()); // pulls the text for the shopLoc <th> from the universal.shops[i].locations array
    storeTotal.appendChild(total);

} // closes the tableGenerator function

/******************************************************************************/
/***************** WHEREIN WE GENERATE THE HOURLY TOTAL TABLE *****************/
/******************************************************************************/

function generateHourlyTable() {
    var body = document.getElementsByTagName("body")[0]; // get the reference for where you want the table placed

    var wrapper = document.getElementById("tableWrapper");

    var tbl = document.createElement("table"); // creates <table> and puts it in tableWrapper
    wrapper.appendChild(tbl);

    var tblHead = document.createElement("thead"); // creates <thead> and puts it in <table>
    tbl.appendChild(tblHead);

    var shopHead = document.createElement("tr"); // creates the shopHead <tr> and puts it in <thead>
    tblHead.appendChild(shopHead);

    var shopName = document.createElement("th"); // creates the <th> in the shopHead <tr>
    shopName.setAttribute("colspan", "4"); // sets the colspan attribute of tbl to 4;
    shopHead.appendChild(shopName);

    var shopLocation = document.createTextNode("Daily All-Shop Totals"); // pulls the text for the shopLoc <th> from the universal.shops[i].locations array
    shopName.appendChild(shopLocation);

    var colHead = document.createElement("tr"); // creates the colHead <tr> and puts it in <thead>
    tblHead.appendChild(colHead);

    for (colheadingIndex = 0; colheadingIndex < colHeadings.length; colheadingIndex++) { // creates as many columns as there are colHeadings

        var colTitle = document.createElement("th"); // creates the <th>s in the colHead <tr>
        colHead.appendChild(colTitle);

        var colName = document.createTextNode(colHeadings[colheadingIndex]); // pulls the text for the colTitle <th> from the universal.colHeadings array
        colTitle.appendChild(colName);

    } // closes for (colheadingIndex) loop

    //creates <tbody> and puts it in <table>
    var tblBody = document.createElement("tbody");
    tbl.appendChild(tblBody);

    // shops[shopIndex].calcPizzaByHour();
    // shops[shopIndex].calcDeliveryByHour();
    // shops[shopIndex].calcDriversByHour();

    // creating all cells within the <tbody>
    for (repeatByTimeBlock = 0; repeatByTimeBlock < timeBlocks.length; repeatByTimeBlock++) { // creates as many rows as there are timeBlocks

        // creates a <tr> and adds it to <tbody>
        var row = document.createElement("tr");
        tblBody.appendChild(row);

        // creates the timeCell <td> and adds it the <tr> (this is the first TIME column)
        var timeCell = document.createElement("td");
        var timeCellText = document.createTextNode(timeBlocks[repeatByTimeBlock]);
        timeCell.appendChild(timeCellText);
        row.appendChild(timeCell);

        // creates the numPizza <td> and adds it the <tr> (this is the second #Pizza column)
        var pizzaCell = document.createElement("td");
        pizzaCell.className = 'pizzaResults';
        var pizzaCellText = document.createTextNode(getHourlyPizzaTotals(repeatByTimeBlock));
        pizzaCell.appendChild(pizzaCellText);
        row.appendChild(pizzaCell);

        // creates the numDeliveries <td> and adds it the <tr> (this is the third #Deliveries column)
        var deliveryCell = document.createElement("td");
        var deliveryCellText = document.createTextNode(getHourlyDeliveryTotals(repeatByTimeBlock));
        deliveryCell.appendChild(deliveryCellText);
        row.appendChild(deliveryCell);

        // creates the numDrivers <td> and adds it the <tr> (this is the fourth #Drivers column)
        var driverCell = document.createElement("td");
        var driverCellText = document.createTextNode(getHourlyDriverTotals(repeatByTimeBlock));
        driverCell.appendChild(driverCellText);
        row.appendChild(driverCell);

    }; // closes the repeatByTimeBlock loop

} // closes the tableGenerator function

/******************************************************************************/
/**************** WHEREIN WE PUSH THE FORM CONTENT TO THE TABLE ***************/
/******************************************************************************/

var newStoreSubmission = document.getElementById("submit");

newStoreSubmission.addEventListener("click", function () {

    var newShopLoc = document.getElementById("newShopLoc").value;

    var newStoreArray = [];

    newStoreArray.push(newShopLoc);         // pushes shop location
    newStoreArray.push(); // push shop address
    newStoreArray.push(); // push shop city state
    newStoreArray.push(); // push pizza min
    newStoreArray.push(); // push pizza max
    newStoreArray.push(); // push delivery min
    newStoreArray.push(); // push delivery max

    var userSubmittedStore = new Shop(newStoreArray[0], newStoreArray[1], newStoreArray[2], newStoreArray[3], newStoreArray[4], newStoreArray[5], newStoreArray[6])

    // __.push(userSubmittedStore);
    generateTable(userSubmittedStore);


});
