'use strict';

angular.module('templateStore.templates', ['ngRoute', 'ngCart'])

.controller('TemplatesCtrl', TemplatesCtrl)
.controller('TemplateDetailsCtrl', TemplateDetailsCtrl);




TemplatesCtrl.$inject = ['$scope','$http', 'ngCart'];
function TemplatesCtrl($scope, $http, ngCart) {
  $http.get('json/templates.json').success (function(data ) {
    $scope.templates = data;
  });

  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);
}

TemplateDetailsCtrl.$inject = ['$scope', '$http', '$routeParams', '$filter'];
function TemplateDetailsCtrl($scope, $http, $routeParams, $filter) {
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
}