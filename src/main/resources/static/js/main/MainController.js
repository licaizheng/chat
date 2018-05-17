/**
 * Created by caizheng on 2018/1/4.
 */

QY.CONTROLLERS/**
 * Created by caizheng on 2018/1/4.
 */

QY.CONTROLLERS
    .controller('MainController', ["$scope", "$state", "$log", "$http","$location",
        function ($scope, $state, $log, $http,$location) {
            "use strict";
            /**
             * 初始化
             */
            $scope.class1=[];
            $scope.class1[0]="";
            $scope.class1[1]="";
            $scope.class1[2]="";

            $scope.gopage =function (index) {

                for (var i =0;i<$scope.class1.length;i++){
                    if (i!=index) {
                        $scope.class1[i]="";
                    }
                    else {
                        $scope.class1[i]="top-nav-pre";
                    }
                }
                if (index==0) {
                    $state.go("main.test");
                }
                else if(index==1){
                    $state.go("main.test1");
                }
            }


        }
    ]);