(function() {
  'use strict';
  angular
    .module('FollowMore', ['ui.router', 'ngTouch','ngAnimate', 'ngDialog', 'smoothScroll'])
    .run([ '$rootScope', '$state', '$stateParams', '$location', function ($rootScope, $state, $stateParams, $location) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$on('$stateChangeSuccess', function(){
      console.log("The current page is: " + $location.path())
        //Scrolls to the top of the page on page changes.
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      })
    }])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'angular-app/site-pages/home.html',
          controller: 'HomeController',
          controllerAs: 'home',
          params: {title: "Follow More | Home"}
        })
    })
    //Attribute Directives
    .directive('nav', function() {
      return {
        restrict: 'A',
        scope: false,
        templateUrl: 'angular-app/attr-directives/nav.html',
        controller: 'NavController',
        controllerAs: 'nav'
      }
    })
    .directive('app', function() {
      return {
        restrict: 'A',
        scope: false,
        templateUrl: 'angular-app/attr-directives/app.html',
        controller: 'app',
        controllerAs: 'app'
      }
    })
})();
