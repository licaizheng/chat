/**
 *
 */
QY.SERVICES
/**
 *
 */
.factory('CommonMethods', ["SessionStorage",
    function (SessionStorage) {
        return {
            //对密码进行RSA加密方法
            getEncryptPwd: function (pwd) {
                return pwd;
            },
            /**
             * 弹出对话框
             * @param title
             * @param context
             */
            showAlert: function (title, context) {
                if (title == null) {
                    title = "";
                }
                if (context == null) {
                    context = "";
                }
                alert(context);
            },
            /**
             * 获取用户信息
             */
            userLoginInfo:function(value){
                if(value!=null){
                    SessionStorage.set("userLoginInfo",value);
                }else{
                    value=SessionStorage.get("userLoginInfo")||{};
                }
                return value;
            },
            /**
             * 获取用户权限
             */
            authorities:function(value){
                if(value!=null){
                    SessionStorage.set("authorities",value);
                }else{
                    value=SessionStorage.get("authorities")||[];
                }
                return value;
            },
            /**
             * 获取menuTitle
             */
            menuTitle:function(value){
                if(value!=null){
                    SessionStorage.set("menuTitle",value);
                }else{
                    value=SessionStorage.get("menuTitle")||[];
                }
                return value;
            },

            /**
             * 弹窗;;
             * @param {String} type / 弹窗类型（'alert'||'confirm'）
             * @param {String} text / 弹窗内容
             * @param {Function} callback
             * */

            ComTip:{
                'mActive':false,
                'cActive':false,
                'tipText':'',
                'callFn':'',
                showTip:function(type, text, callback){
                    var _that=this;
                    _that.mActive=true;
                    _that.tipText=text;
                    if(type=='confirm'){
                        _that.cActive=true;
                        _that.callFn = callback;
                    }
                },
                closeTip:function(){
                    var _that=this;
                    _that.mActive=false;
                    _that.cActive=false;
                }
            }


         }
    }]);
