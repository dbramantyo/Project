'use strict';

angular.module('filmService', [])
    .service('FilmService', ['$q', '$http', 'Film', function($q, $http, Film) {
        return {
            	getAll: function() {
                	var deferred = $q.defer();

                	$http.get('http://swapi.co/api/films/').success(function(response) {
                    	var films = [];
                    
		    	for (var i = 0; i < response.results.length; i ++) {
                        	films.push(new Film(response.results[i]));
                    	}

                    	deferred.resolve(films);
                });

                return deferred.promise;
            	},
		getByIdNumber: function(filmId) {
			var deferred = $q.defer();
			
			$http.get('http://swapi.co/api/films/' + filmId).success(function(data) {
                    	
                    	deferred.resolve(data);
		});

		return deferred.promise;
		}
        }
    }]);