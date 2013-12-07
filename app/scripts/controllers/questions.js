'use strict';

angular.module('brainJellyApp')
  .controller('TodaysQuestionCtrl', function ($scope, $http) {
    $http.get('/api/question').success(function(question) {
      $scope.q = question;
    });
    $http.get('/api/nouns').success(function(nouns) {
      $scope.nouns = nouns;
    });
  });

angular.module('brainJellyApp')
  .controller('RandomQuestionCtrl', function ($scope, $http) {
    $http.get('/api/random_question').success(function(question) {
      $scope.q = question;
    });
    $http.get('/api/nouns').success(function(nouns) {
      $scope.nouns = nouns;
    });
  });
