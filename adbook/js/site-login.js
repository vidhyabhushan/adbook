var app = angular.module("bookitApp", []);
app.controller("BookItController", function($scope) {
  $scope.records = [
    {
      "id" : "Alfreds Futterkiste",
      "img" : "assets/ims/google.png",
      "lat": "100",
      "lan": "200"
    },
    {
      "id" : "Berglunds snabbköp",
      "img" : "assets/ims/facebook.png",
      "lat": "100",
      "lan": "200"
    },
    {
      "id" : "Centro comercial Moctezuma",
      "img" : "assets/ims/skype.png",
      "lat": "100",
      "lan": "200"
    },
    {
      "id" : "Ernst Handel",
      "img" : "assets/ims/twitter.png",
      "lat": "100",
      "lan":"200"
    }
  ]
});