'use strict';

define([], function () {
    function ThirdController($scope, $http, $log, $dialog) {
        $scope.message = "I am the third controller";
        $scope.people = [];
        
        $scope.submit = function () {
            var newPerson = { "Name": this.name };
            $log.info('Add', newPerson);
            $scope.people.push(newPerson);
            this.name = ""; //clear
        };

        $scope.remove = function (idx) {
            
            var title = 'This is a message box';
            var msg = 'This is the content of the message box';
            var btns = [{ result: 'cancel', label: 'Cancel' }, { result: 'ok', label: 'OK', cssClass: 'btn-primary' }];

            $dialog.messageBox(title, msg, btns)
              .open()
              .then(function (result) {
                  if (result === 'OK') {
                      $log.info('Delete', $scope.people[idx]);
                      $scope.people.splice(idx, 1);
                  }
              });
        };

        //with promises:
        $http.get("/data/people.js")
            .success(function (data, status, headers, config) {
                angular.forEach(data, function (item) {
                    $scope.people.push(item);
                    $log.info('Loaded', item);
                });
            })
            .error(function (data, status, headers, config) {
                window.alert("error see log");
                $log.error(data);
            });
    }

    return ThirdController;
});

