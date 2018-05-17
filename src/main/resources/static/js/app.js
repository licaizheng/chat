/**
 * Created by caizheng on 2018/1/4.
 */
var QY = {};
QY.DIRECTIVES = angular.module('QY.directives', []);
QY.COMMON = angular.module('QY.common', []);
QY.CONFIG =angular.module('QY.config',[]);
QY.BACKEND = angular.module('QY.backend',['ngResource', 'QY.config']);
QY.MOCKBACKEND = angular.module('QY.mockBackend',[]);
QY.SERVICES = angular.module('QY.services', ['QY.common', 'QY.backend', 'QY.config','QY.mockBackend']);
QY.FILTERS = angular.module('QY.filters', ['QY.services']);
QY.CONTROLLERS = angular.module('QY.controllers', ['QY.services']);

angular.module('QY', ['ngAnimate', 'ui.router', 'QY.controllers', 'QY.services', 'QY.filters', 'QY.directives', 'QY.common', 'QY.backend', 'QY.config','ui.bootstrap'])

    .config(["$stateProvider","$urlRouterProvider","$httpProvider",function ($stateProvider, $urlRouterProvider,$httpProvider) {


        $stateProvider

            .state('main', {
                url: '/main',
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            })
            .state('main.test',{
                url:'/orange',
                controller: 'MaintestController',
                templateUrl:'templates/test.html'
            })
            .state('main.test1',{
                url:'/apple',
                templateUrl:'templates/test1.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',

                data:{"stateNameCn":"home"}
            })
        ;

        $urlRouterProvider.otherwise('/main');
    }]);
