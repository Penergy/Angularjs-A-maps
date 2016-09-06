(function (){
	'use strict';

	var mapDirective = function () {
		return {
			restrict: 'AE',
			// controller: '__MapController',
			// controllerAs: 'ngamap'
			template:
				"<div> test </div>",
			
		};
	};

	angular.module('ngAmap').directive('amap', [mapDirective]);
	angular.module('ngAmap').directive('ngAmap', [mapDirective]);
})();