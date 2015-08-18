var app = angular.module('calculator', ['ngRoute']);


app.controller('CalculatorController', function ($scope, $routeParams) {
  $scope.message = "ALIVE";
  $scope.answer = function () {
    if ($routeParams.action === 'add') {
      return parseInt($routeParams.a) + parseInt($routeParams.b);
    }
    if ($routeParams.action === 'divide') {
      return parseInt($routeParams.a) / parseInt($routeParams.b);
    }
  };
});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/domath.html',
      controller: 'CalculatorController'
    })
    .when('/:action/:a/:b', {
      templateUrl: 'partials/domath.html',
      controller: 'CalculatorController'
    });
});
