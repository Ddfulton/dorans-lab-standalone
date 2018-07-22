var width = 500;
var height = 500;
var svg = d3.select("body").select("#content").append("svg").attr("width", width).attr("height", height);
var x = d3.scaleLinear().rangeRound([0, 500]); // x(1) = pixel(1000), x(.5) = pixel(500);
var y = d3.scaleLinear().rangeRound([0, 500]);

var axis = d3.axisRight(y);
axis.tickValues([0,25,50,75,100]);
svg.append("g").attr("transform", "translate(50,30)").call(axis)

