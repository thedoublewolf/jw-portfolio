let ArtPortfolioService = function($http, PARSE) {

  'use strict';
  
  let imageUrl = PARSE.URL + 'classes/Artwork';

  this.getAllArt = getAllArt;
  this.getArt = getArt;

  function getAllArt () {
    return $http.get(imageUrl, PARSE.CONFIG);
  }

  function getArt (id) {
    return $http.get(imageUrl + '/' + id, PARSE.CONFIG);
  }

};

ArtPortfolioService.$inject = ['$http', 'PARSE'];

export default ArtPortfolioService;