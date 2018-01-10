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
    .controller('MainController', ["$scope", "$state", "$log","$http",
        function ($scope, $state, $log,$http) {
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
                    "desc": "请问有什么不适症状？",
                    "label":"请输入症状，例如发烧、咳嗽等",
                    "content":"",
                    "isShow":false

                },{
                    "select": "result",
                    "desc": "请问有什么不适症状？",
                    "label":"请输入症状，例如发烧、咳嗽等",
                    "content":"",
                    "isShow":false

                }
            ];

            // $scope.selectAll=false;
            // $scope.all= function (m) {
            //     for(var i=0;i<$scope.persons.length;i++){
            //         if(m===true){
            //             $scope.persons[i].state=true;
            //         }else {
            //             $scope.persons[i].state=false;
            //         }
            //     }
            // };
            // $scope.persons=[
            //     {name:"a",state:false},
            //     {name:"b",state:false},
            //     {name:"c",state:false},
            //     {name:"d",state:false}
            // ]
            $scope.selectAll=false;
            $scope.all= function (m,outerIndex,innerIndex) {
                for(var i=0;i<$scope.data[outerIndex].option.length;i++){
                    if(m===true){
                        $scope.data[outerIndex].option[i].state=true;
                    }else {
                        $scope.data[outerIndex].option[i].state=false;
                    }
                }
            };
            $scope.anwser=[];
            $scope.text={"content":""};
            /**
             * radio的点击事件
             */
            $scope.change=function (outerIndex,innerIndex) {
                $scope.data[outerIndex].isShow=true;
                $scope.anwser[outerIndex]=$scope.data[outerIndex].option[innerIndex].label;

            };
            $scope.cc=function (outerIndex,innerIndex) {
                var data=[];
                for(var i =0;i<$scope.data[outerIndex].option.length;i++){
                        if ($scope.data[outerIndex].option[i].state==true)
                            data.push($scope.data[outerIndex].option[i].label);
                }
                console.log(data);

            };
            /**
             * textarea的点击确认事件
             */
            $scope.conform=function (outerIndex,innerIndex) {
                $scope.data[outerIndex].isShow=true;
                $scope.anwser[outerIndex]=$scope.data[outerIndex].content;
                $http.get('/User/index').success(function (data) {
                    if (data) {
                        var s ={
                            "select": "last",
                            "desc": "请选择性别",
                            "option": [{"label": "男", "value": "0","state":"false"}, {"label": "女", "value": "1","state":"false"}],
                            "isShow":false
                        };
                        /**
                         * 修改提交之后将修改下边的元素全部删除，重新问卷
                         */
                        if(outerIndex<$scope.data.length)
                           $scope.data.splice(outerIndex+1,$scope.data.length-outerIndex+1);

                        $scope.data.push(s);

                    }
                    else {

                    }

                }).error(function () {

                });
            };
            /**
             * 修改按钮对应的事件
             */
            $scope.modify=function (outerIndex) {
                $scope.data[outerIndex].isShow=false;
            };
            /**
             * 取消按钮对应的事件
             */
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


        }
    ]);