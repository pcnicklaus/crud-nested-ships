var app = angular.module('myApp', ['ngRoute','ngResource']);

app.controller('mainController', ['$scope', '$http', 'idService', function ($scope, $http, idService) {

  $scope.getUsers = function () {
    $http.get('/users')
     .success(function(data) {
      $scope.userData = data;
     })
     .error(function(err) {
        console.log(err);
     });
   };

  $scope.addUser = function () {
    var payload = {
      username: $scope.username
    };
    $http.post('/users', payload)
      .then(function(response, error){
        console.log(response);
        // $scope.userData = response;
      })
      .catch(function(error) {
        console.log(error);
    });
  };

  $scope.getSingleUser = function (data) {
    idService.name = data._id;
  };


  $scope.addShip = function () {

    var id = idService.id;
    var payload = {
      name: $scope.name,
      missions: $scope.mission
    };

    $http.post('users/'+ id +'/ships', payload)
      .then (function (response) {
        console.log(response);
      });

  };



}]);
