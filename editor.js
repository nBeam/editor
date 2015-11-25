angular.module('beamng.stuff')
.controller('EditorController', ['$log', '$scope', 'bngApi', function($log, $scope, bngApi) {
  if ($scope.initialized) {return; } // only run once


  var intervalID;
  $scope.$on('$destroy', function() {

  });

  angular.element(document).ready(function() {
    (function() {

    })();
  });
}

]).controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
}).controller('editorMenu',['$log', '$scope', function ($log, $scope) {
  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
     originatorEv = ev;
     $mdOpenMenu(ev);
  }
}]);
// })();
