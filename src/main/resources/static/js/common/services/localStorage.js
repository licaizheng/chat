/**
 *
 */
'use strict';
/**
 * @ngdoc function
 * @name QY.common:localStorageService
 * @description
 * # localStorageService
 * Storage Service of the QY app
 */
QY.COMMON
    .factory('LocalStorage', function () {
        return {
            set: function (key, data) {
                return window.localStorage.setItem(key, window.JSON.stringify(data));
            },
            get: function (key) {
                return window.JSON.parse(window.localStorage.getItem(key));
            },
            remove: function (key) {
                return window.localStorage.removeItem(key);
            }
        };
    });

