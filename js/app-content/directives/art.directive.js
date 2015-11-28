let artItem = function(ArtPortfolioService) {
  
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      art: "=art"
    },
    template: `
      <div class="art-tile">
        <img class="art-image" ng-src="{{ art.imageUrl }}">
      </div>
    `,
  };

};

artItem.$inject = ['ArtPortfolioService'];

export default artItem;