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
              templateUrl: 'public/partials/_banner.html'
          },
          'offers@home': {
              templateUrl: 'public/partials/_offers.html'
          },
          'about@home': {
              templateUrl: 'public/partials/_about.html'
          },
          'services@home': {
              templateUrl: 'public/partials/_services.html'
          },
          'sections@home': {
              templateUrl: 'public/partials/_sections.html'
          },
          'team@home': {
              templateUrl: 'public/partials/_team.html'
          },
          'media@home': {
              templateUrl: 'public/partials/_media.html'
          },
          'healthNews@home': {
              templateUrl: 'public/partials/_healthNews.html'
          },
          'contactUs@home': {
              templateUrl: 'public/partials/_contactUs.html'
          },
          'subscribe@home': {
              templateUrl: 'public/partials/_subscribe.html'
          }
        }
      });
});
