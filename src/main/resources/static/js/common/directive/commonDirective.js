/**
 * @ngdoc
 * @name
 * @description
 *
 * # Created by lwb on 2015/6/19.
 */
QY.DIRECTIVES.directive('errSrc', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                if (attrs.src != attrs.errSrc || !attrs.src) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
            attrs.$observe('ngSrc', function(value) {
                if (!value && attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
        }

    }
});