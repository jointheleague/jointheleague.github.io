angular.module('teachers')
  .service('classInfo', ['$http', function($http) {



    function getClassIDs(classInfo) {
      var classIDs = [];
      for (var i=0; i<classInfo.length; i++) {
        classIDs.push(classInfo[i].ID);
      }
    }

    function getClassInfo(scope) {

      // Make ajax call to get the data
      $.ajax({
        type: "GET",
        url: "data/league-classes.csv",
        dataType: "text",
        success: function (data) {
          console.log(scope);
          scope.$apply(function() {
            scope.classList = processCSV(data);
            console.log(scope.classList);
          });
        }
      });

      //var classIDs = getClassIDs();
      //var classList = [];
      //var classReportBaseUrl = 'https://docs.google.com/spreadsheets/d/';
      //var classFormBaseUrl = 'https://docs.google.com/forms/d/';
      //for (var i=0;i<classIDs.length;i++) {
      //  classList.push({
      //    className:'Unknown',
      //    classReportURL:classReportBaseUrl,
      //    classFormURL:classFormBaseUrl + classIDs[i] + '/viewform'
      //  });
      //}
      //return classList;
    }

    return {
      getClassList: getClassInfo
    };

  }]);


//var classSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1REN8XXjnovALoQdJ2eSueFbi7T_DxnS1sGn8qF3jUNE';

//Tabletop.init( { key: '1p9ZdMTvuE2tDz_p1nAAjgoN4LBXI5qr4AZMnPYLbcyI',
//  callback: function(data, tabletop) { console.log(data) },
//  simpleSheet: true } );

//$http.jsonp(classSpreadsheetUrl).then(
//  function successCallback(res) {
//    console.log('Success!');
//    console.log(res);
//  },
//  function rejectCallback(err, res) {
//    console.log('Rejected :-(');
//    console.log(res);
//  }
//);

//function getFileList() {
//  $http({
//    method: 'GET',
//    url: '/someUrl'
//  }).then(function successCallback(response) {
//    console.log(response);
//    // this callback will be called asynchronously
//    // when the response is available
//  }, function errorCallback(response) {
//    consolel.log('There was an error');
//    // called asynchronously if an error occurs
//    // or server returns response with an error status.
//  });
//}

///**
// * Retrieve a list of File resources.
// *
// * @param {Function} callback Function to call when the request is complete.
// */
//function retrieveAllFiles(callback) {
//  var retrievePageOfFiles = function(request, result) {
//    request.execute(function(resp) {
//      result = result.concat(resp.items);
//      var nextPageToken = resp.nextPageToken;
//      if (nextPageToken) {
//        request = gapi.client.drive.files.list({
//          'pageToken': nextPageToken
//        });
//        retrievePageOfFiles(request, result);
//      } else {
//        callback(result);
//      }
//    });
//  };
//  var initialRequest = gapi.client.drive.files.list();
//  retrievePageOfFiles(initialRequest, []);
//}

