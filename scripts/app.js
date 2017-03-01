'use strict';

angular.module('adminApp', ['ui.router','ui.bootstrap', 'ngSanitize'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'content': {
                        templateUrl : 'views/login.html',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.dashboard', {
                url:'dashboard',
                views: {
                    'content@': {
                        templateUrl : 'views/dashboard.html'
//                        controller  : 'AboutController'                  
                    }
                }
            })
        
            .state('app.maps', {
                url:'maps',
                views: {
                    'content@': {
                        templateUrl : 'views/maps.html'
//                        controller  : 'AboutController'                  
                    }
                }
            })
        
            .state('app.playerdata', {
                url:'playerdata',
                views: {
                    'content@': {
                        templateUrl : 'views/playerdata.html'
//                        controller  : 'AboutController'                  
                    }
                }
            })
        
            .state('app.globalvar', {
                url:'globalvar',
                views: {
                    'content@': {
                        templateUrl : 'views/globalvar.html'
//                        controller  : 'AboutController'                  
                    }
                }
            })
        
            // route for the contactus page
//            .state('app.feedback', {
//                url:'feedback',
//                views: {
//                    'content@': {
//                        templateUrl : 'views/feedback.html',
//                        controller  : 'FeedbackController'                  
//                    }
//                }
//            })
    
            // route for the test page
            .state('app.test', {
                url:'test',
                views: {
                    'content@': {
                        templateUrl : 'views/test.html'
//                        controller  : 'ContactController'                  
                    }
                }
            });
        
        // route to redirect to home in case URL not defined
        $urlRouterProvider.otherwise('/');
    })

;
