/**
 *
 */
'use strict';
QY.COMMON
    .factory('SessionStorage', function () {
        return {
            set: function (key, data) {
                return window.sessionStorage.setItem(key, window.JSON.stringify(data));
            },
            get: function (key) {
                return window.JSON.parse(window.sessionStorage.getItem(key));
            },
            remove: function (key) {
                return window.sessionStorage.removeItem(key);
            }
        };
    });


