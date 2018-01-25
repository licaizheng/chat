"use strict";

angular.module("QY.config", [])

    .constant("$ionicLoadingConfig", {
        "template": "请求中..."
    })
    .constant("ENV", {
        "version": "1.0.0",
        "name": "development",
        "debug": true,
        "accessToken": "",
        "api": "",
        "urlBase":"http://localhost:8080",//本地环境
        //"urlBase":"http://115.28.140.84:28080",//药商服务器环境
        "urlOnlineHospital":"http://115.28.53.150:8080/nh",//网络医院服务器
        "urlPill":"http://120.27.46.109:8091",//药典服务器
        "success":1,
        "fail":0,
        "error":-1
    })

;