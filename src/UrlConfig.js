/**
 * Created by Namita Malik on 13/3/15.
 */
(function (ng) {
    var airlineApp = ng.module("airlineApp");
    airlineApp.factory("UrlConfig", function () {
        return {
            airportMap: "./flightDetails/airportMap",
            airlineMap: "./flightDetails/airlineMap",
            flightsMap: "./flightDetails/flights"
        }
    });
})(angular);
