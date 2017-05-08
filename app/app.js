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
  .when('/', {
    templateUrl: 'templates/templates.html',
    controller: 'TemplatesCtrl'
  })
  .when('/cart', {
    templateUrl: 'templates/cart.html',
    controller: 'TemplatesCtrl'
  })
  .when('/checkout', {
    templateUrl: 'templates/checkout.html',
    controller: 'TemplatesCtrl'
  })
  .otherwise({redirectTo: '/'});
}]);
