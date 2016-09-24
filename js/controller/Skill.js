google.load('visualization', '1', {
  packages: ['corechart']
});

google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['app']);
});

app.controller('skillCtrl', function($scope){
       var data = google.visualization.arrayToDataTable([
      ['Sector', 'Number Of Project',],
      ['reactJs', 20],
      ['Javascript', 30],
      ['C/C++', 5],
      ['Android', 4],
      ['Java', 5],
      ['NodeJs', 10],
      ['angularJs',5]
    ]);
    var options = {
      title: 'Work Done'
    };
    var chart = {};
 
    chart.data = data;
    chart.options = options;
    $scope.chart = chart;


});