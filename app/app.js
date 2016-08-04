angular.module('app', [])
    .controller('gitHubDataController', ['$scope', '$http', function ($scope, $http) {

        $scope.issueLoaded = false;
        $scope.userLoaded = false;
        $scope.username = "angular";

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadIssues();
            })
            .error(function () {
                $scope.userLoaded = true;
            });

        var loadIssues = function () {
            $http.get('https://api.github.com/repos/angular/angular.js/issues')
                .success(function (data) {
                    $scope.issueData = data;
                })
                .error(function() {
                    $scope.issueLoaded = true;
            });
        };

        $scope.predicate = '-updated_at';

    }]);