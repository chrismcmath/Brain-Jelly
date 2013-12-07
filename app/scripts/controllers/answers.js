'use strict';

angular.module('brainJellyApp')
  .controller('AnswersCtrl', function ($scope, $http) {
    $http.get('/api/answers').success(function(answers) {
      $scope.answers = answers;
    });
  });
