angular.module('myApp', []).controller('personCtrl', function ($scope)
{
    $scope.checkInteredNum = function ()
    {
        if (($scope.userInteredNum == 6) || ($scope.userInteredNum == 8))
        {
            $scope.result = "Correct :)";
        }
        else
        {
            $scope.result = "Incorrect!";
        }
    }
    
});