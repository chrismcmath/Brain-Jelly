'use strict';

angular.module('brainJellyApp')
  .controller('NounsCtrl', function ($scope, $http) {
    $http.get('/api/nouns').success(function(nouns) {
      $scope.nouns = nouns;
    });
  });
