google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Cases/Deaths', 'Amount of People'],
  ['Cases', 30289],
  ['Deaths', 389],
]);

  var options = {'title':'Cases/Deaths', 'width':550, 'height':400};

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
