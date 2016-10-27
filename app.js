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
obieAsk.controller('homeController',['$scope', 'orderByFilter', function($scope, orderBy) {
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
    $scope.postList = [
        {            
            title: "Thomas Title",
            details: "Details by Thomas",
            date: 1288323623006 - (10000000000),
            author: "Thomas B",
            responses: [
                {
                title: "Coop's response",
                details: "Response by Coop",
                date: new Date(1282383623006 + (5000000000)),
                author: "Coop",
                },
                {
                title: "Ed's response",
                details: "Response by Ed",
                date: new Date(1282383623006 + (7500000000)),
                author: "Ed",
                }
            ]
        },
        {            
            title: "Ryan Title",
            details: "Details by Ryan",
            date: 1288323623006 - (20000000000),
            author: "Ryan L",
            responses: []
        },
        {            
            title: "Chris' Title",
            details: "Details By Chris:",
            date: 1288323623006 - (30000000000),
            author: "Chris",
            responses: [
                {
                title: "J's response",
                details: "Response by J",
                date: new Date(1282383623006 + (2500000000)),
                author: "J",
                }
            ]
        }
        
    ];
    
    $scope.sortBy = function(propertyNameIn, reverseBoolIn) {
        $scope.postList = orderBy($scope.postList, propertyNameIn, reverseBoolIn);
    };
    
    
    $scope.createPost = function() {
        if ($scope.postTitle != null && $scope.postDetails != null) {
            $scope.postObject = {
                title: $scope.postTitle,
                details: $scope.postDetails,
                date: new Date(),
                author: 'Posting Author',
                responses: []
            };
            $scope.postList.push($scope.postObject);
            $scope.postList = orderBy($scope.postList, 'date', true);
            $scope.postTitle = null;
            $scope.postDetails = null;
        }
        
    };
    

}]);