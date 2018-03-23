index.html是加载界面,负责导入所有的html和js文件
app.js是负责html和js对应的控制文件
post请求实例,写在了 checkbox的全不选的事件中了,
 //post请求实例
                    $http({
                        method:'post',
                        url:'http://192.168.1.109:8080/User/save',//地址
                        params:{"name":"aaa","address":"啊啊"}//参数

                    }).success(function(req){//成功的回调函数
                        console.log(req);
                    }).error(function () {//失败的回调函数
                    });
前后台通信的数据结构:
var s = {"select": "time",// radio(单选),checkbox(多选),checkbox_text(多选加文字),time(时间),text(文字描述),result(结果)
         "desc": "请输入年龄:",//描述
         "option": [{"label": "岁", "value": "0", "state": "false","note": "感到没有力气",},//这里有个note字段,是多选按钮的描述,可有可无,不加没有影响
                    {"label": "月", "value": "1", "state": "false"},//state是选择状态的表示,全部是false即可
                    {"label": "天", "value": "2", "state": "false"}],//多选
                    "content":"",//前台需要的字段,不用赋值,为空即可
                    "isShow": false,//前端的展示字段,直接设置为False即可
                    "label": "请输入症状，例如发烧、咳嗽等",//text的文字描述
                        };
                        /**
  //结果展示字段
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
                        "isShow": false
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
                        "isShow": false
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
                        "isShow": false
                    }]
                }];