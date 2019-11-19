app.controller('noteController',function($scope){
    $scope.value = "";
    $scope.lists = [];
    $scope.save = function(){
        if(!$scope.value) return;
        $scope.lists.push($scope.value);
    };
    $scope.clear = function(){
        $scope.value = "";
    }
})