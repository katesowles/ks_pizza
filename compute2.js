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
