// Set up canvas
var width = 600, height = 600;

var data = [-100, 0, 50, 100];
var svg = d3.select("#content")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var xscale = d3.scaleLinear()
    .domain([d3.min(data), d3.max(data)]) // Domain shows the domain of the tick marks
    .range([0, width]); // Range shows how many pixels it spans across

var yscale = d3.scaleLinear()
        .domain([d3.min(data), d3.max(data)])
        .range([width, 0]);

var x_axis = d3.axisBottom()
        .scale(xscale);

var y_axis = d3.axisLeft()
        .scale(yscale);


var yAxisTranslate = height/2;
    svg.append("g")
    	.attr("transform", "translate("+ yAxisTranslate+ ", 0)")
       .call(y_axis);

var xAxisTranslate = width/2;

    svg.append("g")
            .attr("transform", "translate(0,"+ xAxisTranslate+ ")")
            .call(x_axis)

function x(x) {
	return (width/2) + x*(width/200);
}

function y(y) {
	return ((height/2) - y*(height/200));
}

var topChampions = {
	"Taliyah": [-60,-75, "blue"],
	"Evelynn": [-50, -73, "blue"],
	"Nidalee": [-52, -86, "blue"],
	"Trundle": [70, 70, "yellow"],
	"Nunu": [76, 81, "yellow"],
	"Mundo": [79, 88, "yellow"]
}

function Clear() {
	// Bring them all to center
	d3.selectAll(".champion-text")
	// .transition()
	// .duration(1000)
	// .style("font-size", "0px")
	.remove();

	d3.selectAll("circle")
	// .transition()
	// .duration(1000)
	// .attr("r", 0)
	.remove();
}

function Top() {
	var champs = Object.keys(topChampions);

	Clear();

	// Put them in middle then expand to right places
	for (var i = 0; i < champs.length; i++) {
		var c = champs[i];
		var cx = topChampions[c][0];
		var cy = topChampions[c][1];
		
		// Create circle
		d3.selectAll("svg")
			.append("circle")
			.attr("cx", x(0))
			.attr("cy", y(0))
			.attr("r", 5)
			.style("fill", "trnasparent")
			.attr("id", c)
			.attr("class", "champPoint");

		d3.selectAll("svg")
			.append("svg:text")
			.attr("id", c)
			.attr("class", "champion-text")
			.text(c)
			.style("font-size", "10px")
			.attr("x", x(0))
			.attr("y", y(0));

		d3.selectAll("circle#" + c)
			.transition()
			.duration(2000)
			.attr("cx", x(topChampions[c][0]))
			.attr("cy", y(topChampions[c][1]))
			.attr("x", x(topChampions[c][0]+1))
			.attr("y", y(topChampions[c][1]+1))
			.style("fill", topChampions[c][2]);

		d3.selectAll("text#" + c)
			.transition()
			.duration(2000)
			.attr("cx", x(topChampions[c][0]))
			.attr("cy", y(topChampions[c][1]))
			.attr("x", x(topChampions[c][0]-2))
			.attr("y", y(topChampions[c][1]+1));
	}	


}





































