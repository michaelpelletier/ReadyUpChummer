Shadowrun.Controllers.controller('ShadowrunCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

	// Data Retrieval
	$scope.data_priorities = data_priorities;
	$scope.races = data_races;
	$scope.magic = data_magic;
  $scope.skills_col_1 = skills_col_1;
  $scope.skills_col_2 = skills_col_2;

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

  $scope.my_skills = {}

  $scope.essence = 6;

  $scope.my_attributes = {
    "Bod": { abbr: "Bod", label: "Body", current: 1, minimum: 1, maximum: 6, type: 'stat' },
    "Agi": { abbr: "Agi", label: "Agility", current: 1, minimum: 1, maximum: 6, type: 'stat' },
    "Rea": { abbr: "Rea", label: "Reaction", current: 1, minimum: 1, maximum: 6, type: 'stat' },
    "Str": { abbr: "Str", label: "Strength", current: 1, minimum: 1, maximum: 6, type: 'stat' },
    "Wil": { abbr: "Wil", label: "Will", current: 1, minimum: 1, maximum: 6, type: 'stat' },
    "Log": { abbr: "Log", label: "Logic", current: 1, minimum: 1, maximum: 6, type: 'stat' },
    "Int": { abbr: "Int", label: "Intuition", current: 1, minimum: 1, maximum: 6, type: 'stat'},
    "Cha": { abbr: "Cha", label: "Charisma", current: 1, minimum: 1, maximum: 6, type: 'stat' },
    "Edge": { abbr: "Edge", label: "Edge", current: 1, minimum: 1, maximum: 6, type: 'special'},
    "Magic": { abbr: "Magic", label: "Magic", current: 0, minimum: 0, maximum: 0, type: 'special'},
    "Reson": { abbr: "Reson", label: "Resonance", current: 0, minimum: 0, maximum: 0, type: 'special'}
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
    $scope.clear_attributes();
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

  $scope.clear_attributes = function() { 
    var stats = ["Bod", "Agi", "Rea", "Str", "Wil", "Log", "Int", "Cha"]

    $.each(stats, function(index, value) {
      $scope.my_attributes[value].current = 1;
      $scope.my_attributes[value].minimum = 1;
      $scope.my_attributes[value].maximum = 6;
    });
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

          if (attribute.type === 'special') {
            if ((value.current < value.maximum) && ($scope.race_points.current > 0)) {
              value.current += 1;
              $scope.race_points.current -= 1;
            }
          } else {
            if ((value.current < value.maximum) && ($scope.stat_points.current > 0)) {
              value.current += 1;
              $scope.stat_points.current -= 1;
            }
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

          if (attribute.type === 'special') {
            $scope.race_points.current += 1;
          } else {
            $scope.stat_points.current += 1;
          }          
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
        $scope.my_attributes['Edge'].maximum = 7;
        $scope.my_attributes['Edge'].minimum = 2;
        $scope.my_attributes['Edge'].current = 2;
      } else {
        $scope.my_attributes['Edge'].maximum = 6;
        $scope.my_attributes['Edge'].minimum = 1;
        $scope.my_attributes['Edge'].current = 1;
      }
    }

    // Magic
    clear_magic('Magic');
    clear_magic('Reson');
 
    var magic_stat;
    if ($scope.my_magic === 'Technomancer') {
      magic_stat = 'Reson';
      set_magic('Reson');
    } else {
      magic_stat = 'Magic';
      set_magic('Magic');
    }    

    function set_magic(type) {
      $.each($scope.magic, function(key, value) {
        if (value.label === $scope.my_magic) {
          var max = 6;
          var min = value.priorities[$scope.priorities['magic']] || 0;

          if (min === '-') {
            min = 0;
            max = 0;
          }

          $scope.my_attributes[type].maximum = max;
          $scope.my_attributes[type].minimum = min;
          $scope.my_attributes[type].current = min;
        }
      });
    }

    function clear_magic(type) {
      $scope.my_attributes[type].maximum = 0;
      $scope.my_attributes[type].current = 0;
      $scope.my_attributes[type].minimum = 0;
    }
  }


  $scope.clear_specials = function() {
 //   $.each($scope.my_specials, function(index, value) {
 //     value.current = value.minimum;
 //   });
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

  // Skills
  $scope.add_skill_rank = function(skill_id, ability) {
    if (!$scope.my_skills[skill_id]) {
      $scope.my_skills[skill_id] = {};
      $scope.my_skills[skill_id]['ranks'] = 0;
      $scope.my_skills[skill_id]['attribute'] = 0;
    }
    $scope.my_skills[skill_id].ranks += 1;
    $scope.my_skills[skill_id].attribute = ability;
  }

  $scope.remove_skill_rank = function(skill_id) {
    if ($scope.my_skills[skill_id]) {
      if ($scope.my_skills[skill_id].ranks > 0) {
        $scope.my_skills[skill_id].ranks -= 1;
      }
    }
  }

  $scope.get_dice_pool = function(skill_id) {
    if ($scope.my_skills[skill_id]) {
      var rank = $scope.my_skills[skill_id].ranks;
      var attribute = $scope.my_skills[skill_id].attribute;
      var stat = $scope.my_attributes[attribute].current;
      var total;

      if (rank === 0) {
        total = stat - 1;
      } else {
        total = stat + rank;
      }

      return total
    }
  }

  $scope.add_specialty = function(skill) {
    $('[data-id="' + skill + '"]').parent().after('<div class="list-item skill skill_specialty"><span class="skill_name"><input value="New Skill"></span><span class="dice_pool">(+2)</span><span class="ranks"></span><span class="attribute"></span><div class="controls"><div class="clear yellow">x</div></div></div>');


    $('.skill_specialty .clear').click(function() {
      $(this).parents('.skill_specialty').remove();
    })
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



/* We need to rewrite Resonance and Magic to treak them like Attributes. Did not realise that Magic Skills were based off of them like I should have. I think this is working but it requires double checking. */

/* Add tooltips for Skills so you know you can create Specializations" */