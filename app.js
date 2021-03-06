/**
 * Created by alexfaber on 2/11/15.
 */
app = angular.module("theHub", ['ngRoute', 'ngResource']);

//Routing
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'SimpleCtrl'
        })
        .when('/button', {
            templateUrl: 'views/buttonCount.html',
            controller: 'ButtonCountCtrl'
        })
        .when('/rest', {
            templateUrl: 'views/rest.html',
            controller: 'RestCtrl'
        })
}]);
