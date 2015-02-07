angular.module('app').directive("physicsPixi", function(Physics) {
  return {
    restrict: "E",
    transclude: true,
    template: "<div id='viewport' width='400', height='400'></div>",
    scope: {
      width: "@",
      height: "@",
      init: "&"
    },
    controller: function() {

      this.world = Physics();
      this.world.on("step", function() {
        this.world.render();
      });

      var start = function() {
        Physics.util.ticker.on(function(time) {
          this.world.step(time);
        });
        Physics.util.ticker.start()
      };

      this.ticker = {
        start: start
      };

/*      this.saludar = function() {
        console.log('Hola Pixi');
      }*/


    },
    compile: function(element, attributes) {
      return {
        pre: function(scope, element, attrs, ctrl) {},
        post: function(scope, element, attrs, ctrl) {

          ctrl.saludar();



/*          var pixi = element.find("div")[0];
          var widthPixi = 100;
          var heightPixi = 100;
          var renderer = Physics.renderer('pixi', {
            el: pixi,
            width: widthPixi,
            height: heightPixi
          });
          ctrl.world.add(renderer);
          pixi.attr("style", "");
          if (scope.init) {
            scope.init({
              "world": ctrl.world
            });
          }
          ctrl.ticker.start();*/
        }
      };
    }
  };
});