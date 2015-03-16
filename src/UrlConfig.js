/**
 * Created by Namita Malik on 13/3/15.
 */
(function (ng) {
    var airlineApp = ng.module("airlineApp");
    airlineApp.factory("UrlConfig", function () {
        return {
            airportMap: "/Travel-App/flightDetails/airportMap",
            airlineMap: "/Travel-App/flightDetails/airlineMap",
            flightsMap: "/Travel-App/flightDetails/flights"
        }
    });
})(angular);
