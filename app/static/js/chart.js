document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var initialData = {
      labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05', '2024-01-06'], // Sample date labels
      datasets: [
        {
          label: 'Actual Cases',
          data: [12, 19, 3, 5, 2, 3], // Initial data for actual cases
          borderColor: 'rgba(255, 99, 132, 1)', // Red color for actual cases
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // Optional background color
          borderWidth: 1
        },
        {
          label: 'Predicted Cases',
          data: [10, 15, 4, 7, 3, 5], // Initial data for predicted cases
          borderColor: 'rgba(54, 162, 235, 1)', // Blue color for predicted cases
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Optional background color
          borderWidth: 1
        }
      ]
  };
  var myChart = new Chart(ctx, {
    type: 'line',
    data: initialData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'time', // Use 'time' scale for x-axis
          time: {
            unit: 'day', // Unit to display
            tooltipFormat: 'll' // Format for tooltip
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });

  var mapUrl = '{% static "map/philippines-topo2.json" %}'; // Adjust this path as necessary

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

              // Fetch new data based on the selected region
              var regionName = d.properties.REGION;
              var newData = getRegionData(regionName);

              // Update chart data
              myChart.data.datasets[0].data = newData.actualCases;
              myChart.data.datasets[1].data = newData.predictedCases;
              myChart.update();
          });
  }).catch(function(error) {
      console.error("Error loading or parsing TopoJSON file:", error);
  });

  function getRegionData(region) {
      // Define your region-specific datasets here
      var datasets = {
          'Ilocos Region (Region I)': {
              actualCases: [10, 20, 30, 40, 50, 60],
              predictedCases: [12, 22, 32, 42, 52, 62]
          },
          'Cagayan Valley (Region II)': {
              actualCases: [8, 18, 28, 38, 48, 58],
              predictedCases: [10, 20, 30, 40, 50, 60]
          },
          'Central Luzon (Region III)': {
              actualCases: [15, 25, 35, 45, 55, 65],
              predictedCases: [14, 24, 34, 44, 54, 64]
          },
          'Metropolitan Manila': {
              actualCases: [50, 100, 150, 200, 250, 300],
              predictedCases: [55, 105, 155, 205, 255, 305]
          },
          'CALABARZON (Region IV-A)': {
              actualCases: [20, 40, 60, 80, 100, 120],
              predictedCases: [22, 42, 62, 82, 102, 122]
          },
          'MIMAROPA (Region IV-B)': {
              actualCases: [12, 24, 36, 48, 60, 72],
              predictedCases: [15, 28, 41, 54, 67, 80]
          },
          'Bicol Region (Region V)': {
              actualCases: [5, 15, 25, 35, 45, 55],
              predictedCases: [7, 17, 27, 37, 47, 57]
          },
          'Western Visayas (Region VI)': {
              actualCases: [18, 28, 38, 48, 58, 68],
              predictedCases: [20, 30, 40, 50, 60, 70]
          },
          'Central Visayas (Region VII)': {
              actualCases: [10, 30, 50, 70, 90, 110],
              predictedCases: [12, 32, 52, 72, 92, 112]
          },
          'Eastern Visayas (Region VIII)': {
              actualCases: [7, 17, 27, 37, 47, 57],
              predictedCases: [9, 19, 29, 39, 49, 59]
          },
          'Zamboanga Peninsula (Region IX)': {
              actualCases: [13, 23, 33, 43, 53, 63],
              predictedCases: [14, 24, 34, 44, 54, 64]
          },
          'Northern Mindanao (Region X)': {
              actualCases: [22, 42, 62, 82, 102, 122],
              predictedCases: [25, 45, 65, 85, 105, 125]
          },
          'Davao Region (Region XI)': {
              actualCases: [22, 42, 62, 82, 102, 122],
              predictedCases: [25, 45, 65, 85, 105, 125]
          },
          'Caraga (Region XIII)': {
              actualCases: [3, 13, 23, 33, 43, 53],
              predictedCases: [5, 15, 25, 35, 45, 55]
          },
          'SOCCSKSARGEN (Region XII)': {
              actualCases: [16, 26, 36, 46, 56, 66],
              predictedCases: [18, 28, 38, 48, 58, 68]
          },
          'Cordillera Administrative Region (CAR)': {
              actualCases: [16, 26, 36, 46, 56, 66],
              predictedCases: [18, 28, 38, 48, 58, 68]
          },
          'Autonomous Region of Muslim Mindanao (ARMM)': {
              actualCases: [16, 26, 36, 46, 56, 66],
              predictedCases: [18, 28, 38, 48, 58, 68]
          }
      };
      

      // Return data for the selected region
      return datasets[region] || {actualCases: [], predictedCases: []};
  }
});


/* Doughnut */
const data = {
labels: ['cough', 'fever','trangkaso'],
datasets: [{
label: 'My First Dataset',
data: [300, 50, 100],
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)'
],
hoverOffset: 4
}]
};

// Chart configuration
const config = {
type: 'doughnut',
data: data,
options: {}
};

// Create the chart
var myChart = new Chart(
document.getElementById('myChart2'),
config
);