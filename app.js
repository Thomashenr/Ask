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
            details: "Details by ThomasDetails by ThomasDetails by ThomasDetails by ThomasDetails by ThomasDetails by ThomasDetails by Thomas",
            date: 1288323623006 - (10000000000),
            author: "Thomas B",
            responses: [
                {
                title: "Coop's response",
                details: "Response by CoopResponse by CoopResponse by CoopResponse by CoopResponse by Coop",
                date: new Date(1282383623006 + (5000000000)),
                author: "Coop",
                },
                {
                title: "Ed's response",
                details: "Response by EdResponse by EdResponse by EdResponse by EdResponse by EdResponse by EdResponse by Ed",
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
    $scope.now = new Date();
    $scope.nowDate = new Date(1282383623006 +  (200867000000));
    $scope.thenDate = new Date(1282383623006 + (200866000000));
    
    $scope.timeDiff = function(dateIn) {
        
        var now = new Date();
        var inYear = dateIn.getFullYear();
        var nowYear = now.getFullYear();
        var inMonth = dateIn.getMonth();
        var nowMonth = now.getMonth();
        var inDay = dateIn.getDate();
        var nowDay = now.getDate();
        
        var yearDiff = now.getFullYear() - dateIn.getFullYear();
        var monthDiff = now.getMonth() - dateIn.getMonth();
        var dayDiff = now.getDate() - dateIn.getDate();
        var hourDiff = now.getHours() - dateIn.getHours();
        var minuteDiff = now.getMinutes() - dateIn.getMinutes();
        
        
        if (yearDiff > 1) {
            return yearDiff + " years ago";
        }
        else if (yearDiff == 1) {
            monthDiff = 12 - dateIn.getMonth() + now.getMonth();
        }
        
        if (monthDiff > 1) {
            return monthDiff + " months ago";
        }
        
        else if (monthDiff == 1) {
            var daysInMonth;
            if (inMonth == 1) {
                if ((inYear % 4) == 0) {
                    daysInMonth = 29;
                }
                else {
                    daysInMonth = 28;
                }
            }
            else if (inMonth == 0 ||
                inMonth == 2 ||
                inMonth == 4 ||
                inMonth == 6 ||
                inMonth == 7 ||
                inMonth == 9 ||
                inMonth == 11) 
            {
                daysInMonth = 31;
            }
            else {
                daysInMonth = 30;
            }
            
            dayDiff = daysInMonth - inDay + nowDay;
        }
        
        
        if (dayDiff > 1) {
            return dayDiff + " days ago";
        }
        else if (dayDiff == 1) {
            hourDiff = (24 - dateIn.getHours() + now.getHours());
        }
        
        if (hourDiff > 1) {
            return hourDiff + " hours ago";
        }
        else if (hourDiff == 1) {
            minuteDiff = 60 - dateIn.getMinutes() + now.getMinutes();
        }
            
        if (minuteDiff > 60) {
            return "about an hour ago";
        }
        else if (minuteDiff > 1) {
            return minuteDiff + " minutes ago";            
        }
        else {
            return hourDiff + "moments ago";
        }
        
    };
    $scope.difference2 = $scope.nowDate.getDay() - $scope.thenDate.getDay();
    
    
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
    $scope.thread;
    $scope.fillInfo = function(itemIn) {
        $scope.thread = itemIn;
    };
    
    $scope.commentDetails;
    $scope.submitComment = function() {
        
            var comment = {
                    title: "User's response",
                    details: $scope.commentDetails,
                    date: new Date(),
                    author: "User"
                    };
            $scope.thread.responses.push(comment);
            $scope.commentDetails = null;
            
        
    };

}]);