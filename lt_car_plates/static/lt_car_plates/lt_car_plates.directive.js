(function () {
    'use strict';

    angular.module('lt_car_plates.demo')
        .directive('ltCarPlates', LtCarPlatesDirective);

    function LtCarPlatesDirective() {
        return {
            templateUrl: '/static/lt_car_plates/car_plate.html',
            restrict: 'E',
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/lt_car_plates/carplates/' + $scope.carplate.id + '/';
                $scope.update = function () {
                    $http.put(
                        url,
                        $scope.carplate
                    );
                };

                $scope.delete = function () {
                    $http.delete(url).then(
                        function () {
                            var carplates = $scope.data;
                            carplates.splice(
                                carplates.indexOf($scope.carplate),
                                1
                            );

                        }
                    );
                };

                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    }

})();