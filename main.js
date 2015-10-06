angular.module('myApp',[])

    .controller("mainController", ["$scope", function($scope) {


$scope.picture = ["images/girl.gif", "images/ass.gif", "images/breath.gif", "images/tumb.gif", "images/wake.gif"]

$scope.pictures = function(event) {
	$scope.r = $scope.picture[Math.floor(Math.random()* $scope.picture.length )]
		
			// $scope.imager.push($scope.r);
			// console.log(r)
	console.log("pictures works")
		} ();
}])