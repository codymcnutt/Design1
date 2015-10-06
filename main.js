angular.module('myApp',[])

    .controller("mainController" ["$scope" function($scope) {

$scope.imager=[]
var picture = ["images/girls.gif", "images/ass.gif"]

$scope.pictures = function(event) {
	var r = picture[Math.floor(Math.random()*picture.length)]
		
			$scope.imager.push({r:[picture]});
		} 


}