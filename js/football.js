var app = angular.module("football",[]);
app.controller("contro",function($scope,$http,$filter) {
	/**
	 * 加载数据，使用ajax技术
	 */
	$http.get("csl-data.json").success(function(data){
		$scope.footInfos = data;
	})
	
    $scope.myready = "Round";
	
	$scope.ready = function(myready,e){
		angular.element(e.target).toggleClass("dropup"); 
		if (myready == $scope.myready) {
			$scope.myready = "-"+myready;
		} else {
			$scope.myready = myready;
		}	
		
		
	};
	
			
})