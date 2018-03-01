var myApp = angular.module('myApp', ['ngMessages', 'daterangepicker', 'chart.js']);

myApp.run(function($window, $rootScope) {
      $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function() {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);

      $window.addEventListener("online", function() {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
});

function limitar (cadena){
  var date = new Date(cadena);
  
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return year+'-' + month + '-'+dt;
}

/*Change port if its neccesary. Be sure it's the same as the command you ran in server-side*/
var URL = {"host": "http://localhost:9000/"};