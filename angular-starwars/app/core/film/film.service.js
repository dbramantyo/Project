'use strict';

angular.
  module('core.film').
  factory('Film', ['$resource',
    function($resource) {
      return $resource('films/:filmId.json', {}, {
        query: {
          method: 'GET',
          params: {filmId: 'films'},
          isArray: true
        }
      });
    }
  ]);
