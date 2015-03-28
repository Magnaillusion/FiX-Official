(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('fxLoading', fxLoading);

    fxLoading.$inject = ['$animate'];

    /* @ngInject */
    function fxLoading($animate) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'C'
        };
        return directive;

        function link(scope, element, attrs) {
            // Due to the way AngularJS prevents animation during the bootstrap
            // of the application, we can't animate the top-level container; but,
            // since we added "ngAnimateChildren", we can animated the inner
            // container during this phase.
            // --
            // NOTE: Am using .eq(1) so that we don't animate the Style block.
            $animate.leave(element.children().eq(1)).then(
                function cleanupAfterAnimation() {

                    // Remove the root directive element.
                    element.remove();

                    // Clear the closed-over variable references.
                    scope = element = attrs = null;

                }
            );
        }
    }
})();