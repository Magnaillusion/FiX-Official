(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$rootScope'];

    /* @ngInject */
    function MainController($scope, $rootScope) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'MainController';

        activate();

        ////////////////

        function activate() {
        }

        angular.element(document).ready(function() {

        });
    }
})();