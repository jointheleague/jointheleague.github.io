angular.module('teachers')
  .controller('MainController', [
    '$scope',
    '$http',
    'classInfo',
    function($scope, $http, classInfo) {

      $scope.title = 'Teachers for the Win!';
      $scope.classList = [];

      var url = "data/league-classes.csv";

      // Function to process CSV data
      function processCSV(allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];

        for (var i=1; i<allTextLines.length; i++) {
          var data = allTextLines[i].split(',');
          if (data.length == headers.length) {

            var tarr = {};
            for (var j=0; j<headers.length; j++) {
              tarr[headers[j]] = data[j];
            }

            lines.push(tarr);
          }
        }
        return lines;
      }

      $http.get(url).success( function(data) {
        $scope.classList = processCSV(data);
      });

    }
  ]);