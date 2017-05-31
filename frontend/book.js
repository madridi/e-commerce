angular.module('app', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider.state('home', {
            url: '/body',
            views: {
                'main': {
                    templateURl: './body.html'
                 }
        },
        });
    })
