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
// /**
//  * by gaoxing
//  * 正则表达式
//  */
//     .constant('REGEX',{
//         'alphanumeric':'^[a-zA-z0-9]+$'
//     })
//     .constant("RSA", {
//         "encryptionExponent": "10001",
//         "modulus": "93b2b4a59fe63cdc1a65c6e006d2a710de3d8bcfe93cb601f1af2c49946b80dfa1e607195b0ee8969e24544153fc12b84acdfbba53949f0a0d6c6f665dce4c37"
//     })
//     .constant("MessageConstant", {
//         //公共提示信息
//
//     })
;