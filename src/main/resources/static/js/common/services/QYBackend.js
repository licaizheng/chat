/**
 * Created by zhaixt on 2015/6/8.
 */
(function (window, angular, undefined) {
    'use strict';

    var authHeader = 'authorization';

    angular.module("QY.backend")
    .factory('User', ["$resource", "ENV", function ($resource,ENV) {
            return $resource(ENV.urlBase + "/User/userId/:userId", {}, {
                getAll: {
                    method: "GET",
                    url: ENV.urlBase + "/User/list/all",
                    isArray: true
                },
                create: {
                    method: "POST",
                    url: ENV.urlBase + "/User/create",
                    isArray: false
                },
                delete: {
                    method: "POST",
                    url: ENV.urlBase + "/User/delete",
                    isArray: false
                },
                update:{
                    method: "POST",
                    url: ENV.urlBase + "/User/update",
                    isArray: false
                },
                getAllByUserId: {
                    method: "POST",
                    url: ENV.urlBase + "/User/list/allUser/:orgId",
                    isArray: false
                },
                deleteActiveUser:{
                    method: "POST",
                    url: ENV.urlBase + "/User/deleteActiveUser",
                    isArray: false
                },
                changePassWord : {
                    method: "POST",
                    url: ENV.urlBase + "/User/changePassWord",
                    isArray: false
                }
            })
        }
        ])
    /**
     * 查询权限的信息(李财政)
     */
        .factory("Privilege", ["$resource", "ENV", function ($resource, ENV) {
            return $resource(ENV.urlBase + "privilege", {}, {
                    /**
                     * 获取全部用户权限
                     * @param params
                     * @returns {*}
                     */
                    get: {
                        method: "GET",
                        url: ENV.urlBase + "/privilege",
                        isArray: true
                    },
                getPrivilegeList:{
                    method:"GET",
                    url:ENV.urlBase+"/privilege/list/",
                    isArray:false
                },
                queryById: {
                    method: "GET",
                    url: ENV.urlBase + "/privilege/:privilegeId",
                    isArray: false
                },
                queryByRoleId: {
                    method: "GET",
                    url: ENV.urlBase + "/privilege/query/roleId/:roleId",
                    isArray: true
                },
                save: {
                    method: "POST",
                    url: ENV.urlBase + "/privilege/save",
                    isArray: false,
                    data: this
                },
                delete:{
                    method: "POST",
                    url:ENV.urlBase + "/privilege/delete",
                    isArray: false
                },
                update:{
                    method: "POST",
                    url: ENV.urlBase + "/privilege/update",
                    isArray: false
                },
                getPrivilegeListByUserId:{
                    method:"GET",
                    url:ENV.urlBase+"/privilege/new/user/:userId",
                    isArray:false
                }
            });
        }])
        /*
         add by lwb
         */
            .factory('Merchant', [ "$resource","ENV", function ($resource, ENV) {
                return $resource(ENV.urlBase + "/organization", {}, {
                    get: {
                        method: "GET",
                        url: ENV.urlBase + "/organization",
                        isArray: true
                    },
                    getListObj:{
                        method: "GET",
                        url: ENV.urlBase + "/organization/queryList",
                        isArray: false
                    },
                    getSubOrgById: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/subOrg/:orgId",
                        isArray: true
                    },
                    queryById: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/:orgId",
                        isArray: false
                    },
                    getByOrgName: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/orgName/:orgName",
                        isArray: true
                    },
                    getOrgTree: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/orgTree/:orgId",
                        isArray: true
                    },
                    //合作商户管理显示集团所属机构
                    getOrgGroupList: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/orgGroupList/:userId",
                        isArray: true
                    },
                    //集团管理员查询上级机构，新建商户所用,author:zhaixt
                    getQueryGroupOrgList: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/queryOrgGroupList/:orgName.:userId",
                        isArray: true
                    },
                    getOrgTreeNotPrefix: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/findOrgTreeNotPrefix/:orgId",
                        isArray: true
                    },
                    getChildren: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/children/orgTree/:orgId",
                        isArray: true
                    },
                    add: {
                        method: "POST",
                        url: ENV.urlBase + "/organization/save",
                        isArray: false,
                        data: this
                    },
                    delete: {
                        method: "POST",
                        url: ENV.urlBase + "/organization/delete",
                        isArray: false
                    },
                    deleteGroup: {
                        method: "POST",
                        url: ENV.urlBase + "/organization/deleteGroup",
                        isArray: false
                    },
                    update: {
                        method: "POST",
                        url: ENV.urlBase + "/organization/update",
                        isArray: false
                    },
                    getOrgByUserId: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/userId/:userId",
                        isArray: false
                    },

                    getProvinces: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/provinces",
                        isArray: true
                    },
                    getCities: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/province/:province",
                        isArray: true
                    },
                    getDistricts: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/city/:city",
                        isArray: true
                    },
                    getOrganizationAll: {
                        method: "GET",
                        url: ENV.urlBase + "/organization/all",
                        isArray: false
                    },
                    getUploadToken: {
                        method: "GET",
                        url:  ENV.urlBase + "/file/uploadToken",
                        isArray: false
                    },
                    getOrganizationNewByOrgId: {
                        method: "GET",
                        url:  ENV.urlBase + "/organization/new/org/:id",
                        isArray: false
                    },
                    getOrgListNewByOrgId: {
                        method: "GET",
                        url:  ENV.urlBase + "/organization/new/org/list/:currentPage/:pageSize",
                        isArray: false
                    }
                })
            }])
        .factory("Role", ["$resource", "ENV", function ($resource, ENV) {
            return $resource(ENV.urlBase + "role", {}, {
                getRoleListByOrgId: {
                    method: "GET",
                    url: ENV.urlBase + ENV.api + "/role/list/:orgId/:currentPage/:pageSize",
                    isArray: false
                },
                findRoleByOrgId: {
                    method: "GET",
                    url: ENV.urlBase + ENV.api + "/role/list/:orgId",
                    isArray: true
                },
                createRole: {
                    method: "POST",
                    url: ENV.urlBase + ENV.api + "/role/new/createRole",
                    isArray: false
                },
                updateRole: {
                    method: "POST",
                    url: ENV.urlBase + ENV.api + "/role/new/updateRole",
                    isArray: false
                },
                deleteRole: {
                    method: "DELETE",
                    url: ENV.urlBase + ENV.api + "/role/new/deleteRole/:id",
                    isArray: false
                },
                getRoleDetail: {
                    method: "GET",
                    url: ENV.urlBase + ENV.api + "/role/new/detail/:id",
                    isArray: false
                }
            });
        }])
        /**
         * 处方订单相关
         * add by gaoxing
         */
        .factory("PrescriptionOrder",["$resource", "ENV", function ($resource, ENV) {
            return $resource(ENV.urlBase + "PrescriptionOrder", {}, {
                create: {
                    method: "POST",
                    url: ENV.urlBase + "PrescriptionOrder/save",
                    isArray: false
                }
            })
        }])
        .factory("Orders", ["$resource", "ENV", function ($resource, ENV) {
            return $resource(ENV.urlBase + "Order", {}, {
                findAllByOrgIdAndOrderType: {
                    method: "POST",
                    url: ENV.urlBase + "/Order/findByOrgIdAndOrderType/orgId/:orgId/orderType/:orderType",
                    isArray: false,
                    timeout: 40000
                },
                getOrderDetail: {
                    method: "GET",
                    url: ENV.urlBase + "/Order/orderDetail/orderId/:orderId",
                    isArray: false,
                    timeout: 40000
                },
                findUnsentOrders: {
                    method: "POST",
                    url: ENV.urlBase + "/Order/findUnsentOrders/orgId/:orgId/orderStatus/:orderStatus/orderType/:orderType",
                    isArray: false,
                    timeout: 40000
                },
                updateDelivery: {
                    method: "POST",
                    url: ENV.urlBase + "/Order/updateDelivery/orderId/:orderId",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    isArray: false,
                    timeout: 40000
                },
                closeOrder: {
                    method: "POST",
                    url: ENV.urlBase + "/Order/closeOrder/orderId/:orderId",
                    isArray: false,
                    timeout: 40000
                },
                getOrderByPrescription:{
                    method: "GET",
                    url: ENV.urlBase + "/prescription/PrescriptionOrder/prescriptionNo/:prescriptionNo",
                    isArray: false
                },
                createPrescriptionOrder:{
                    method: "POST",
                    url: ENV.urlBase + "/prescription/createPrescriptionOrder",
                    isArray: false
                }
            })
        }])
        /**
         * 处方相关
         * add by gaoxing
         */
        .factory("Prescription",["$resource", "ENV", function ($resource, ENV) {
            return $resource(ENV.urlOnlineHospital + "/prescription", {}, {
                getAll: {
                    method: "GET",
                    url: ENV.urlOnlineHospital + "/doctor/prescription/all/hospitalId/:hospitalId/currentPage/:currentPage/pageSize/:pageSize",
                    isArray: false
                },
                getByStatus:{
                    method: "GET",
                    url: ENV.urlOnlineHospital + "/doctor/prescription/hospitalId/:hospitalId/status/:status/currentPage/:currentPage/pageSize/:pageSize",
                    isArray: false
                },
                getDetailById: {
                    method: "GET",
                    url: ENV.urlOnlineHospital + "/doctor/getPrescriptionInfo?prescriptionId=:id",
                    isArray: false
                },
                updateStatus:{
                    method: "POST",
                    url: ENV.urlOnlineHospital + "/doctor/prescription/update/prescriptionId/:prescriptionId/state/:state",
                    isArray: false
                },
                getHospitalIdByOrgId:{
                    method: "GET",
                    url: ENV.urlBase + "/prescription/Hospital_Organization/orgId/:orgId",
                    isArray: false,
                    timeout:40000
                },
                getByDate:{
                    method: "GET",
                    url: ENV.urlOnlineHospital + "/doctor/prescription/hospitalId/:hospitalId/startTime/:startTime/endTime/:endTime/currentPage/:currentPage/pageSize/:pageSize",
                    isArray: false
                },
                getDocPubKey:{
                    method: "GET",
                    url: ENV.urlOnlineHospital + "/doctor/getDocPubKey?hospitalCode=:hospitalCode&doctorCode=:doctorCode",
                    isArray: false
                },
                getRecordByPrescriptionNo:{
                    method: "GET",
                    url: ENV.urlBase + "/prescription/PrescriptionRecord/prescriptionNo/:prescriptionNo",
                    isArray: false
                }
            })
        }])
        ///**
        // * 药典相关
        // * add by gaoxing
        // */
        //.factory("Pill",["$resource", "ENV", function ($resource, ENV) {
        //    return $resource(ENV.urlPill + "/pill", {}, {
        //        getPillList: {
        //            method: "GET",
        //            url: ENV.urlPill + "/pill/:name&:producer",
        //            isArray: true
        //        },
        //        getPillDetail: {
        //            method: "GET",
        //            url: ENV.urlPill + "/pill/detail/:pharmBaseCode",
        //            isArray: true
        //        }
        //    })
        //}])
})(window, window.angular);


