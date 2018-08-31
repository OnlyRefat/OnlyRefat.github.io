app.controller('portfolioCtrl',function($scope){

	$scope.project = [{name:'Reactive Pro',details:"wordpress Searching & Grid Building Plugin on Codecanyon(RedQ Inc Production).", image:['image/RP/1.png'],link:'https://codecanyon.net/item/reactive-pro-advanced-wordpress-search-filtering-grid/17425763?s_rank=5'},
	{name:'Latify',details:"An Sync Google Map Reactjs Implementation for finding latitude, longitude. Open Source", image:['image/RP/2.png'],link:'https://onlyrefat.github.io/latify/'},
	{name:'latify-leaflet',details:"An Sync Leaflet Map Reactjs Implementation for finding latitude, longitude. Open Source", image:['image/RP/2.png'],link:'https://onlyrefat.github.io/latify-leaflet/'},
	{name:'Hacker Rank Problems',details:"Solving Problems to get proper control of a particular laguage like Python. 30+ problems solved using python", image:['image/default.png'],link:'https://www.hackerrank.com/Refat_Rafi'},
	{name:'UVA Problems',details:"In my academic years i have solved a lot of problems on the UVA, LightOJ, Code force. Out of them 150 on UVA. Here is the link of my uhunt link in the project button. That helpped me to be a better programmer.", image:['image/UVA/1.jpg','image/UVA/2.jpg','image/UVA/3.jpg'],link:'http://uhunt.felix-halim.net/id/67139'},
	{name:'Teachers Assistance',details:"The project is a group project based on android. we 4 friends have done this in varsity life. It won the 3rd prize in software contest of Buet CSE Fest 2012 ", image:['image/TA/2.jpg','image/TA/3.jpg','image/TA/4.jpg'],link:'https://www.dropbox.com/sh/0q5myr2xse4a6pb/AAChjHYCIaWK6olL0S0Atv1oa?dl=0'},
	];
	$scope.selected = 0;

    $scope.showModal = false;
    $scope.toggleModal = function(pos){
    	$scope.selected=pos;
        $scope.showModal = !$scope.showModal;
    };
})