(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidenavController', SidenavController);

    SidenavController.$inject = ['$scope', '$timeout', '$mdSidenav', '$log', 'sidenavFactory'];

    /* @ngInject */
    function SidenavController($scope, $timeout, $mdSidenav, $log, sidenavFactory) {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'SidenavController';
        vm.toggleSidenav = toggleSidenav;
        vm.closeSidenav = closeSidenav;

        function toggleSidenav(menuId) {
            // Open the given sidenav
            $mdSidenav(menuId).toggle()
                .then(function () {
                console.log("toggle " + menuId + " is done");
            });
        }

        function closeSidenav(menuId) {
            $mdSidenav(menuId).close()
                .then(function () {
                    console.log("close " + menuId + " is done");
                });
        }

    }
})();