Shadowrun.Directives.directive('ngStat', function() {
	return {
    link: function(scope, elm, attr){
    	// Update if the Relevant Priority is changed
    	scope.$on('priority_change', function(event, row, column) {
     		if (column === "stats" || row === "stats") {
          var new_stat;

  	    	if (scope.priorities["attributes"] === '') {
            new_stat = 0;
      		} else {
            $.each(scope.data_priorities, function(index, value) {
              if (value.label === scope.priorities["stats"]) {
                new_stat = value.stats
              }
            });
       		}
          scope.stat_points.current = new_stat;
          scope.stat_points.maximum = new_stat;
    		}
    	}); 
    } 
  } 
});