(function() {
  'use strict';

  var resume = angular.module('resume', [
    'ui.router',
    'ngAnimate',
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
  .config(config)
  .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  resume.controller('ContentScrollCtrl', ContentScrollCtrl);
  ContentScrollCtrl.$inject = ['$scope', '$stateParams', '$state', '$controller', '$location', '$anchorScroll'];
  function ContentScrollCtrl($scope, $stateParams, $state, $controller, $location, $anchorScroll) {
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
    $scope.scroll = function($pos) {
      $location.hash($pos);
      $anchorScroll();
    };  
  }


})();
