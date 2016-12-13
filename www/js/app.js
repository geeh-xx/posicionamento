// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform,$rootScope,$stateParams,$http,$ionicPopup) {
  var $scope = $rootScope.$new();
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $scope.buscar = function(){
    var  urlApi =  null;
    urlApi = 'http://localhost:8080/apirest/v1/pessoa/mensagem';
    $http.get(urlApi)
      .success(function (data){
        var x2js = new X2JS();
        var msg  = x2js.xml_str2json(data);
        $scope.dados = msg.mensagemJogoOnline;

        console.log($scope.dados);
      })
      .error(function (data, status, headers, config) {
        // var alertPopup = $ionicPopup.alert({
        //   title: 'Serviço indisponivel!'
        // });
      });

    $scope.buscar();
  }

  $scope.buscar();

})
