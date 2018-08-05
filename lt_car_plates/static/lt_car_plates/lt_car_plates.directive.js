(function () {
    'use strict';

    angular.module('lt_car_plates.demo')
        .directive('ltCarPlates', LtCarPlatesDirective);

    function LtCarPlatesDirective() {
        return {
            templateUrl: '/static/lt_car_plates/car_plate.html',
            restrict: 'E'
        };

    }

})();