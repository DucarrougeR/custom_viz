looker.plugins.visualizations.add({
  id: "transposed_table",
  label: "Transposed Table",
  options: {
    font_size: {
      type: "string",
      label: "Font Size",
      values: [
        {"Large": "large"},
        {"Small": "small"}
      ],
      display: "radio",
      default: "large"
    }
  },
  // Set up the initial state of the visualization
  create: function(element, config) {

    // Insert a <style> tag with some styles we'll use later.
    var css = element.innerHTML = `
      <style>
        .table-vis {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: left;
          text-align: left;
        }
      </style>
    `;

    // Create a container element to let us center the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "table-vis";

    // Create an element to contain the text.
    this._textElement = container.appendChild(document.createElement("div"));

  },
  // Render in response to the data or settings changing
  update: function(data, element, config, queryResponse) {

    // Clear any errors from previous updates
    this.clearErrors();

    // Throw some errors and exit if the shape of the data isn't what this chart needs
    if (queryResponse.fields.dimensions.length == 0) {
      this.addError({title: "No Dimensions", message: "This chart requires dimensions."});
      return;
    } else if (queryResponse.fields.measures.length == 0) {
      this.addError({title: "No Measures", message: "This chart requires measures."});
      return;
    }

    // console.log('log data '+data.length);
    // var results_dimension = [];
    // var results_measure = [];
    // // go thru all the rows of data
    // for (var row=0; row < data.lenght; row++){
    //   var row_data = data[row];

    // // go thru all dimensions
    //   for (var dim=0; dim < (row_data[queryResponse.fields.dimensions]).length; dim++) {
    //     var vis_dimension = row_data[queryResponse.fields.dimensions[dim].name];
    //     results_dimension.push(vis_dimension)
    // }

    // // go thru all measures
    //   for (var meas=0; meas < (row_data[queryResponse.fields.measures]).length; meas++) {
    //     var vis_measure = row_data[queryResponse.fields.measures[meas].name];
    //     results_measure.push(vis_dimension)
    // }
    //   console.log('log measures '+results_measure);
    //   console.log('log dimensions '+results_dimension);
    // }
    // this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(results_dimension);
    // this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(results_measure);

// for (var x in data){
//       this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(x.queryResponse.fields.dimensions.name);
// }


    var firstRow = data[0];
    var firstCell = firstRow[queryResponse.fields.dimensions[0].name];
    var secondCell = firstRow[queryResponse.fields.dimensions[1].name];
    var thirdCell = firstRow[queryResponse.fields.measures[0].name];
//     var row_1_data = [firstCell, secondRow, thirdCell];
//     // Grab the second row of data
//     var secondRow = data[1];
    var s_firstCell = secondRow[queryResponse.fields.dimensions[0].name];
    var s_secondCell = secondRow[queryResponse.fields.dimensions[1].name];
    var s_thirdCell = secondRow[queryResponse.fields.measures[0].name];

    // console.log("length data: " + data.length);


    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(firstCell);
    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(secondCell);
    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(thirdCell);
      this._textElement.innerHTML += "<br>"
    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(s_firstCell);
    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(s_secondCell);
    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(s_thirdCell);
      this._textElement.innerHTML += "<br>"
    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(data.length);
    this._textElement.innerHTML += LookerCharts.Utils.htmlForCell(firstRow.length);

    // }
  // }

    // Set the size to the user-selected size
    // if (config.font_size == "small") {
    //   this._textElement.className = "hello-world-text-small";
    // } else {
    //   this._textElement.className = "hello-world-text-large";
    // }

  }
});