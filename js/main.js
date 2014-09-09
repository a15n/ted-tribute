'use strict';

var apiUrl = 'http://pipes.yahoo.com/pipes/pipe.run?_id=c6b9f27dbbdfed8e30e5dc0a9b445bda&_render=json';

function httpGet(theUrl){
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function parseTitle(inputArray){
  var i = inputArray.length;
  while (i--) {
    var title = inputArray[i].title;
    inputArray[i].title = title.substring(title.indexOf(':', title.indexOf(':') + 1)+2);
  }
  return inputArray;
}

angular.module('tedForm', [])
  .controller('TedController', ['$scope','$timeout',
    function($scope, $timeout) {

      console.time('items loaded: ');

      $scope.loading = true; //already ng-init in HTML

      // var allData = JSON.parse(httpGet(apiUrl));

      // to help during development only. Minimizes API calls. Remove JS reference in HTML before deploying
      var allData = bigObject;

      var parsedItems = parseTitle(allData.value.items);
      $scope.items = parsedItems;

      $timeout(function(){
        $scope.loading = false;
        console.timeEnd('items loaded: ');
      }, 1000);



    }
  ])

;