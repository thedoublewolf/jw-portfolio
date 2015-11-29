import angular from 'angular';
import '../app-core/index';

import ArtPortfolioController from './controllers/art-portfolio.controller';
import ArtSingleController from './controllers/art-single.controller';

import ArtPortfolioService from './services/art-portfolio.service';

import artItem from './directives/art.directive';

angular
  .module('app.content', ['app.core'])
  .controller('ArtPortfolioController', ArtPortfolioController)
  .controller('ArtSingleController', ArtSingleController)
  .service('ArtPortfolioService', ArtPortfolioService)
  .directive('artItem', artItem)
;