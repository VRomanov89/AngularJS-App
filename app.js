// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);



// SERVICES
weatherApp.service('cityService', function() {
    this.city = "New York, NY"
})



