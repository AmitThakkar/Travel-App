/**
 * Created by namita on 13/3/15.
 */
(function (ng) {
  var airlineApp = ng.module('airlineApp', []);
  airlineApp.controller('AirlineController', ["AirlineService", function (AirlineService) {
    var that = this;
    AirlineService.getAirportMap()
      .success(function (response) {
        that.airportMap = response;
      })
      .error(function (status) {
        console.log(status);
      });
    that.searchFlights = function () {
      AirlineService.getFlightList("Del", "Mum")
        .success(function (response) {
          that.flights = response;
        })
        .error(function (status) {
          console.log(status);
        });
    };
    that.sortObject = {
      sortBy: 'price',
      price: true
    };
    that.sortFlights = function (sortBy) {
      if (that.sortObject[sortBy]) {
        that.sortObject[sortBy] = false;
      } else {
        that.sortObject = {
          sortBy: sortBy
        };
        that.sortObject[sortBy] = true;
      }
    };
  }]);
})(angular);
