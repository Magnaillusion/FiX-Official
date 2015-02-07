angular.module('app').service('translationService', function(translationResource) {

  this.getTranslation = function($scope, language) {
    console.log(language);
    translationResource.get({
        language: language
      },
      function(data) {
        $scope.translation = data;
      },
      function(error) {
        notifierService.notifyError("Error from server: languages not found");
        $window.location = '/';
      });
  };
});