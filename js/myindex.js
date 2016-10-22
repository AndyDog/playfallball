	angular.module("myapp",["ngRoute"])
			.config(function($routeProvider){
				$routeProvider.
				   when("/login",{
				   	templateUrl:"html/login.html",
					controller:"a"
					
				}).when("/login",{
					templateUrl:"html/login.html"
					
				}).when("/register",{
					templateUrl:"html/register.html"
					
				}).when("/list",{
					templateUrl:"html/list.html"
					
				}).when("/detail",{
					templateUrl:"detail.html"
					
				}).when("/changePwd",{
					templateUrl:"html/changePwd.html"
					
				}).otherwise(
					{redirectTo:"/login"}
				)
			}).controller("a",function($scope,$http,$filter){
//			 $http.get("http://localhost:8080/users/list").success(function(data){
//				console.log(data)
//	})

			$http.jsonp("http://localhost:8080/myajax/list?callback=JSON_CALLBACK")
			    .success(
			        function(data, status, header, config){
			            alert(data.msg);
			        }
			    )
			    .error(
			        function(data){
			            alert("error");
			        }
			);
			})