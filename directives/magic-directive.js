Shadowrun.Directives.directive('ngMagic', function() {
	return {
    link: function(scope, elm, attr){

    	// Start them disabled
  		if (scope.priorities["magic"] === '') {
  			$(elm).addClass('disabled');
  		} 

      // Clear styling on a new selection
      scope.$on('clear_magic_styling', function() {
        $(elm).removeClass('selected').removeClass('error');
      });

  		// Change race on click
    	$(elm).click(function() {
    		scope.clear_magic_selection();
    		scope.select_magic(attr);
    		$(elm).addClass('selected');

    		if (scope.priorities["magic"] === '' || $(elm).hasClass('disabled')) {
    			$(elm).addClass('error');
    		}				
    	});

    	// Update if the Relevant Priority is changed
    	scope.$on('priority_change', function(event, row, column) {
     		if (column === "magic" || row === "magic") {
  	    	if (scope.priorities["magic"] === '') {
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