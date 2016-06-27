'use strict';

// Register `filmList` component, along with its associated controller and template
angular.
  module('filmList').
  component('filmList', {
    templateUrl: 'film-list/film-list.template.html',
    controller: ['$http', 'FilmService',
      function FilmListController($http, FilmService) {
		var self = this; 
		var filmListPromise = FilmService.getAll().then(function(films) {
		self.films = films;
            	angular.forEach(self.films, function(value, key) {
  			value.url = value.url.replace("http://swapi.co/api/films/", "");
	    	});
        });
        this.orderProp = 'title';
      }
    ]
  });
