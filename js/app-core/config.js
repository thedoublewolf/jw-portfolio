let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      // controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    }) 
    .state('root.art-portfolio', {
      url: '/art-portfolio',
      templateUrl: 'templates/app-content/art-portfolio.tpl.html'
    })
    .state('root.web-portfolio', {
      url: '/web-portfolio',
      templateUrl: 'templates/app-content/web-portfolio.tpl.html'
    })
    // .state('root.singlePage', {
    //   url:'/portfolio/:id',
    //   controller: 'SinglePageController as vm',
    //   templateUrl: 'templates/app-content/single-page.tpl.html'
    // })
    .state('root.art-about', {
      url: '/art-about',
      // controller: 'AboutController as vm',
      templateUrl: 'templates/app-content/art-about.tpl.html'
    })
    .state('root.web-about', {
      url: '/web-about',
      templateUrl: 'templates/app-content/web-about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      // controller: 'ContactController as vm',
      templateUrl: 'templates/app-content/contact.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;