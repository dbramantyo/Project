'use strict';

angular.
  module('starwarsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/films', {
          template: '<film-list></phone-list>'
        }).
        when('/films/:filmId', {
          template: '<film-detail></phone-detail>'
        }).
        otherwise('/films');
    }
  ]);
