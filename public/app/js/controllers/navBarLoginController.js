angular.module('app').controller('navBarLoginController', function($scope, identityService, notifierService, authService) {

	$scope.identity = identityService;


	$scope.signin = function() {

	};

	$scope.collapse = function(){
		if ($('#topBar').hasClass('in')) {
		alert("hola");
		 $("#navTop").click();

		}
	};


});



	// $scope.validateLoginForm = function() {
	// 	if ($scope.email == undefined){
	// 		notifierService.notifyInfo('The email is required');
	// 	}else{
	// 		if ($scope.email.trim().length === 0){
	// 			notifierService.notifyInfo('The email is required');
	// 		}
	// 	}
	// 	if ($scope.password == undefined){
	// 		notifierService.notifyInfo('The password is required');
	// 	}else{
	// 		if ($scope.password.trim().length === 0){
	// 			notifierService.notifyInfo('The password is required');
	// 		}
	// 		else if ($scope.password.trim().length < 4){

	// 		}
	// 	}
	// };

	// $scope.signIn = function(userName, password){
	// 	authService.authenticateUser(userName, password).then(function(success){
	// 		if(success){
	// 			notifierService.notify('You have successfully signed in!');	
	// 			console.log(identityService.isAuthenticated());
	// 		}
	// 		else{
	// 			notifierService.notify('Username or Password combination incorrect ;(');
	// 		}
	// 	});
	// }

	// $scope.signOut = function(){
	// 	authService.logOutUser().then(function(){
	// 		$scope.userName = "";
	// 		$scope.password = "";
	// 		notifierService.notify('You have successfully signed out');
	// 		$location.path('/');
	// 	})
	// }