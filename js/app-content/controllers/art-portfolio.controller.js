let ArtPortfolioController = function(ArtPortfolioService) {
  
  let vm = this;

  vm.art = [];

  activate();

  function activate () {
    ArtPortfolioService.getAllArt().then( (res) => {
      vm.art = res.data.results;
      console.log(res);
    });
  }

};

ArtPortfolioController.$inject = ['ArtPortfolioService'];

export default ArtPortfolioController;