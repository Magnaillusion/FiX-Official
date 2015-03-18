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

        function toggleSidenav(menuId) {
            // Open the given sidenav
            $mdSidenav(menuId).toggle();
        }

        function toggleSidenavClose(menuId) {
            $mdSidenav(menuId).close()
                .then(function () {
                    $log.debug("close " + menuId + " is done");
                });
        }

    }
})();