'use strict';

describe('filmDetail', function() {

  // Load the module that contains the `filmDetail` component before each test
  beforeEach(module('filmDetail'));

  // Test the controller
  describe('FilmDetailController', function() {
    var $httpBackend, ctrl;
    var xyzFilmData = {
      name: 'film xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('films/xyz.json').respond(xyzFilmData);

      $routeParams.filmId = 'xyz';

      ctrl = $componentController('filmDetail');
    }));

    it('should fetch the film details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.film).toEqual({});

      $httpBackend.flush();
      expect(ctrl.film).toEqual(xyzFilmData);
    });

  });

});
