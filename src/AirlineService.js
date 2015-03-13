/**
 * Created by namita on 13/3/15.
 */
(function (ng) {
    var airlineApp = ng.module('airlineApp');
    airlineApp.service("AirlineService", ["$http", "UrlConfig", function ($http, UrlConfig) {
        this.getAirportMap = function () {
            return $http.get(UrlConfig.airportMap);
        };
        this.getFlightList = function (from, to) {
            return $http.get(UrlConfig.flightsMap + from + to + ".json");
        };
    }]);
})(angular);