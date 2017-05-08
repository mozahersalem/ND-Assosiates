'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'ngCart',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.templates'
]).
config(['$routeProvider', function($routeProvider) {

	$routeProvider
  .when('/templates', {
    templateUrl: 'templates/templates.html',
    controller: 'TemplatesCtrl'
  })
  .when('/template/ngCart/cart', {
    templateUrl: 'template/ngCart/cart',
    controller: 'TemplatesCtrl'
  }).otherwise({redirectTo: '/templates'});
}]);
