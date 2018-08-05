(function () {
    'use strict';
    angular.module('lt_car_plates.demo', [])
        .controller('LtCarPlatesController', [ '$scope', '$http', LtCarPlatesController ]);
    // console.log(carplates);
    function LtCarPlatesController($scope, $http) {
        $scope.add = function (carplates, plate_number) {

            // console.log(carplates);
            var new_plate_number = {
                plate_number: plate_number,
                car_brand: 'Nissan'
            };
            $http.post('/lt_car_plates/carplates/', new_plate_number)
                .then(function (response) {
                    carplates.push(response.data);
                });
        };

        $scope.data = [];
        $http.get('/lt_car_plates/carplates/').then(
            function (response) {
                $scope.data = response.data;
                console.log(response.data)
            }
        )

    }
}());
