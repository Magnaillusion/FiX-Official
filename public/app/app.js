angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'angular-loading-bar']);

angular.module('app').config(function($routeProvider, $locationProvider, $httpProvider) {
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
        .when('/login', {
            templateUrl: '/partials/partials/loginPartial',
            controller: 'loginController'
        })
        .when('/profile', {
            templateUrl: '/partials/partials/profilePartial',
            controller: 'profileController'
        })
        .otherwise({
            redirectTo: '/'
        });

});

