Shadowrun.Directives.directive('ngRace', function() {
	return {
    link: function(scope, elm, attr){

    	// Start them disabled
  		if (scope.priorities["metatypes"] === '') {
  			$(elm).addClass('disabled');
  		} 

      // Clear styling on a new selection
      scope.$on('clear_race_styling', function() {
        $(elm).removeClass('selected').removeClass('error');
      });

  		// Change race on click
    	$(elm).click(function() {
    		scope.clear_race_selection();
    		scope.select_race(attr);
    		$(elm).addClass('selected');

    		if (scope.priorities["metatypes"] === '' || $(elm).hasClass('disabled')) {
    			$(elm).addClass('error');
    		}				
    	});

    	// Update if the Relevant Priority is changed
    	scope.$on('priority_change', function(event, row, column) {
     		if (column === "metatypes" || row === "metatypes") {
  	    	if (scope.priorities["metatypes"] === '') {
      			$(elm).addClass('disabled').removeClass('error'); 
      			
            if ($(elm).hasClass('selected')) {  
              $(elm).addClass('error');
      			}
      		} else {
  	    		var priorities = $.parseJSON(attr.ngPriorities)
  	    		if (priorities[row] === '-') {
  	    			$(elm).addClass('disabled').removeClass('error');;

  						if ($(elm).hasClass('selected')) {
  	    				$(elm).addClass('error');
  	    			}
  	    		} else {
  	    			$(elm).removeClass('disabled').removeClass('error');
  	    		}
       		}
    		}
    	}); 
    } 
  } 
});