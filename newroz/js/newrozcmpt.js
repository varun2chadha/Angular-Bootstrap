var newrozApp = angular.module('mycomponent', [])
  
  .directive('headernav', function() {	
    return {
      restrict: 'E',
      scope: { },
	  controller: function($scope, $element) {
     },
      templateUrl:'/newroz/tmpl/headernav.html',
      replace: true
    };
  })

  .directive('footernav', function() {	
    return {
      restrict: 'E',
      scope: { },
	  controller: function($scope, $element) {
     },
      templateUrl:'/newroz/tmpl/footernav.html',
      replace: true
    };
  })

  
   
  

  
/*  newrozApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'home.html', controller: customerController}).
      when('/ratingplan', {templateUrl: 'ratingplan.html', controller: ratinPlanCtrl}).
      otherwise({redirectTo: '/'});
}]); */ 

	// configure our routes
	newrozApp.config(function($routeProvider) {
		$routeProvider
		// route for the home page
		/*.when('/', {
			templateUrl : 'login.html',
			controller  : 'loginController'
		}) */ 
		
			// route for the home page
			.when('/', {
				templateUrl : 'general-information.html',
				controller  : 'customerController'
			})

			// route for the about page
			.when('/ratingplan', {
				templateUrl : 'ratingplan.html',
				controller  : 'ratinPlanCtrl'
			})
			// route for the account refill page.
			.when('/refill', {
				templateUrl : 'accountrefill.html',
				controller  : 'refillPlanCtrl'
			}) 
			// route for the account history page.
			.when('/history', {
				templateUrl : 'geteventhistory.html',
				controller  : 'historyCtrl'
			})
				// route for the account bundle purchase page.
			.when('/bundlepurchase', {
				templateUrl : 'bundlepurchase.html',
				controller  : 'bundlepurchaseCtrl'
			})
			
			// route for the language Modification page.
			.when('/languagemod', {
				templateUrl : 'LanguageModification.html',
				controller  : 'languageModificationCtrl'
			}) 
			
			// route for the manage Friends page.
			.when('/managefriends', {
				templateUrl : 'managefriends.html',
				controller  : 'managefriendsCtrl'
			}) 
			
			// route for the manage Friends page.
			.when('/managesubscription', {
				templateUrl : 'Managesubscription.html',
				controller  : 'managesubscriptionCtrl'
			}) 
			
			// route for the manage Peer to peer page.
			.when('/peertopeer', {
				templateUrl : 'Peertopeer.html',
				controller  : 'managePeertoPeerCtrl'
			}) 
						
			// route for the manage account consultation page.
			.when('/accountconsultation', {
				templateUrl : 'AccountConsultation.html', 
				controller  : 'accountconsultationCtrl'
			})
			
			// route for the logout page
			.when('/logout', {
				templateUrl : 'login.html',
				controller  : 'loginController'
			})  

	});
