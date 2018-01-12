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
    .controller('MainController', ["$scope", "$state", "$log", "$http",
        function ($scope, $state, $log, $http) {
            "use strict";
            /**
             * 初始化
             */
            $scope.data = [{
                "select": "radio",
                "desc": "请选择性别",
                "option": [{"label": "男", "value": "0"}, {"label": "女", "value": "1"}],
                "isShow": false

            }, {
                "select": "radio",
                "desc": "请选择年龄",
                "option": [{"label": "0-6岁", "value": "0"}, {"label": "7-12", "value": "1"}, {
                    "label": "16-35",
                    "value": "2"
                }, {"label": "其他", "value": "3"}],
                "isShow": false

            },
                {
                    "select": "text",
                    "desc": "请问有什么不适症状？",
                    "label": "请输入症状，例如发烧、咳嗽等",
                    "content": "",
                    "isShow": false

                }, {
                    "select": "result",
                    "desc": "请问有什么不适症状？",
                    "label": "请输入症状，例如发烧、咳嗽等",
                    "content": "",
                    "isShow": false
                }
            ];
            $scope.json =
                 [{
                    "name": "内分泌科",
                    "value": [{
                        "sub_dept": [],
                        "haschild": 0,
                        "drug_info": 1,
                        "name": "糖尿病",
                        "weight": 0.24160916914471456,
                        "url": "https://entity.kangfuzi.com/#/disease/cf10bffa79e595ebb489325424aa1ce8",
                        "advice": ["1.学习糖尿病的基本知识，树立战胜疾病的信心。", "2.自我监测血糖。", "3.药物治疗，包括口服药物及胰岛素。", "4.运动治疗。", "5.饮食治疗。"],
                        "short_desc": "注意低糖饮食,禁烟酒,注意定期复查",
                        "rate": 1.519041196192,
                        "symptoms": "多饮、多食、消瘦、多尿",
                        "urgent": 0,
                        "serious_desc": "持续观察，如果症状加重，请及时就医",
                        "department": "内分泌科",
                        "serious": 2,
                        "nameid": "cf10bffa79e595ebb489325424aa1ce8",
                        "pathway": ["典型症状: <em>多饮</em>，多食，消瘦，<em>多尿</em>"],
                        "unconfirmed": ["待确认多食、消瘦等伴随症状", "确诊需要尿糖、尿液尿酸测定、冠脉血流分数测定等检查"],
                        "isShow":false
                    }, {
                        "sub_dept": [],
                        "haschild": 0,
                        "drug_info": 1,
                        "name": "痛风",
                        "weight": 0.013055658928446946,
                        "url": "https://entity.kangfuzi.com/#/disease/3ebfdf16642c4c4b2c5d0d03d55460c8",
                        "advice": ["1.急性期的治疗：痛风性关节炎急性期不主张使用降尿酸药物，治疗原则是尽早使用抗炎止痛药，缓解症状。", "2.间歇期及慢性期的治疗：降尿酸药物。"],
                        "short_desc": "多喝水，避免食用高嘌呤的食物",
                        "rate": 0.0,
                        "symptoms": "",
                        "urgent": 0,
                        "serious_desc": "持续观察，如果症状加重，请及时就医",
                        "department": "内分泌科",
                        "serious": 2,
                        "nameid": "3ebfdf16642c4c4b2c5d0d03d55460c8",
                        "pathway": ["典型症状: 高尿酸，关节痛，血尿"],
                        "unconfirmed": ["待确认关节痛、血尿、高尿酸等伴随症状", "确诊需要尿液尿酸测定、影像学检查、双肾B超等检查"],
                        "isShow":false
                    }]
                }, {
                    "name": "呼吸内科",
                    "value": [{
                        "sub_dept": [],
                        "haschild": 1,
                        "drug_info": 1,
                        "name": "急性上呼吸道感染",
                        "weight": 0.15425109104312776,
                        "url": "https://entity.kangfuzi.com/#/disease/0d418a784ab448bdeb36b5ee45199ea7",
                        "advice": ["1.一般治疗：注意适当休息，保持室内空气清新，多饮开水、保持体液充足，进高热量、高维生素饮食。", "2.病因治疗：病毒感染时目前尚无特效药物，常用金刚烷胺。细菌性感染时，根据病情适当选用抗生素。", "3.此外还需采用一些对症处理措施，如有发热、头痛、全身痛时可用解热止痛药；喷嚏、流涕、鼻塞时可用曲吡那敏（扑尔敏）、感冒通、1%麻黄碱滴鼻等；咳嗽时可用止咳药；咽痛时可用度米芬（杜灭芬）喉片、溶菌酶含片等。"],
                        "short_desc": "要注意保暖多喝水,避免受凉感冒",
                        "rate": 1.9928076996300002,
                        "symptoms": "咳嗽、流涕、鼻塞、发热",
                        "urgent": 0,
                        "serious_desc": "持续观察，如果症状加重，请及时就医",
                        "child": [{
                            "name": "感冒",
                            "weight": 0.07769643746084275,
                            "url": "https://entity.kangfuzi.com/#/disease/08d62eb50e9de42fd6e036cac6d57ca3",
                            "symptoms": "咳嗽、鼻塞、流涕、头痛、发热",
                            "urgent": 0,
                            "nameid": "08d62eb50e9de42fd6e036cac6d57ca3"
                        }, {
                            "name": "急性上呼吸道感染",
                            "weight": 0.07713354738298593,
                            "url": "https://entity.kangfuzi.com/#/disease/0d418a784ab448bdeb36b5ee45199ea7",
                            "symptoms": "咳嗽、流涕、鼻塞、发热",
                            "urgent": 0,
                            "nameid": "0d418a784ab448bdeb36b5ee45199ea7"
                        }],
                        "department": "呼吸内科",
                        "serious": 2,
                        "nameid": "0d418a784ab448bdeb36b5ee45199ea7",
                        "pathway": ["典型症状: <em>咳嗽</em>，<em>流涕</em>，鼻塞，发热"],
                        "unconfirmed": ["待确认发热、鼻塞等伴随症状", "确诊需要病毒和病毒抗体的测定、细菌培养、血常规检查等检查"],
                        "isShow":false
                    }]
                }];


            $scope.selectAll = false;
            $scope.show=function (outerIndex, innerIndex) {

                if ( $scope.json[outerIndex].value[innerIndex].isShow==true)
                $scope.json[outerIndex].value[innerIndex].isShow=false;
                else {
                    for (var i=0;i<$scope.json.length;i++){
                        for (var j=0;j<$scope.json[i].value.length;j++){
                            $scope.json[i].value[j].isShow=false;

                        }
                    }
                    $scope.json[outerIndex].value[innerIndex].isShow=true;
                }

            };
            $scope.all = function (outerIndex, innerIndex) {
                var l = $scope.data[outerIndex].option.length - 1;
                if (innerIndex != l) {
                    $scope.data[outerIndex].option[l].state = false;
                    // console.log($scope.data[outerIndex].option);
                } else {
                    $scope.data[outerIndex].option[l].state = true;
                    // console.log($scope.data[outerIndex].option);
                    // console.log($scope.data[outerIndex]);
                    $scope.data[outerIndex].isShow = true;
                    var d = [];
                    for (var i = 0; i < $scope.data[outerIndex].option.length; i++) {
                        // $scope.data[outerIndex].option[i].state=false;
                        d.push($scope.data[outerIndex].option[i].label);

                    }
                    $scope.anwser[outerIndex] = d.toString();
                    $http.get('/User/index').success(function (data) {
                        if (data) {
                            var s = {
                                "select": "text",
                                "desc": "请问有什么不适症状？",
                                "label": "请输入症状，例如发烧、咳嗽等",
                                "content": "",
                                "isShow": false

                            };
                            /**
                             * 修改提交之后将修改下边的元素全部删除，重新问卷
                             */
                            if (outerIndex < $scope.data.length)
                                $scope.data.splice(outerIndex + 1, $scope.data.length - outerIndex + 1);

                            $scope.data.push(s);

                        }
                        else {

                        }

                    }).error(function () {

                    });
                }
            };
            $scope.anwser = [];
            $scope.text = {"content": ""};
            /**
             * radio的点击事件
             */
            $scope.change = function (outerIndex, innerIndex) {
                $scope.data[outerIndex].isShow = true;
                $scope.anwser[outerIndex] = $scope.data[outerIndex].option[innerIndex].label;
                $http.get('/User/index').success(function (data) {
                    if (data) {
                        var s = {
                            "select": "result",
                            "desc": "请问有什么不适症状？",
                            "label": "请输入症状，例如发烧、咳嗽等",
                            "content": "",
                            "isShow": false

                        };
                        /**
                         * 修改提交之后将修改下边的元素全部删除，重新问卷
                         */
                        if (outerIndex < $scope.data.length)
                            $scope.data.splice(outerIndex + 1, $scope.data.length - outerIndex + 1);

                        $scope.data.push(s);

                    }
                    else {

                    }

                }).error(function () {
                });
            };

            $scope.cc = function (outerIndex, innerIndex) {
                $scope.data[outerIndex].isShow = true;
                var data = [];
                for (var i = 0; i < $scope.data[outerIndex].option.length; i++) {
                    if ($scope.data[outerIndex].option[i].state == true)
                        data.push($scope.data[outerIndex].option[i].label);
                }
                console.log(data);
                $scope.anwser[outerIndex] = data.toString();
                $http.get('/User/index').success(function (data) {
                    if (data) {
                        var s = {
                            "select": "text",
                            "desc": "请问有什么不适症状？",
                            "label": "请输入症状，例如发烧、咳嗽等",
                            "content": "",
                            "isShow": false

                        };
                        /**
                         * 修改提交之后将修改下边的元素全部删除，重新问卷
                         */
                        if (outerIndex < $scope.data.length)
                            $scope.data.splice(outerIndex + 1, $scope.data.length - outerIndex + 1);

                        $scope.data.push(s);

                    }
                    else {

                    }

                }).error(function () {

                });

            };
            /**
             * textarea的点击确认事件
             */
            $scope.conform = function (outerIndex, innerIndex) {
                $scope.data[outerIndex].isShow = true;
                $scope.anwser[outerIndex] = $scope.data[outerIndex].content;
                $http.get('/User/index').success(function (data) {
                    if (data) {
                        var s = {
                            "select": "last",
                            "desc": "请选择性别",
                            "option": [{"label": "男", "value": "0", "state": "false"}, {
                                "label": "女",
                                "value": "1",
                                "state": "false"
                            }, {"label": "都没有", "value": "2", "state": "false"}],
                            "isShow": false
                        };
                        /**
                         * 修改提交之后将修改下边的元素全部删除，重新问卷
                         */
                        if (outerIndex < $scope.data.length)
                            $scope.data.splice(outerIndex + 1, $scope.data.length - outerIndex + 1);
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
            $scope.modify = function (outerIndex) {
                $scope.data[outerIndex].isShow = false;
            };
            /**
             * 取消按钮对应的事件
             */
            $scope.cancel = function (outerIndex) {
                $scope.data[outerIndex].isShow = true;
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