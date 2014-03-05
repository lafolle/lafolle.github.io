var mod = angular.module('Sak', ['ui.bootstrap']).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/personal/:project', {templateUrl: '/static/partials/personal.html', controller: 'PersonalCtrl'}).
					when('/sire', {templateUrl: '/static/partials/sire.html', controller: 'SireCtrl'}).
					when('/', {templateUrl: '/static/partials/main.html', controller: 'SakCtrl'});
}]);


// CONTROLLERS
mod.controller('SakCtrl', ['$scope', '$location', function($scope, $location){

	$scope.projectmap = {"personal": {"Puducherry": { "images_count": 18, "links": [{"width": 569, "name": "A_TUB_FULL_OF_IDEAS.jpg", "height": 400}, {"width": 600, "name": "AN_ARTIST_S_MOTION.jpg", "height": 400}, {"width": 266, "name": "ART.jpg", "height": 400}, {"width": 466, "name": "BEYOND_COMMAND.jpg", "height": 400}, {"width": 266, "name": "CURED_WITH_MY_THOUGHTS.jpg", "height": 400}, {"width": 600, "name": "FADING_ORDER.jpg", "height": 400}, {"width": 600, "name": "HOPE.jpg", "height": 400}, {"width": 613, "name": "ILLUSIONS_OF_ORDER.jpg", "height": 400}, {"width": 284, "name": "IMG_1925.jpg", "height": 400}, {"width": 266, "name": "IMG_1990.jpg", "height": 400}, {"width": 600, "name": "mamma_o_mamma.jpg", "height": 400}, {"width": 600, "name": "SOAKING_ANSWERS.jpg", "height": 400}, {"width": 600, "name": "THE_HOLLOW_SENSE.jpg", "height": 400}, {"width": 255, "name": "THE_SACRIFICE.jpg", "height": 400}, {"width": 308, "name": "THE_YELLOW_SIDE_TO_IT.jpg", "height": 400}, {"width": 266, "name": "two_drops_of_heaven.jpg", "height": 400}, {"width": 266, "name": "WALLS_HAVE_A_MOUTH.jpg", "height": 400}, {"width": 600, "name": "WHEELS_OF_DEPENDENCY.jpg", "height": 400}]}, "Beri": {"images_count": 15, "links": [{"width": 600, "name": "beri1.jpg", "height": 400}, {"width": 300, "name": "beri10.jpg", "height": 400}, {"width": 266, "name": "beri11.jpg", "height": 400}, {"width": 266, "name": "beri12.jpg", "height": 400}, {"width": 225, "name": "beri13.jpg", "height": 400}, {"width": 533, "name": "beri14.jpg", "height": 400}, {"width": 600, "name": "beri15.jpg", "height": 400}, {"width": 600, "name": "beri2.jpg", "height": 400}, {"width": 634, "name": "beri3.jpg", "height": 400}, {"width": 600, "name": "beri4.jpg", "height": 400}, {"width": 533, "name": "beri5.jpg", "height": 400}, {"width": 670, "name": "beri6.jpg", "height": 400}, {"width": 776, "name": "beri7.jpg", "height": 400}, {"width": 725, "name": "beri8.jpg", "height": 400}, {"width": 533, "name": "beri9.jpg", "height": 400}]}, "Jaisalmer": {"images_count": 15, "links": [{"width": 266, "name": "life_00.jpg", "height": 400}, {"width": 266, "name": "life_01.jpg", "height": 400}, {"width": 600, "name": "life_02.jpg", "height": 400}, {"width": 629, "name": "life_03.jpg", "height": 400}, {"width": 600, "name": "life_05.jpg", "height": 400}, {"width": 600, "name": "life_06.jpg", "height": 400}, {"width": 600, "name": "life_07.jpg", "height": 400}, {"width": 600, "name": "life_08.jpg", "height": 400}, {"width": 679, "name": "life_09.jpg", "height": 400}, {"width": 600, "name": "life_10.jpg", "height": 400}, {"width": 266, "name": "life_11.jpg", "height": 400}, {"width": 266, "name": "life_12.jpg", "height": 400}, {"width": 266, "name": "life_13.jpg", "height": 400}, {"width": 266, "name": "life_14.jpg", "height": 400}, {"width": 266, "name": "life_15.jpg", "height": 400}, {"width": 266, "name": "life_16.jpg", "height": 400}]}, "Ladakh": {"images_count": 15, "links": [{"width": 599, "name": "ladakh 1.jpg", "height": 400}, {"width": 599, "name": "ladakh_02.jpg", "height": 400}, {"width": 599, "name": "ladakh_03.jpg", "height": 400}, {"width": 599, "name": "ladakh_04.jpg", "height": 400}, {"width": 599, "name": "ladakh_05.jpg", "height": 400}, {"width": 599, "name": "ladakh_06.jpg", "height": 400}, {"width": 599, "name": "ladakh_07.jpg", "height": 400}, {"width": 599, "name": "ladakh_08.jpg", "height": 400}, {"width": 599, "name": "ladakh_09.jpg", "height": 400}, {"width": 266, "name": "ladakh_10.jpg", "height": 400}, {"width": 266, "name": "ladakh_11.jpg", "height": 400}, {"width": 266, "name": "ladakh_12.jpg", "height": 400}, {"width": 266, "name": "ladakh_13.jpg", "height": 400}, {"width": 266, "name": "ladakh_14.jpg", "height": 400}, {"width": 266, "name": "ladakh_15.jpg", "height": 400}]}}};
	$scope.name = 'sakshi chowdhry';
	$scope.current_theme = 'main';
	$scope.current_project = 'main';

	$scope.goto = function(theme, project){
		if ( $scope.current_theme == theme && $scope.current_project == project) return;

		if ( theme == 'main' && project == 'main' && $scope.theme!='main' && $scope.project!='main'){
			$location.url('/');
		}
		if ( theme == 'sire' && project == 'sire' ) $location.url('/sire');
		else $location.url('/' + theme + '/' + project);
		$scope.current_theme = theme;
		$scope.current_project = project;
	}


}]).controller('PersonalCtrl', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.theme = 'personal';
	$scope.project = $routeParams.project;
	$scope.photolinks = [];
	console.log("project: "+$scope.project)
	for(var i=0;i<$scope.projectmap[$scope.theme][$scope.project].images_count;i++)
		$scope.photolinks.push({'baselink': '/static/photographs/' + $scope.theme + '/' + $scope.project + '/',
								'data': $scope.projectmap[$scope.theme][$scope.project].links[i]})

}]).controller('SireCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	console.log('sire controller loaded')

	// sire map
	var siremap = {"personal": {"sire": { images_count: 27, links: [{"width": 600, "name": "sakshi-01.jpg", "height": 400}, {"width": 578, "name": "sakshi-02.jpg", "height": 400}, {"width": 282, "name": "sakshi-03.jpg", "height": 400}, {"width": 609, "name": "sakshi-04.jpg", "height": 400}, {"width": 266, "name": "sakshi-05.jpg", "height": 400}, {"width": 600, "name": "sakshi-06.jpg", "height": 400}, {"width": 576, "name": "sakshi-07.jpg", "height": 400}, {"width": 290, "name": "sakshi-08.jpg", "height": 400}, {"width": 267, "name": "sakshi-09.jpg", "height": 400}, {"width": 599, "name": "sakshi-10.jpg", "height": 400}, {"width": 266, "name": "sakshi-11.jpg", "height": 400}, {"width": 279, "name": "sakshi-12.jpg", "height": 400}, {"width": 300, "name": "sakshi-13.jpg", "height": 400}, {"width": 584, "name": "sakshi-14.jpg", "height": 400}, {"width": 487, "name": "sakshi-15.jpg", "height": 400}, {"width": 591, "name": "sakshi-16.jpg", "height": 400}, {"width": 264, "name": "sakshi-17.jpg", "height": 400}, {"width": 266, "name": "sakshi-18.jpg", "height": 400}, {"width": 624, "name": "sakshi-19.jpg", "height": 400}, {"width": 600, "name": "sakshi-20.jpg", "height": 400}, {"width": 600, "name": "sakshi-21.jpg", "height": 400}, {"width": 598, "name": "sakshi-22.jpg", "height": 400}, {"width": 567, "name": "sakshi-23.jpg", "height": 400}, {"width": 267, "name": "sakshi-24.jpg", "height": 400}, {"width": 299, "name": "sakshi-25.jpg", "height": 400}, {"width": 300, "name": "sakshi-26.jpg", "height": 400}, {"width": 266, "name": "sakshi-27.JPG", "height": 400}]}}}

	$scope.photolinks = [];

	// populate links
	for(var i=0;i<siremap.personal.sire.images_count;i++)	
		$scope.photolinks.push({baselink: '/static/photographs/sire/',
								data: siremap.personal.sire.links[i]});
	console.log($scope.photolinks)

}]);


// DIRECTIVES
mod.directive('fadein', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.fadeOut(0);
			element.fadeIn(23000);
		}
	}
}).directive('fixWindowWidth', function(){
	return {
		restrict: 'A',
		scope: true,
		link: function(scope, element, attrs){
			// jaisalmer 6000
			// beri 7000
			var width;
			if (scope.theme == 'personal' && scope.project == 'Beri')
				width = '9000px';
			else if ( scope.theme == 'personal' && scope.project == 'Jaisalmer')
				width = '7900px';
			else if ( scope.theme == 'personal' && scope.project == 'Ladakh')
				width = '8100px';
			else if ( scope.current_theme == 'main' && scope.current_scope == 'main')
				width = 'auto';
			element.css({'width': width});
		}
	}
});



