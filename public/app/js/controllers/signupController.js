angular.module('app').controller('signupController', function($scope, notifierService, authService){

	$scope.minLenName = 3;
	$scope.maxLenName = 20;
	$scope.minLenLastName = 3;
	$scope.maxLenLastName = 30;
	$scope.minLenEmail = 3;
	$scope.maxLenEmail = 30;
	$scope.minLenPassword = 8;
	$scope.maxLenPassword = 15;

});