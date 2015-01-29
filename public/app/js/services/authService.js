angular.module('app').factory('authService', function($http, identityService){

	return{
		validateEmail: function(email) {
			var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			if (filter.test(email)) {
				return true;
			} else {
				return false;
			}
		},
		validatePassword: function(password) {
			if (password != undefined){
				if (password.length > 4) {
					return true;
				} else {
					return false;
				}
			}else
			{
				return false;
			}
		}
	}
        

});