let ArtPortfolioController = function(ArtPortfolioService) {

  'use strict';
  
  let vm = this;

  vm.art = [];
  vm.clicked = clicked;

  activate();

  function activate () {
    ArtPortfolioService.getAllArt().then( (res) => {
      vm.art = res.data.results;
    });
  }

  function clicked (art) {
    console.log('clicked', art.title);
  }

};

ArtPortfolioController.$inject = ['ArtPortfolioService'];

export default ArtPortfolioController;