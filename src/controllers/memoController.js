app.controller('memoController',function($scope){
    $scope.todoInput = "";
    $scope.todoLists = [{text:'Clean House', flag:false}];
    $scope.todoAdd = function(){
        var value = $scope.todoInput;
        if(!value)return;
        $scope.todoLists.push({
            flag:false,
            text:value
        })
        $scope.todoInput = "";
    };
    $scope.remove = function(){
        var oldLists =  $scope.todoLists,
         newLists = [];
        oldLists.map((item,index)=>{
            if(!item.flag){
                newLists.push(item);
            }
        })
        $scope.todoLists = newLists;
    }
});