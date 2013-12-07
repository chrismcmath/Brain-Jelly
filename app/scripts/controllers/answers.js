'use strict';

angular.module('brainJellyApp')
  .controller('AnswersCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/answers/' + $routeParams.id).success(function(answers) {
      $scope.answers = answers;
    });
  });
