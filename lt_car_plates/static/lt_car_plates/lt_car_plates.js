(function () {
    'use strict';
    angular.module('lt_car_plates.demo', [])
        .controller('LtCarPlatesController', [ '$scope', '$http', '$window', LtCarPlatesController ]);

    function LtCarPlatesController($scope, $http, $window) {
        $scope.add = function (carplates, plate_number, car_brand, car_model, owner_name) {

            var new_car = {
                plate_number: plate_number,
                car_brand: car_brand,
                car_model: car_model,
                owner_name: owner_name
            };

            $http.post('/lt_car_plates/carplates/', new_car)
                .then(function (response) {
                    carplates.push(response.data);
                },
                function (response) {

                    if('plate_number' in response.data) {
                        $window.alert(JSON.stringify(response.data['plate_number'][0]));
                    }
                    else {
                        $window.alert(JSON.stringify(response.data));
                    }
                });
        };

        $scope.data = [];
        $http.get('/lt_car_plates/carplates/').then(
            function (response) {
                $scope.data = angular.fromJson(response.data);
            }
        )

    }
}());
