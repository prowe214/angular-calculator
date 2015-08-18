var app = angular.module('calculator', ['ngRoute']);


app.controller('CalculatorController', function ($scope, $routeParams) {
  $scope.message = "ORIGINAL CALC";
  $scope.answer = function () {
    if ($routeParams.action === 'add') {
      return parseInt($routeParams.a) + parseInt($routeParams.b);
    }
    if ($routeParams.action === 'divide') {
      return parseInt($routeParams.a) / parseInt($routeParams.b);
    }
  };
});

app.controller('AdvancedController', function ($scope, $routeParams, $location) {
  $scope.message = $routeParams.action;
  $scope.answer = function () {
    var query = $location.search();
    if ($routeParams.action === 'add') {
      return parseInt($location.search().x) + parseInt($location.search().y);
    }
    if ($routeParams.action === 'divide') {
      return parseInt($location.search().x) / parseInt($location.search().y);
    }
  };
});

app.config(function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'partials/domath.html',
      controller: 'CalculatorController'
    })
    .when('/:action/:a/:b', {
      templateUrl: 'partials/domath.html',
      controller: 'CalculatorController'
    })
    .when('/:action/?', {
      templateUrl: 'partials/domath.html',
      controller: 'AdvancedController'
    });
});
