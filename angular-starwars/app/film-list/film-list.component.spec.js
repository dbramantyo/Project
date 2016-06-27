'use strict';

describe('filmList', function() {

  // Load the module that contains the `filmList` component before each test
  beforeEach(module('filmList'));

  // Test the controller
  describe('FilmListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('films/films.json')
                  .respond([{title: 'A New Hope'}, {title: 'Attack of the Clones'}]);

      ctrl = $componentController('filmList');
    }));

    it('should create a `films` property with 2 films fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.films).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.films).toEqual([{title: 'A New Hope'}, {title: 'Attack of the Clones'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('title');
    });

  });

});
