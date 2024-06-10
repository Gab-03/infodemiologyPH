document.addEventListener("DOMContentLoaded", function() {
    var mapUrl = '/static/map/philippines-topo2.json'; // Adjust this path as necessary

    var width = 300,
        height = 600; // Adjusted height to make the map more visible

    var svg = d3.select("#map-container").append("svg")
        .attr("class", "centered-svg")
        .attr("width", width)
        .attr("height", height);

    d3.json(mapUrl).then(function(data) {
        // Check if the expected object exists in the TopoJSON data
        if (!data || !data.objects || !data.objects.philippines) {
            console.error("Invalid TopoJSON file or object structure.");
            return;
        }

        var philippines = data.objects.philippines;

        // Define a color scale
        var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        // Adjust projection scale and translation for a larger map
        var projection = d3.geoMercator()
            .fitSize([width, height], topojson.feature(data, philippines));

        var path = d3.geoPath().projection(projection);

        // Draw the map and color regions
        svg.selectAll("path")
            .data(topojson.feature(data, philippines).features)
            .enter().append("path")
            .attr("d", path)
            .style("fill", function(d) {
                // Assign color based on region
                return colorScale(d.properties.REGION);
            })
            .on("click", function(event, d) {
                // Display the region name when clicked
                d3.select("#region-name").text(d.properties.REGION);
            });
    }).catch(function(error) {
        console.error("Error loading or parsing TopoJSON file:", error);
    });
});

/* Charts */

