var app = angular.module('AlexPharmacies', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
          '': {
              templateUrl: 'public/directives/home.html'
          },
          'header@home': {
              templateUrl: 'public/partials/_header.html'
          },
          'banner@home': {
              templateUrl: 'public/partials/_banner.html',
              controller: 'bannersCtrl'
          },
          'offers@home': {
              templateUrl: 'public/partials/_offers.html',
              controller: 'offersCtrl'
          },
          'about@home': {
              templateUrl: 'public/partials/_about.html'
          },
          'services@home': {
              templateUrl: 'public/partials/_services.html',
              controller: 'servicesCtrl'
          },
          'sections@home': {
              templateUrl: 'public/partials/_sections.html',
              controller: 'sectionsCtrl'
          },
          'team@home': {
              templateUrl: 'public/partials/_team.html',
              controller: 'teamCtrl'
          },
          'media@home': {
              templateUrl: 'public/partials/_media.html',
              controller: 'mediaCtrl'
          },
          'healthNews@home': {
              templateUrl: 'public/partials/_healthNews.html',
              controller: 'newsCtrl'
          },
          'contactUs@home': {
              templateUrl: 'public/partials/_contactUs.html',
              controller: 'contactCtrl'
          },
          'subscribe@home': {
              templateUrl: 'public/partials/_subscribe.html',
              controller: 'subscribeCtrl'
          }
        }
      });
});
