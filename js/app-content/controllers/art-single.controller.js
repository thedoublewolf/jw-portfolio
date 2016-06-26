let ArtSingleController = function(ArtPortfolioService, $stateParams) {

  'use strict';
  
  let vm = this;

  activate();

  function activate () {
    ArtPortfolioService.getArt($stateParams.id).then( (res) => {
      vm.art = res.data;
    });
  }

};

ArtSingleController.$inject = ['ArtPortfolioService', '$stateParams'];

export default ArtSingleController;