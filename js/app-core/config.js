let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/app-layout/home.tpl.html'
    }) 
    .state('root.art-portfolio', {
      url: '/art-portfolio',
      controller: 'ArtPortfolioController as vm',
      templateUrl: 'templates/app-content/art-portfolio.tpl.html'
    })
    .state('root.singleArt', {
      url: '/art-portfolio/:id',
      controller: 'ArtSingleController as vm',
      templateUrl: 'templates/app-content/art-single.tpl.html'
    })
    .state('root.web-portfolio', {
      url: '/web-portfolio',
      templateUrl: 'templates/app-content/web-portfolio.tpl.html'
    })
    .state('root.web-portfolio/battle', {
      url: '/web-portfolio/battle',
      templateUrl: 'templates/app-content/web-portfolio/battle.tpl.html'
    })
    .state('root.web-portfolio/artwork', {
      url: '/web-portfolio/artwork',
      templateUrl: 'templates/app-content/web-portfolio/artwork.tpl.html'
    })
    .state('root.web-portfolio/etsy', {
      url: '/web-portfolio/etsy',
      templateUrl: 'templates/app-content/web-portfolio/etsy.tpl.html'
    })
    .state('root.web-portfolio/favbands', {
      url: '/web-portfolio/favbands',
      templateUrl: 'templates/app-content/web-portfolio/favbands.tpl.html'
    })
    .state('root.web-portfolio/instanoir', {
      url: '/web-portfolio/instanoir',
      templateUrl: 'templates/app-content/web-portfolio/instanoir.tpl.html'
    })
    .state('root.art-about', {
      url: '/art-about',
      templateUrl: 'templates/app-content/art-about.tpl.html'
    })
    .state('root.web-about', {
      url: '/web-about',
      templateUrl: 'templates/app-content/web-about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/app-content/contact.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;