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
    .run(["$rootScope","$state","$location","CommonMethods","$http",function($rootScope,$state,$location,CommonMethods,$http){

        /**
         * 根据导航条返回上一层
         */
        $rootScope.goBack = function(){
            var menuTitle =  CommonMethods.menuTitle();
            if(menuTitle.length>1){
                $state.go(menuTitle[menuTitle.length -2].stateName,menuTitle[menuTitle.length -2].params);
            }else{
                $state.go("main");
            }
        };
    }])
    .config(["$stateProvider","$urlRouterProvider","$httpProvider",function ($stateProvider, $urlRouterProvider,$httpProvider) {


        $stateProvider

            .state('main', {
                url: '/main',
                templateUrl: 'templates/main.html',
                controller: 'MainController',
                data:{"stateNameCn":"主页"}
            })
        ;

        $urlRouterProvider.otherwise('/main');
    }]);
