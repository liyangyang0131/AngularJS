app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{redirectTo:'/note'})
        .when('/note',{templateUrl:'./views/note.html',controller:'noteController'})
        .when('/memo',{templateUrl:'./views/memo.html',controller:'memoController'})
        .otherwise({redirectTo:'/'});
}]);