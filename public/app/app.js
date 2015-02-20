angular.module('app', ['ngAnimate', 'ngTouch','angular-velocity', 'ngResource', 'ngRoute', 'ui.bootstrap', 'angular-loading-bar']);
angular.module('app').value("Physics", Physics);

angular.module('app').config(function($routeProvider, $locationProvider) {

  var routeRoleChecks = {
    admin: {
      auth: function(authService) {
        return authService.authorizeCurrentUserForRoute('admin');
      }
    },
    user: {
      auth: function(authService) {
        return authService.authorizeAuthenticatedUserForRoute();
      }
    }
  };

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/', {
      templateUrl: '/partials/partials/mainPartial',
      controller: 'mainController'
    })
  .when('/topics', {
    templateUrl: '/partials/partials/topicListPartial',
    controller: 'topicListController'
  })
  .when('/topics/:id', {
      templateUrl: '/partials/partials/topicDetailsPartial',
      controller: 'topicDetailsController'
    })
    .when('/topics/practices/:topic', {
      templateUrl: '/partials/partials/quizPartial',
      controller: 'quizController'
    })
    .when('/signup', {
      templateUrl: '/partials/partials/signupPartial',
      controller: 'signupController'
    })
    .when('/signin', {
      templateUrl: '/partials/partials/signinPartial',
      controller: 'signinController'
    })
    .when('/profile', {
      templateUrl: '/partials/partials/profilePartial',
      controller: 'profileController',
      resolve: routeRoleChecks.user
    })
    .when('/admin/users', {
      templateUrl: '/partials/partials/adminUserList',
      controller: 'adminUserController',
      resolve: routeRoleChecks.admin
    })
    .when('/animations', {
      templateUrl: '/partials/partials/mainAnimationPartial'
    })
    .otherwise({
      redirectTo: '/'
    });
});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  })
});