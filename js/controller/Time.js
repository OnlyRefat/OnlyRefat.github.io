app.controller('timeCtrl', function($scope,$interval) {
$scope.hello = callAtInterval();

function callAtInterval() {
    $scope.hello=new Date();
};

 $interval(callAtInterval, 1000);

});

