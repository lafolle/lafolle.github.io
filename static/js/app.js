var mod = angular.module('Sak', ['ui.bootstrap']).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/personal/:project', {templateUrl: '/static/partials/personal.html', controller: 'PersonalCtrl'}).
	when('/', {templateUrl: '/static/partials/main.html', controller: 'SakCtrl'});
}]);


// CONTROLLERS
mod.controller('SakCtrl', ['$scope', '$location', function($scope, $location){
	$scope.projectmap = {"personal": {"Puducherry": {"images_count": 18, "links": [{"width": 569, "name": "A_TUB_FULL_OF_IDEAS.jpg", "height": 400}, {"width": 600, "name": "AN_ARTIST_S_MOTION.jpg", "height": 400}, {"width": 266, "name": "ART.jpg", "height": 400}, {"width": 466, "name": "BEYOND_COMMAND.jpg", "height": 400}, {"width": 266, "name": "CURED_WITH_MY_THOUGHTS.jpg", "height": 400}, {"width": 600, "name": "FADING_ORDER.jpg", "height": 400}, {"width": 600, "name": "HOPE.jpg", "height": 400}, {"width": 613, "name": "ILLUSIONS_OF_ORDER.jpg", "height": 400}, {"width": 284, "name": "IMG_1925.jpg", "height": 400}, {"width": 266, "name": "IMG_1990.jpg", "height": 400}, {"width": 600, "name": "mamma_o_mamma.jpg", "height": 400}, {"width": 600, "name": "SOAKING_ANSWERS.jpg", "height": 400}, {"width": 600, "name": "THE_HOLLOW_SENSE.jpg", "height": 400}, {"width": 255, "name": "THE_SACRIFICE.jpg", "height": 400}, {"width": 308, "name": "THE_YELLOW_SIDE_TO_IT.jpg", "height": 400}, {"width": 266, "name": "two_drops_of_heaven.jpg", "height": 400}, {"width": 266, "name": "WALLS_HAVE_A_MOUTH.jpg", "height": 400}, {"width": 600, "name": "WHEELS_OF_DEPENDENCY.jpg", "height": 400}]}, "Beri": {"images_count": 15 , "links": [{"width": 600, "name": "beri1.jpg", "height": 400}, {"width": 300, "name": "beri10.jpg", "height": 400}, {"width": 266, "name": "beri11.jpg", "height": 400}, {"width": 266, "name": "beri12.jpg", "height": 400}, {"width": 225, "name": "beri13.jpg", "height": 400}, {"width": 533, "name": "beri14.jpg", "height": 400}, {"width": 600, "name": "beri15.jpg", "height": 400}, {"width": 600, "name": "beri2.jpg", "height": 400}, {"width": 634, "name": "beri3.jpg", "height": 400}, {"width": 600, "name": "beri4.jpg", "height": 400}, {"width": 533, "name": "beri5.jpg", "height": 400}, {"width": 670, "name": "beri6.jpg", "height": 400}, {"width": 776, "name": "beri7.jpg", "height": 400}, {"width": 725, "name": "beri8.jpg", "height": 400}, {"width": 533, "name": "beri9.jpg", "height": 400}]}, "Jaisalmer": {"images_count": 15, "links": [{"width": 266, "name": "life_00.jpg", "height": 400}, {"width": 266, "name": "life_01.jpg", "height": 400}, {"width": 600, "name": "life_02.jpg", "height": 400}, {"width": 629, "name": "life_03.jpg", "height": 400}, {"width": 600, "name": "life_05.jpg", "height": 400}, {"width": 600, "name": "life_06.jpg", "height": 400}, {"width": 600, "name": "life_07.jpg", "height": 400}, {"width": 600, "name": "life_08.jpg", "height": 400}, {"width": 679, "name": "life_09.jpg", "height": 400}, {"width": 600, "name": "life_10.jpg", "height": 400}, {"width": 266, "name": "life_11.jpg", "height": 400}, {"width": 266, "name": "life_12.jpg", "height": 400}, {"width": 266, "name": "life_13.jpg", "height": 400}, {"width": 266, "name": "life_14.jpg", "height": 400}, {"width": 266, "name": "life_15.jpg", "height": 400}, {"width": 266, "name": "life_16.jpg", "height": 400}]}}}

	$scope.name = 'sakshi chowdhry';
	$scope.current_theme = 'main';
	$scope.current_project = 'main';

	$scope.goto = function(theme, project){
		if ( $scope.current_theme == theme && $scope.current_project == project) return;

		if ( theme == 'main' && project == 'main') return;
		$location.url('/' + theme + '/' + project);
		$scope.current_theme = theme;
		$scope.current_project = project;
	}


}]).controller('PersonalCtrl', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.theme = 'personal';
	$scope.project = $routeParams.project;
	$scope.photolinks = [];
	console.warn($scope.theme, $scope.project)
	for(var i=1;i<=$scope.projectmap[$scope.theme][$scope.project].images_count;i++)
		$scope.photolinks.push({'baselink': '/static/photographs/' + $scope.theme + '/' + $scope.project + '/', 'data': $scope.projectmap[$scope.theme][$scope.project].links[i]})

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
})


// "A TUB FULL OF IDEAS.jpg", "IMG_1990.jpg", "AN ARTIST'S MOTION.jpg ", "SOAKING ANSWERS.jpg", "ART.jpg", "THE HOLLOW SENSE.jpg", "BEYOND COMMAND.jpg", "THE SACRIFICE.jpg", "CURED WITH MY THOUGHTS.jpg", "THE YELLOW SIDE TO IT.jpg", "FADING ORDER.jpg", "WALLS HAVE A MOUTH.jpg", "HOPE.jpg", "WHEELS OF DEPENDENCY.jpg", "ILLUSIONS OF ORDER.jpg", "mamma o' mamma.jpg", "IMG_1925.jpg", "two drops of heaven.jpg"





