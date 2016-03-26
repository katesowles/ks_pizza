function generate_table(shopIndex) {

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
            shopLoc.appendChild(shopLocation);

        var colHead = document.createElement("tr"); // creates the colHead <tr> and puts it in <thead>
          tblHead.appendChild(colHead);

          for (colheadingIndex = 0; colheadingIndex < colHeadings.length; colheadingIndex++) { // creates as many columns as there are colHeadings

            var colTitle = document.createElement("th"); // creates the <th>s in the colHead <tr>

                colHead.appendChild(colTitle);

                var colName = document.createTextNode(colHeadings[colheadingIndex]); // pulls the text for the colTitle <th> from the universal.colHeadings array
                colTitle.appendChild(colName);

          } // closes for (colheadingIndex) loop

        //   //creates <tbody> and puts it in <table>
        //   var tblBody = document.createElement("tbody");
        //     tbl.appendChild(tblBody);
          //
        //     // creating all cells within the <tbody>
        //     for (repeatByTimeBlock = 0; repeatByTimeBlock < timeBlocks.length; repeatByTimeBlock++) { // creates as many rows as there are timeBlocks
          //
        //       var numDriversText = document.createTextNode(drivers(shops[repeatByTimeBlock])); // this has to be called here so that all sections that follow have numbers generate for them to fill in.
          //
        //       // creates a <tr> and adds it to <tbody>
        //       var row = document.createElement("tr");
        //       tblBody.appendChild(row);
          //
        //         // creates the timeCell <td> and adds it the <tr> (this is the first TIME column)
        //         var timeCell = document.createElement("td");
        //         var timeCellText = document.createTextNode(timeBlocks[repeatByTimeBlock]);
        //         timeCell.appendChild(timeCellText);
        //         row.appendChild(timeCell);
          //
        //         // creates the numPizza <td> and adds it the <tr> (this is the second #Pizza column)
        //         var numPizzas = document.createElement("td");
        //         numPizzas.className = 'pizzaResults';
        //         var numPizzasText = document.createTextNode(pizzaResult[repeatByTimeBlock]);
        //         numPizzas.appendChild(numPizzasText);
        //         row.appendChild(numPizzas);
        //         countArray.push(pizzaResult);
          //
        //         // creates the numDeliveries <td> and adds it the <tr> (this is the third #Deliveries column)
        //         var numDeliveries = document.createElement("td");
        //         var numDeliveriesText = document.createTextNode(deliveryResult);
        //         numDeliveries.appendChild(numDeliveriesText);
        //         row.appendChild(numDeliveries);
          //
        //         // creates the numDrivers <td> and adds it the <tr> (this is the fourth #Drivers column)
        //         var numDrivers = document.createElement("td");
        //         // var numDriversText = document.createTextNode(my.drivers(i));
        //         numDrivers.appendChild(numDriversText);
        //         row.appendChild(numDrivers);
          //
        //     }; // closes the repeatByTimeBlock loop
        } // closes the tableGenerator function
