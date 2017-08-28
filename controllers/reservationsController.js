angular
.module("sushiApp")
.controller("reservationsController", function($scope, $state, $stateParams, reservationService) {

    var _reservation = reservationService.getTableById($stateParams.id)
    $scope.reservation = _reservation

    reservationService.getTables(function (response) {
        $scope.reservations = response
    })

    if ($stateParams.id === undefined || $stateParams.id === null || $stateParams.id === "") {
        $scope.formHeader = "Make A Reservation!"
        $scope.submitButton = true;
        $scope.updateButton = false;
      }
      else {
        $scope.formHeader = "Update Info"
        $scope.submitButton = false;
        $scope.updateButton = true;
      }
  
      console.log($scope.reservation);

    $scope.addTable = function () {
        console.log($scope.reservation);
        reservationService.addTable($scope.reservation.date, $scope.reservation.time, 
        $scope.reservation.noOfParty, $scope.reservation.lastName, $scope.reservation.phone, 
        $scope.reservation.email)
   
        $state.go("reservations")
    }

    $scope.updateTable = function() {
        reservationService.updateTable($stateParams.id, $scope.reservation.date, 
            $scope.reservation.time, $scope.reservation.noOfParty, $scope.reservation.lastName, 
            $scope.reservation.phone, $scope.reservation.email)

            $state.go("showReservatons", { "id": $stateParams.id});
    }

    $scope.deleteTable = function() {
        reservationService.deleteTable($stateParams.id)
        $state.go("reservations")
    }

})