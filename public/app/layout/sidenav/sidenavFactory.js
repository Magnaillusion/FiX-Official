(function () {
    'use strict';

    angular
        .module('app.layout')
        .factory('sidenavFactory', sidenavFactory);

    sidenavFactory.$inject = ['$mdSidenav'];

    /* @ngInject */
    function sidenavFactory($mdSidenav) {
        var service = {
            toggleSidenav: toggleSidenav
        };

        return service;

        ////////////////

        function toggleSidenav(menuId) {
            $mdSidenav(menuId).toggle();
        }

    }
})();