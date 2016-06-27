'use strict';

// Register `filmDetail` component, along with its associated controller and template
angular.
  module('filmDetail').
  component('filmDetail', {
    templateUrl: 'film-detail/film-detail.template.html',
    controller: ['$routeParams', 'Film', '$http', 'FilmService',
      function FilmDetailController($routeParams, Film, $http, FilmService) {
        var self = this;
	this.filmId = $routeParams.filmId;
	var filmPromise = FilmService.getByIdNumber($routeParams.filmId).then(function(film) {
		self.film = film;
	});	
      }
    ]
  });
