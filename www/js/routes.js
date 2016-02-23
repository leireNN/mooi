angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.mOOI', {
    url: '/homeadmin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mOOI.html',
        controller: 'mOOICtrl'
      }
    }
  })

  .state('home', {
    url: '/homeuser',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('pills', {
    url: '/Pills',
    templateUrl: 'templates/pills.html',
    controller: 'pillsCtrl'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});