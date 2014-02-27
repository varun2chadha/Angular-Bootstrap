/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 
function customerController($scope, $http) {
     $http.get('../data/Rating_Plan.json').success(
    	 function(data) {
    		 	$scope.data = data;
    	 }
    );

}

function tabController($scope, $http){ 

$http.get('../data/Header.json').success(
    	 function(data) {
    		 	$scope.data = data;
    		 	$scope.rlconversion = function($event) {
    		 		var _id=$event.currentTarget.id;
    		 		if(_id=="RTL") {
    		 			var angular_link =$("link[rel=stylesheet]") 
						$(angular_link[0]).attr({href : "../css/bootstrap.rtl.css"});
    		 		}
    		 		else if(_id=="LTR") {
    		 			var angular_link =$("link[rel=stylesheet]") 
						$(angular_link[0]).attr({href : "../css/bootstrap.min.css"});
    		 		}
    		 	}
    	 }
    );

}

function footersController($scope, $http){ 
	$http.get('../data/Footer.json').success(
    	 function(data) {
    		 	$scope.data = data;
    	 }
    );

}

function ratingController($scope, $http){ 
}


function ratinPlanCtrl($scope, $http){
	  $http.get('../data/general-information.json').success(
    	 function(data) {
    		 	$scope.data = data;
    	 }
    );
}

function refillPlanCtrl($scope, $routeParams){
	  $scope.name = "refillPlanCtrl";
	  $scope.params = $routeParams;
}

function historyCtrl($scope, $routeParams){
	  $scope.name = "historyCtrl";
	  $scope.params = $routeParams;
}

function bundlepurchaseCtrl($scope, $routeParams){
	  $scope.name = "bundlepurchaseCtrl";
	  $scope.params = $routeParams;
} 

function languageModificationCtrl($scope, $routeParams){
	  $scope.name = "languageModificationCtrl";
	  $scope.params = $routeParams;
}

function managesubscriptionCtrl($scope, $routeParams){
	  $scope.name = "managesubscription";
	  $scope.params = $routeParams;
}

function managefriendsCtrl($scope, $routeParams){
	  $scope.name = "managefriendsCtrl";
	  $scope.params = $routeParams;
}

function managePeertoPeerCtrl($scope, $routeParams){
	  $scope.name = "managePeertoPeerCtrl";
	  $scope.params = $routeParams;
} 

function accountconsultationCtrl($scope, $routeParams){ 
	  $scope.name = "accountconsultationCtrl";
	  $scope.params = $routeParams;
}

function loginController($scope, $routeParams){ 
$scope.name = "loginController";
$scope.params = $routeParams;
}
