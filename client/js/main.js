var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', function ($scope, $http) {

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



}]);
