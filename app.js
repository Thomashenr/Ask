var obieAsk = angular.module('obieAsk', ['ngRoute', 'ui.bootstrap']);

//Routes
obieAsk.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/thread', {
        templateUrl: 'pages/thread.html',
        controller: 'homeController'
    })    
});

//Services

//Controllers
obieAsk.controller('homeController', function($scope) {
  $scope.status = {
    isopen: false
  };
  $scope.statusState = {
    isopen: false
  };
    $scope.parentScrollable = "";
    $scope.parentScrollable2 = "";
    
    $scope.participants = [];
    // Fill with dummy info
    for (var i = 0; i < 10; ++i) {
        $scope.participants.push( "Person" + i);
    }
    
    
    $scope.postTitle;
    $scope.postDetails;
    $scope.postList = [];
    
    for (var i = 0; i < 10; i++) {
    $scope.postObject = {
        title: "Title Number:" + i,
        details: "Details Number:" + i,
        date: 1288323623006 + (i*1000000000)
    };
        $scope.postList.push($scope.postObject);
    }
    
    //TODO add watch function to variables
    //$scope.$watch('postTitle', function() {
    //    $scope.city;
    //});
    
    $scope.createPost = function() {
    $scope.postObject = {
        title: $scope.postTitle,
        details: $scope.postDetails
    };
        $scope.postList.push($scope.postObject);
    };
    

});