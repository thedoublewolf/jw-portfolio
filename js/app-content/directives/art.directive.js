let artItem = function($state, ArtPortfolioService) {

  'use strict';
  
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      art: "=art"
    },
    template: `
      <div class="art-tile" ng-click="vm.clicked(art)">
        <img class="art-image" ng-src="{{ art.imageUrl }}">
      </div>
    `,
    controller: 'ArtPortfolioController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singleArt', {
          id: scope.art.objectId
        });
      });
    }
  };

};

artItem.$inject = ['$state', 'ArtPortfolioService'];

export default artItem;