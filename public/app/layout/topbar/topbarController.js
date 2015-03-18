(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('TopbarController', TopbarController);

    TopbarController.$inject = ['$scope', '$element', 'sidenavFactory'];

    /* @ngInject */
    function TopbarController($scope, $element, sidenavFactory) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'TopbarController';
        vm.sidenav = sidenavFactory;

        activate();

        ////////////////

        function activate() {

        }
    }
})();