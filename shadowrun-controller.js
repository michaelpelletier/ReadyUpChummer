Shadowrun.Controllers.controller('ShadowrunCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

	// Data Retrieval
	$scope.data_priorities = data_priorities;

	$scope.races = data_races;
	$scope.magic = data_magic;

	// A Few things for Priorities
  $scope.priorities = { 
  	"A": '', 
  	"B": '',
  	"C": '', 
  	"D": '', 
  	"E": '',
  	"metatypes": '',
  	"stats": '', 
  	"magic": '',
  	"skills": '',
  	"resources": ''
  }

  $scope.priority_letters = ['A', 'B', 'C', 'D', 'E'];
  $scope.priority_attribs = ["metatypes",
  	"stats", 
  	"magic",
  	"skills",
  	"resources"];

  // My Data
  $scope.my_racials = '';
  $scope.my_race = '';
  $scope.race_points = {current: 0, maximum: 0}
  
  $scope.stat_points = {current: 0, maximum: 0}
  $scope.my_magic = '';

  $scope.my_specials = {
    "edge":   { label: 'Edge',  current: 1, minimum: 1, maximum: 6 },
    "magic":  { label: 'Magic', current: 0, minimum: 0, maximum: 0 },
    "reson":  { label: 'Resonance', current: 0, minimum: 0, maximum: 0 }
  }

  $scope.essence = 6;

  $scope.my_attributes = {
    "Bod": { abbr: "Bod", label: "Body", current: 1, minimum: 1, maximum: 6 },
    "Agi": { abbr: "Agi", label: "Agility", current: 1, minimum: 1, maximum: 6 },
    "Rea": { abbr: "Rea", label: "Reaction", current: 1, minimum: 1, maximum: 6 },
    "Str": { abbr: "Str", label: "Strength", current: 1, minimum: 1, maximum: 6 },
    "Wil": { abbr: "Wil", label: "Will", current: 1, minimum: 1, maximum: 6 },
    "Log": { abbr: "Log", label: "Logic", current: 1, minimum: 1, maximum: 6 },
    "Int": { abbr: "Int", label: "Intuition", current: 1, minimum: 1, maximum: 6 },
    "Cha": { abbr: "Cha", label: "Charisma", current: 1, minimum: 1, maximum: 6 }
  }


  



  // Priority Stuff
  $scope.choose_priority = function(row, column) {
  	// First check if new row is empty
  	if ($scope.priorities[row] === '') {
  		// Then clear from existing rows.
	  	$.each($scope.priority_letters, function(index, value) {
	  		if ($scope.priorities[value] === column) {
	  			$scope.priorities[value] = '';
	  		}
	  	});

	  	// Then set new values
	  	$scope.priorities[row] = column;
	  	$scope.priorities[column] = row;
	  	$scope.$broadcast('priority_change', row, column);
  	}
  }

  $scope.clear_priority = function(to_clear) {
		var passed_value = '';

  	$.each($scope.priorities, function(index, value) { 		
  		if (value === to_clear) {
  			passed_value = $scope.priorities[value];

  			$scope.priorities[passed_value] = '';
  			$scope.priorities[to_clear] = '';
  		}
  	});

		$scope.$broadcast('priority_change', to_clear, passed_value);
  }

  // Race Stuff
  $scope.clear_race_selection = function() {
  	$scope.my_race = '';
  	$scope.my_racials = '';
    $scope.update_race_points();
    $scope.reset_attributes();
  	$scope.$broadcast('clear_race_styling');
  }

  $scope.select_race = function(race) {
  	$scope.my_race = race.ngRace;
  	$scope.my_racials = race.ngRacials;
    $scope.update_race_points();
    $scope.reset_attributes();
    $scope.update_attributes(race.ngAttributes);
  	$scope.$apply();
  }

  // Magic Stuff 
  $scope.clear_magic_selection = function() {
  	$scope.my_magic = '';
    $scope.update_race_points();
  	$scope.$broadcast('clear_magic_styling');
  }

  $scope.select_magic = function(magic) {
  	$scope.my_magic = magic.ngMagic;
    $scope.update_race_points();
  	$scope.$apply();
  }

  // Attributes
  $scope.reset_attributes = function() {
    $scope.stat_points.current = $scope.stat_points.maximum;
  }

  $scope.update_attributes = function(attributes) {
    var new_attributes = $.parseJSON(attributes);

    $.each(new_attributes, function(index, value) {
      var stat = value.label;
      var stat_min = value.min;
      var stat_max = value.max;

      $.each($scope.my_attributes, function(index, value) {
        if (stat === value.abbr) {
          $scope.my_attributes[stat].current = stat_min;
          $scope.my_attributes[stat].minimum = stat_min;
          $scope.my_attributes[stat].maximum = stat_max;
        }
      });
    });
  }

  $scope.increase_attribute = function(attribute) {
    if ($scope.my_race !== '') {
      $.each($scope.my_attributes, function(index, value) {
        if (value.label === attribute.label) {
          
          if ((value.current < value.maximum) && ($scope.stat_points.current > 0)) {
            value.current += 1;
            $scope.stat_points.current -= 1;
          }
        }
      });
    }
  }

  $scope.decrease_attribute = function(attribute) {
    $.each($scope.my_attributes, function(index, value) {
      if (value.label === attribute.label) {
        
        if (value.current > value.minimum) {
          value.current -= 1;
          $scope.stat_points.current += 1;
        }
      }
    });
  }


  // Specials
  $scope.update_race_points = function() {
    // Races
    if ($scope.my_race === '') {
      $scope.race_points.maximum = 0;
      $scope.race_points.current = 0;
    } else if ($scope.priorities['metatypes'] === '') {
      $scope.race_points.maximum = 0;
      $scope.race_points.current = 0;
    } else {
      $.each($scope.races, function(index, value) {
        if (value.race === $scope.my_race) {
          var my_priority = $scope.priorities['metatypes'];          
          var points = value.priorities[my_priority];

          if (points === '-') {
            points = 0;
          }

          $scope.race_points.maximum = points;
          $scope.race_points.current = points;
        }
      });

      // Set Edge Min and Max by Race
      if ($scope.my_race === "Human") {
        $scope.my_specials['edge'].maximum = 7;
        $scope.my_specials['edge'].minimum = 2;
        $scope.my_specials['edge'].current = 2;
      } else {
        $scope.my_specials['edge'].maximum = 6;
        $scope.my_specials['edge'].minimum = 1;
        $scope.my_specials['edge'].current = 1;
      }
    }

    // Magic
    if ($scope.my_magic === '' || $scope.priorities['magic'] === '') {
      clear_magic('magic');
      clear_magic('reson');
    }

    if (($scope.my_magic !== '') && ($scope.priorities['magic'] !== '')) {
      var magic_stat; 

      $scope.clear_specials();

      if ($scope.my_magic === 'Technomancer') {
        magic_stat = 'Reson';
        clear_magic('magic');
        set_magic('reson');
      } else {
        magic_stat = 'Magic';
        clear_magic('reson');
        set_magic('magic');
      }

      function set_magic(type) {
        $.each($scope.magic, function(key, value) {
          if (value.label === $scope.my_magic) {
            var max = 6;
            var min = value.priorities[$scope.priorities['magic']];

            if (min === '-') {
              min = 0;
              max = 0;
            }

            $scope.my_specials[type].maximum = max;
            $scope.my_specials[type].minimum = min;
            $scope.my_specials[type].current = min;
          }
        });
      }
    }


    function clear_magic(type) {
      $scope.my_specials[type].maximum = 0;
      $scope.my_specials[type].current = 0;
      $scope.my_specials[type].minimum = 0;
    }
  }


  $scope.clear_specials = function() {
    $.each($scope.my_specials, function(index, value) {
      value.current = value.minimum;
    });
  }


  $scope.increase_specials = function(special) {
    $.each($scope.my_specials, function(index, value) {
      if (value.label === special.label) {
        
        if ((value.current < value.maximum) && ($scope.race_points.current > 0)) {
          value.current += 1;
          $scope.race_points.current -= 1;
        }
      }
    });
  }

  $scope.decrease_specials = function(special) {
    $.each($scope.my_specials, function(index, value) {
      if (value.label === special.label) {
        
        if (value.current > value.minimum) {
          value.current -= 1;
          $scope.race_points.current += 1;
        }
      }
    });
  }


  // Limits
  $scope.get_limits = function(type) {
    var limit;
    var strength  = $scope.my_attributes['Str'].current;
    var charisma  = $scope.my_attributes['Cha'].current;
    var reaction  = $scope.my_attributes['Rea'].current;
    var intuition = $scope.my_attributes['Int'].current;
    var logic     = $scope.my_attributes['Log'].current;
    var willpower = $scope.my_attributes['Wil'].current;
    var body      = $scope.my_attributes['Bod'].current;
    var essence   = $scope.essence;

    switch(type) {
      case "physical":
        limit = ((strength * 2) + body + reaction);
      break;
      case "mental":
        limit = ((logic * 2) + intuition + willpower);
      break;
      case "social":
        limit = ((charisma * 2) + willpower + essence);
      break;
    }

    // Round up.
    limit = Math.ceil(limit / 3);
    return limit;
  }

  // Initiatives
  $scope.get_initiative = function(type) {
    var reaction = $scope.my_attributes['Rea'].current;
    var intuition = $scope.my_attributes['Int'].current;
    var data_processing = 0;
    var initiative = 0;
    var dice = "";

    switch(type) {
      case "physical":
        dice = "1d6";
        initiative = reaction + intuition;
      break;
      case "astral":
        dice = "2d6";
        initiative = intuition + intuition;
      break;
      case "vrhot":
        dice = "3d6";
        initiative = data_processing + intuition;
      break;
      case "vrcold":
        dice = "4d6";
        initiative = data_processing + intuition;
      break;
    }

    return initiative + " + " + dice;
  }



}]);