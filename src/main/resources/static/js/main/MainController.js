/**
 * Created by caizheng on 2018/1/4.
 */
/**
 * @ngdoc controllers
 * @name QY.controllers:MainController
 * @description
 * Main Page 控制器
 * # Created by zhongkewen on 2015/6/9.
 */
QY.CONTROLLERS
    .controller('MainController', ["$scope", "$state", "$log",
        function ($scope, $state, $log) {
            "use strict";
            //
            // //初始化变量和ready回调函数数组
            // var isReady=false,readyCallbacks=[];

            /**
             * 初始化
             */
            $scope.data = [{
                "select": "radio",
                "desc": "请选择性别",
                "option": [{"label": "男", "value": "0"}, {"label": "女", "value": "1"}],
                "isShow":false

            },{
                "select": "radio",
                "desc": "请选择年龄",
                "option": [{"label": "0-6岁", "value": "0"}, {"label": "7-12", "value": "1"}, {"label": "16-35", "value": "2"}, {"label": "其他", "value": "3"}],
                "isShow":false

            },
                {
                    "select": "text",
                    "desc": "请选择年龄",
                    "option": [{"label": "0-6岁", "value": "0"}, {"label": "7-12", "value": "1"}, {"label": "16-35", "value": "2"}, {"label": "其他", "value": "3"}],
                    "isShow":false

                }];

            $scope.anwser=[];

            $scope.change=function (outerIndex,innerIndex) {
                $scope.data[outerIndex].isShow=true;
                $scope.anwser[outerIndex]=$scope.data[outerIndex].option[innerIndex].label;

            };
            $scope.modify=function (outerIndex) {
                $scope.data[outerIndex].isShow=false;
            };
            $scope.cancel=function (outerIndex) {
                $scope.data[outerIndex].isShow=true;
            };
            $scope.init = function () {
                $scope.data = [{
                    "select": "radio",
                    "desc": "请选择性别",
                    "option": [{"label": "男", "value": "1"}, {"label": "女", "value": "0"}]

                }];
            };

            // /**
            //  * 初始化完成检查
            //  */
            // function initCompleteCheck(){
            //     isReady=true;
            //     for(var key in readyCallbacks){
            //         readyCallbacks[key]();
            //     }
            // }


        }
    ]);