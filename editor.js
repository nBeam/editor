angular.module('beamng.stuff')

.controller('EditorController', ['$log', '$scope', 'bngApi', function($log, $scope, bngApi) {
  if ($scope.initialized) {return; } // only run once

  $scope.$emit('MenuHide');

  var intervalID;
  $scope.$on('$destroy', function() {
    if (intervalID) { // works becuas var intervalID only sets it do undefined
      window.clearInterval(intervalID);
    }

  });

  angular.element(document).ready(function() {
    (function() {

    })();
  });
}

]);

// })();
