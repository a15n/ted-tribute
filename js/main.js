'use strict';

var apiUrl = 'http://pipes.yahoo.com/pipes/pipe.run?_id=c6b9f27dbbdfed8e30e5dc0a9b445bda&_render=json';

function httpGet(theUrl) {
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

angular.module('tedForm', [])
  .controller('TedController', ['$scope',
    function($scope) {
      var allData = JSON.parse(httpGet(apiUrl));
      $scope.items = allData.value.items;
    }
  ])

;