// Apps

var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/Device', {templateUrl: 'view/device.html', controller: 'deviceCtrl'}).
		when('/Time',{templateUrl: 'view/time.html',controller: 'timeCtrl'}).
		otherwise({ redirectTo: '/index' });
	// $locationProvider.html5Mode(true);
});




//Controllers

