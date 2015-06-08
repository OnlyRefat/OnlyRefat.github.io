app.controller('deviceCtrl', function($scope,$http) {
	$scope.developers = []


$http.get('http://phoneapi-disl.rhcloud.com/PhoneDetails/').
  success(function(data, status, headers, config) {

$scope.developers=data;

  console.log($scope.developers);
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.


  });


});
