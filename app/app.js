'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'ngCart',
  'templateStore.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
	$routeProvider
  .when('/', {
    templateUrl: 'templates/templates.html',
    controller: 'TemplatesCtrl'
  })
  .when('/:templateId', {
    templateUrl: 'templates/template-details.html',
    controller: 'TemplateDetailsCtrl'
  })
    .otherwise({redirectTo: '/'});
}])

.controller('NgCartCtrl', NgCartCtrl);


NgCartCtrl.$inject = ['$scope', '$http', 'ngCart'];
function NgCartCtrl($$scope, $http, ngCart) {
  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99); 
}
