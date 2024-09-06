// <script>
// document.addEventListener('DOMContentLoaded', function () {
//     var ctx = document.getElementById('myChart').getContext('2d');
//     var initialData = {
//         labels: [
//         '2020-02-01', '2020-02-02', '2020-02-03', '2020-02-04', '2020-02-05',
//         '2020-02-06', '2020-02-07', '2020-02-08', '2020-02-09', '2020-02-10',
//         '2020-02-11', '2020-02-12', '2020-02-13', '2020-02-14', '2020-02-15',
//         '2020-02-16', '2020-02-17', '2020-02-18', '2020-02-19', '2020-02-20',
//         '2020-02-21', '2020-02-22', '2020-02-23', '2020-02-24', '2020-02-25',
//         '2020-02-26', '2020-02-27', '2020-02-28', '2020-02-29', '2020-03-01',
//         '2020-03-02', '2020-03-03', '2020-03-04', '2020-03-05', '2020-03-06',
//         '2020-03-07', '2020-03-08', '2020-03-09', '2020-03-10', '2020-03-11',
//         '2020-03-12', '2020-03-13', '2020-03-14', '2020-03-15', '2020-03-16',
//         '2020-03-17', '2020-03-18', '2020-03-19', '2020-03-20', '2020-03-21',
//         '2020-03-22', '2020-03-23', '2020-03-24', '2020-03-25', '2020-03-26',
//         '2020-03-27', '2020-03-28', '2020-03-29', '2020-03-30'
//     ], // Sample date labels
//         datasets: [
//           {
//             label: 'Prediction',
//             data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 11.0, 7.0, 10.0, 2.0, 8.0, 35.0, 22.0, 1.0, 36.0, 11.0, 12.0, 12.0, 53.0, 53.0, 64.0, 66.0, 60.0, 43.0, 74.0, 181.0, 240.0, 68.0]
//             , // Initial data for actual cases
//             borderColor: 'rgba(255, 99, 132, 1)', // Red color for actual cases
//             backgroundColor: 'rgba(255, 99, 132, 0.2)', // Optional background color
//             borderWidth: 1
//           },
//           {
           
//             data:[], // Initial data for predicted cases
//             borderColor: 'rgba(54, 162, 235, 1)', // Blue color for predicted cases
//             backgroundColor: 'rgba(54, 162, 235, 0.2)', // Optional background color
//             borderWidth: 1
//           }
//         ]
//     };
//     var myChart = new Chart(ctx, {
//       type: 'line',
//       data: initialData,
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           x: {
//             type: 'time', // Use 'time' scale for x-axis
//             time: {
//               unit: 'day', // Unit to display
//               tooltipFormat: 'll' // Format for tooltip
//             }
//           },
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });

//     const labels = ['Available Beds', 'Isol. Beds', 'TTMF', 'Oxygen Tanks', 'Ventilator', 'HR', '%Vaccinated'];
//     const data = {
//         labels: labels,
//         datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 205, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(201, 203, 207, 0.2)'
//             ],
//             borderColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//             ],
//             borderWidth: 1
//         }]
//     };

// function getHealthCapacity(region){
// var healthCapacitydatasets = {
// 'Ilocos Region (Region I)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [35, 29, 60, 81, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Cordillera Administrative Region (CAR)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [15, 19, 40, 31, 56, 55, 50],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Central Luzon (Region III)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [25, 29, 50, 81, 56, 25, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// }, 'Metropolitan Manila': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'CALABARZON (Region IV-A)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [15, 59, 80, 21, 56, 35, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'MIMAROPA (Region IV-B)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [35, 59,280, 81, 36, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Bicol Region (Region V)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [35, 59, 40, 41, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Eastern Visayas (Region VIII)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [55, 59, 30, 51, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Western Visayas (Region VI)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [35, 59, 50, 31, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Central Visayas (Region VII)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [11, 19, 10, 11, 16, 15, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Western Visayas (Region VI)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [25, 59, 40, 81, 26, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Zamboanga Peninsula (Region IX)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Northern Mindanao (Region X)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [25, 29, 80, 81, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Autonomous Region of Muslim Mindanao (ARMM)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [15, 19, 80, 81, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'SOCCSKSARGEN (Region XII)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [15, 59, 80, 81, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// },
// 'Cagayan Valley (Region II)': {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [11, 39, 80, 81, 56, 55, 40],
//         backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//     ],
//         hoverOffset: 4
//     }]
// }

// }
// return healthCapacitydatasets[region] || { labels: [], datasets: [] };
// }

// const config = {
// type: 'bar',
// data: data,
// options: {
// scales: {
//     y: {
//         beginAtZero: true
//     }
// }
// },
// };

// var myHealthCapacityChart = new Chart(
// document.getElementById('myChart3'),
// config
// );

//     var mapUrl = '{% static "map/philippines-topo2.json" %}'; // Adjust this path as necessary

//     var width = 400,
//         height = 600; // Adjusted height to make the map more visible

//     var svg = d3.select("#map-container").append("svg")
//         .attr("class", "centered-svg")
//         .attr("width", width)
//         .attr("height", height);

//     d3.json(mapUrl).then(function(data) {
//         // Check if the expected object exists in the TopoJSON data
//         if (!data || !data.objects || !data.objects.philippines) {
//             console.error("Invalid TopoJSON file or object structure.");
//             return;
//         }

//         var philippines = data.objects.philippines;

//         // Define a color scale
//         var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

//         // Adjust projection scale and translation for a larger map
//         var projection = d3.geoMercator()
//             .fitSize([width, height], topojson.feature(data, philippines));

//         var path = d3.geoPath().projection(projection);

//         // Draw the map and color regions
//         svg.selectAll("path")
//             .data(topojson.feature(data, philippines).features)
//             .enter().append("path")
//             .attr("d", path)
//             .style("fill", function(d) {
//                 // Assign color based on region
//                 return colorScale(d.properties.REGION);
//             })
//             .on("click", function(event, d) {
//                 // Display the region name when clicked
//                 d3.select("#region-name").text(d.properties.REGION);
//                 d3.select("#region-name2").text(d.properties.REGION);


//                 // Fetch new data based on the selected region
//                 var regionName = d.properties.REGION;
//                 var newData = getRegionData(regionName);

//                 // Update chart data
//                 myChart.data.datasets[0].data = newData.actualCases;
//                 myChart.data.datasets[1].data = newData.predictedCases;
//                 myChart.update();

//                 var doughnutData = getDoughnutData(regionName);
//                 var dataValues = doughnutData.datasets[0].data.join(', ');
//                 myDoughnutChart.data = doughnutData;
//                 myDoughnutChart.update();

//                 //health capacity data
//                 var healthCapacity =  getHealthCapacity(regionName);
//                 myHealthCapacityChart.data = healthCapacity;
//                 myHealthCapacityChart.update()

//                 d3.select("#arimatext").html("⚠️ Warning: In March 2020, the number of infected cases is expected to <em style='color: red; font-size: 1.2em;'>increase</em> significantly in " + "<strong>" + d.properties.REGION + "</strong>" + ". <br> <br> Please wear your mask and always practice social distancing to protect yourself and others.");

//                 d3.select("#symptoms").html(
//                     "In the region of <strong>" + d.properties.REGION + "</strong>, the relative search volumes for COVID-19 symptoms are noteworthy. " +
//                     "The searches for <b style='color: red;'>Cough</b> are at " + doughnutData.datasets[0].data[0] + ", indicating a high level of concern. " +
//                     "<b style='color: blue;'>Fever</b> follows with a search volume of " + doughnutData.datasets[0].data[1] + ", " +
//                     "while <b style='color: orange;'>Flu</b> has a search volume of " + doughnutData.datasets[0].data[2] + "."
//                 );
                
//                 d3.select("#insight").html("Observation: In <strong>" + d.properties.REGION + "</strong>"+ "<strong>" + " ,<br>COUGH" + "</strong>" + " appears to be the most searched symptom, indicating it may be the most common concern among residents. Fever and flu also show significant search volumes, suggesting that these symptoms are prevalent and that residents should take precautionary measures, especially if they experience multiple symptoms.")

//                 d3.select("#recommendation").html("⚠️ Increase number of ventilators <br> ⚠️ Increase number of oxygen <br> ⚠️ Increase number of beds")
//             });
//     }).catch(function(error) {
//         console.error("Error loading or parsing TopoJSON file:", error);
//     });

//     function getRegionData(region) {
//         // Define your region-specific datasets here
//         var datasets = {
//             'Ilocos Region (Region I)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 3.0, 4.0, 1.0, 2.0, 1.0]
//             },
//             'Cagayan Valley (Region II)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 5.0, 4.0, 0.0],

//             },
//             'Central Luzon (Region III)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 2.0, 3.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 4.0, 2.0, 5.0, 3.0, 2.0, 6.0, 1.0, 16.0, 15.0, 5.0],
//             },
//             'Metropolitan Manila': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 11.0, 7.0, 10.0, 2.0, 8.0, 35.0, 22.0, 1.0, 36.0, 11.0, 12.0, 12.0, 53.0, 53.0, 64.0, 66.0, 60.0, 43.0, 74.0, 181.0, 240.0, 68.0]

//             },
//             'CALABARZON (Region IV-A)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 5.0, 4.0, 0.0, 4.0, 2.0, 2.0, 0.0, 8.0, 13.0, 7.0, 12.0, 12.0, 11.0, 8.0, 45.0, 29.0, 19.0],
//             },
//             'MIMAROPA (Region IV-B)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 2.0, 1.0, 0.0],
//             },
//             'Bicol Region (Region V)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 1.0, 0.0]
//                 ,
//             },
//             'Western Visayas (Region VI)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0, 0.0, 3.0, 6.0, 4.0, 0.0],
              
//             },
//             'Central Visayas (Region VII)': {
//                 actualCases: [0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
//             },
//             'Eastern Visayas (Region VIII)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0],
//             },
//             'Zamboanga Peninsula (Region IX)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
//             },
//             'Northern Mindanao (Region X)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
//             },
//             'Davao Region (Region XI)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 2.0, 0.0, 0.0, 0.0, 2.0, 1.0, 16.0, 19.0],
//             },
//             'Caraga (Region XIII)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0],
//             },
//             'SOCCSKSARGEN (Region XII)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0],
//             },
//             'Cordillera Administrative Region (CAR)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 2.0, 4.0],
//             },
//             'Autonomous Region of Muslim Mindanao (ARMM)': {
//                 actualCases: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0],
//             }
//         };

//         // Return data for the selected region
//         return datasets[region] || {actualCases: [], predictedCases: []};
//     }
// }); 

// /* Doughnut */
// function getDoughnutData(region) {
// // Define your region-specific doughnut chart datasets here
// var doughnutDatasets = {
//     'Ilocos Region (Region I)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [200, 100, 150],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Cagayan Valley (Region II)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [150, 120, 100],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Central Luzon (Region III)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [250, 80, 180],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Metropolitan Manila': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [300, 150, 200],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'CALABARZON (Region IV-A)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [180, 120, 160],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'MIMAROPA (Region IV-B)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [110, 90, 130],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Bicol Region (Region V)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [130, 140, 100],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Western Visayas (Region VI)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [170, 160, 150],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Central Visayas (Region VII)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [190, 140, 120],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Eastern Visayas (Region VIII)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [150, 130, 110],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Zamboanga Peninsula (Region IX)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [120, 100, 140],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Northern Mindanao (Region X)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [160, 140, 170],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Davao Region (Region XI)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [180, 160, 190],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Caraga (Region XIII)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [110, 90, 100],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'SOCCSKSARGEN (Region XII)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [150, 120, 130],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Cordillera Administrative Region (CAR)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [140, 110, 120],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     'Autonomous Region of Muslim Mindanao (ARMM)': {
//         labels: ['cough', 'fever', 'flu'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [130, 100, 110],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     }
// };        

// // Return data for the selected region
// return doughnutDatasets[region] || { labels: [], datasets: [] };
// }

// const doughnutData = {
// labels: ['cough', 'fever', 'flu'],
// datasets: [{
// label: 'My First Dataset',
// data: [300, 50, 100],
// backgroundColor: [
//     'rgb(255, 99, 132)',
//     'rgb(54, 162, 235)',
//     'rgb(255, 205, 86)'
// ],
// hoverOffset: 4
// }]
// };

// // Chart configuration
// const doughnutConfig = {
// type: 'doughnut',
// data: doughnutData,
// options: {}
// };

// // Create the doughnut chart
// var myDoughnutChart = new Chart(
// document.getElementById('myChart2'),
// doughnutConfig
// );


// </script>