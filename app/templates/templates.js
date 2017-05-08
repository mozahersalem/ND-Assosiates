'use strict';

angular.module('templateStore.templates', ['ngRoute', 'ngCart'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  
  .when('/:templateId', {
    templateUrl: 'templates/template-details.html',
    controller: 'TemplateDetailsCtrl'
  });
}]).

controller('TemplatesCtrl', ['$scope','$http', 'ngCart', function($scope, $http, ngCart) {
  $http.get('json/templates.json').success (function(data ) {
    $scope.templates = data;
  });
}]).

controller('TemplateDetailsCtrl', [
    '$scope',
    '$http',
    '$routeParams',
    '$filter',
    'ngCart', 
    function($scope, $http, $routeParams, $filter, ngCart ) {
      var templateId = $routeParams.templateId;

      $http.get('json/templates.json').success (function(data ) {
        $scope.template = $filter('filter')(data, function(d){
          return d.id == templateId;
        })[0];
        $scope.mainImage = $scope.template.images[0].name;
      });

      $scope.setImage = function(image) {
        $scope.mainImage = image.name;
      };

      ngCart.setTaxRate(7.5);
      ngCart.setShipping(2.99);

    }

]);
