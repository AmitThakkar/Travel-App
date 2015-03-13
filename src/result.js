/**
 * Created by namita on 13/3/15.
 */
(function(ng){
    var airlineApp = ng.module('airlineApp', []);
    airlineApp.controller('AirCtrl', ["$scope", "AirlineService", function ($scope, AirlineService) {
        AirlineService.getAirportMap()
            .success(function (response) {
                $scope.result = response;
            })
            .error(function (status) {
                console.log(status);
            });
        $scope.searchFlights = function(){
            AirlineService.getFlightList("Del","Mum")
                .success(function(response){
                    $scope.flights = response;

                })
                .error(function(status){
                    console.log(status);
                });
        };
    }]);
})(angular);