let ArtPortfolioService = function($http, PARSE) {
  
  let imageUrl = PARSE.URL + 'classes/Artwork';

  this.getAllArt = getAllArt;

  function getAllArt () {
    return $http.get(imageUrl, PARSE.CONFIG);
  }

};

ArtPortfolioService.$inject = ['$http', 'PARSE'];

export default ArtPortfolioService;