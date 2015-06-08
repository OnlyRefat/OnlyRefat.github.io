app.controller('deviceCtrl', function($scope,$http) {
	$scope.developers = [
	    {"name":"John", "family":"Doe"}, 
	    {"name":"Anna", "family":"Smith"},
	    {"name":"Peter", "family":"Jones"},
	    {"name":"Alex", "family":"Volkov"}, 
	    {"name":"Yaniv", "family":"Smith"},
	]


$http.get('http://phoneapi-disl.rhcloud.com/PhoneDetails/').
  success(function(data, status, headers, config) {
  	
  	console.log(data);
$scope.developers=data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.


  });


});