var app = angular.module("sushiApp", ["ui.router", "ui.bootstrap"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("who_we_are", {
        url:"/",
        templateUrl: "./views/who_we_are.html",
        controller: "whoWeAreController"
    })
    .state("menu", {
        url: "/menu",
        templateUrl: "./views/menu.html",
        controller: "menuController"
    })
    .state("reservations", {
        url: "/reservations",
        templateUrl: "./views/reservations_index.html",
        controller: "reservationsController"
    })
        .state("newReservations", {
            url: "/reservations/new",
            templateUrl: "./views/reservations_form.html",
            controller: "reservationsController"
        })
        .state("showReservations", {
            url: "/reservations/:id",
            templateUrl: "./views/reservations_show.html",
            controller: "reservationsController"
        })
        .state("editReservation", {
            url: "/reservations/:id/edit",
            templateUrl: "./views/reservations_form.html",
            controller: "reservationsController"
        })
    .state("promotions", {
        url: "/promotions",
        templateUrl: "./views/promotions.html",
        controller: "promotionsController"
    })    

})