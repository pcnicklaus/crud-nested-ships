
app.config(function ($routeProvider) {
 $routeProvider
   .when('/', {
     templateUrl: 'partials/user.html',
     controller: 'mainController'
   })
   // .when('/home', {
   //   templateUrl: 'partials/user.html',
   //   controller: 'mainController'
   // })
   .otherwise({redirectTo: '/home'});
});
