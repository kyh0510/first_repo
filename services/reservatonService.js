angular
    .module("sushiApp")
    .service("reservationService", function($http) {

        var _reservations = []
        var _reservationID = 0;

        function Reservation(id, date, time, noOfParty, lastName, phone, email) {
            this.id = id;
            this.date = date;
            this.time = time;
            this.noOfParty = noOfParty;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
        }

        this.getTables = function (cb) {
            if (_reservations.length == 0) {
                $http.get("../db/reservations.json")
                    .success(function (response) {
                        _reservations = response
                        cb(_reservations)
                    })
                    .error(function (error) {
                        console.log(error);
                    })
            }
            else {
                cb(_reservations)
            }
        }

        this.getTableById = function(id) {
            if (id === undefined || id === null || id === "") {
                var reservation = {
                    date: "",
                    time: "",
                    noOfParty: "",
                    lastName: "",
                    phone: "",
                    email: ""
                }
                return reservation
            }
            else {
                for (var i = 0; i < _reservations.length; i++) {
                    if (_reservations[i].id == id) {
                        return _reservations[i]
                    }
                }
            }
        }

        this.addTable = function(date, time, noOfParty, lastName, phone, email) {
            _reservations.unshift(new Reservation(_reservationID++, date, time, noOfParty, lastName, phone, email))
            console.log(_reservations);
        }

        this.updateTable = function(reservationId, date, time, noOfParty, lastName, phone, email) {
            _reservatons.splice(reservationId, 1, new Reservation(reservationId, date, time, noOfParty, lastName, phone, email))
        }

        this.deleteTable = function(reservationId) {
            for (var i = 0; i < _reservations.length; i++) {
                if (_reservations[i].id == reservationId) {
                    _reservations.splice(i, 1)
                }
            }
        }
    })