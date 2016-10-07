angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $stateParams, mainService){

$scope.travelInfo = mainService.travelInfo;


});
