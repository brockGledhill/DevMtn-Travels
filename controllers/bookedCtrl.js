angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainService){

$scope.travelInfo = mainService.travelInfo;

$scope.locationInfo = function(){
  for (var i = 0; i < $scope.travelInfo.length; i++){
    if ($scope.travelInfo[i].id.toString() === $stateParams.id) {
      $scope.location = $scope.travelInfo[i];
      break;
    }
  }
};
$scope.locationInfo();

});
