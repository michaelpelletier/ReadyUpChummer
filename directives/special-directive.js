Shadowrun.Directives.directive('ngSpecial', function() {
	return {
    link: function(scope, elm, attr){

    	// Update if the Relevant Priority is changed
    	scope.$on('priority_change', function(event, row, column) {
     		if (column === "metatypes" || row === "metatypes" || row === "magic" || column === "magic") {
          scope.update_race_points();
    		}
    	}); 
    } 
  } 
});