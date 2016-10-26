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
            date: 1288323623006 - (i*10000000000),
            author: "Thomas B" + i,
            responses: []
        };
        for (var j = 0; j < 4; j++) {
            $scope.postObjectResponse = {
                title: "Title Number:" + j,
                details: "Details Number:" + j,
                date: new Date(1282383623006 - (j*i*10000000000)),
                author: "Thomas B" + j,
            };

            $scope.postObject.responses.push($scope.postObjectResponse);
            $scope.postObject.responses.sort(function(a, b) { return b.date - a.date; });
        
        }
        $scope.postList.push($scope.postObject);
    }
    
    $scope.timeSince = function(dateIn) {
        
        $scope.dateN = new Date(1282383623006);
        var result = new Date($scope.dateN - dateIn);
        
    };
    
    $scope.dateM = new Date(1282383623006 + 10000000000);
    
    
    $scope.createPost = function() {
    $scope.postObject = {
        title: $scope.postTitle,
        details: $scope.postDetails
    };
        $scope.postList.push($scope.postObject);
    };
    

});