'use strict';

describe('Film', function() {
  var $httpBackend;
  var Film
  var filmsData = [
    {name: 'Film X'},
    {name: 'Film Y'},
    {name: 'Film Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Film` service before each test
  beforeEach(module('core.film'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Film_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('films/films.json').respond(filmsData);

    Film = _Film_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/films/films.json`', function() {
    var films = Film.query();

    expect(films).toEqual([]);

    $httpBackend.flush();
    expect(films).toEqual(filmsData);
  });

});
