var Shadowrun = Shadowrun || {}

Shadowrun = angular.module('shadowrun_app', ['shadowrun_app.controllers', 'ngResource', 'ngSanitize']);

Shadowrun.Controllers = angular.module('shadowrun_app.controllers', []);
//Shadowrun.Directives = angular.module('shadowrun_app.directives', []);
//Shadowrun.Services = angular.module('shadowrun_app.services', []);

Shadowrun.Controllers.controller('ShadowrunCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

//var myApp = angular.module('myApp',["ngResource", "ngSanitize"]);

//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});

//function MyCtrl($scope, $timeout) {
  // Original Data
  $scope.metatypes = [
    { value: 'A', selectable: true, chosen: false, type: 'metatypes', label: 'Human (9)<br>Elf (8)<br>Dwarf (7)<br>Ork (7)<br>Troll (5)' },
    { value: 'B', selectable: true, chosen: false, type: 'metatypes', label: 'Human (7)<br>Elf (6)<br>Dwarf (4)<br>Ork (4)<br>Troll (0)' },
    { value: 'C', selectable: true, chosen: false, type: 'metatypes', label: 'Human (5)<br>Elf (3)<br>Dwarf (1)<br>Ork (0)' },
    { value: 'D', selectable: true, chosen: false, type: 'metatypes', label: 'Human (3)<br>Elf (0)' },
    { value: 'E', selectable: true, chosen: false, type: 'metatypes', label: 'Human (1)'}
   ]

  $scope.stats = [
    { value: 'A', label: 24, selectable: true, chosen: false, type: 'stats' },
    { value: 'B', label: 20, selectable: true, chosen: false, type: 'stats' },
    { value: 'C', label: 16, selectable: true, chosen: false, type: 'stats' },
    { value: 'D', label: 14, selectable: true, chosen: false, type: 'stats' },
    { value: 'E', label: 12, selectable: true, chosen: false, type: 'stats' }
  ]

  $scope.magic = [
    { value: 'A', label: '<span class="yellow">Magician or Mystic Adept:</span> Magic 6, two Rating 5 Magic skills, 10 spells <br><span class="yellow">Technomancer:</span> Resonance 6, two Rating 5 Resonance Skills, 5 complex forms', selectable: true, chosen: false, type: 'magic' },
    { value: 'B', label: '<span class="yellow">Magician or Mystic Adept:</span> Magic 4, two Rating 4 Magic skills, 7 spells<br><span class="yellow">Technomancer:</span> Resonance 4, two Rating 4 Resonance Skills, 2 complex forms<br><span class="yellow">Adept:</span> Magic 6, one Rating 4 Active Skill<br><span class="yellow">Aspected Magician:</span> Magic 5, one Rating 4 Magical Skill group</span>', selectable: true, chosen: false, type: 'magic' },
    { value: 'C', label: '<span class="yellow">Magician or Mystic Adept:</span> Magic 3, 5 spells<br><span class="yellow">Technomancer:</span> Resonance 3, 1 complex forms<br><span class="yellow">Adept: </span>Magic 4, one Rating 2 Active Skill<br><span class="yellow">Aspected Magician:</span> Magic 3, one Rating 2 Magical Skill group', selectable: true, chosen: false, type: 'magic' },
    { value: 'D', label: '<span class="yellow">Adept:</span> Magic 2<br><span class="yellow">Aspected Magician:</span> Magic 2', selectable: true, chosen: false, type: 'magic' },
    { value: 'E', label: '<span class="yellow">Mundane:</span> Jack and Squat at the Rating of zilch', selectable: true, chosen: false, type: 'magic' },
  ]

  $scope.skills = [
    { value: 'A', label: '46 / 10', selectable: true, chosen: false, type: 'skills', skills: 46, groups: 10 },
    { value: 'B', label: '36 / 5',  selectable: true, chosen: false, type: 'skills', skills: 36, groups:  5 },
    { value: 'C', label: '28 / 2',  selectable: true, chosen: false, type: 'skills', skills: 28, groups:  2 },
    { value: 'D', label: '22 / 0',  selectable: true, chosen: false, type: 'skills', skills: 22, groups:  0 },
    { value: 'E', label: '10 / 0',  selectable: true, chosen: false, type: 'skills', skills: 18, groups:  0 }
  ]

  $scope.resources = [
    { value: 'A', label: '450,000', selectable: true, chosen: false, type: 'resources' },
    { value: 'B', label: '275,000', selectable: true, chosen: false, type: 'resources' },
    { value: 'C', label: '140,000', selectable: true, chosen: false, type: 'resources' },
    { value: 'D', label: '50,000', selectable: true, chosen: false, type: 'resources' },
    { value: 'E', label: '6,000', selectable: true, chosen: false, type: 'resources' }
  ]

  $scope.races = [
    { race: "Human", 
      racials: "None",
      attributes: [
        { label: "Bod", min: 1, max: 6, current: 1 },
        { label: "Agi", min: 1, max: 6, current: 1 },
        { label: "Rea", min: 1, max: 6, current: 1 },
        { label: "Str", min: 1, max: 6, current: 1 },
        { label: "Wil", min: 1, max: 6, current: 1 },
        { label: "Log", min: 1, max: 6, current: 1 },
        { label: "Int", min: 1, max: 6, current: 1 },
        { label: "Cha", min: 1, max: 6, current: 1 }
        ],
      edge: [
        { label: "Edge",  min: 2, max: 7, current: 2}
      ],
      priorities: {
        "A": { label: "A", value: 9},
        "B": { label: "B", value: 7},
        "C": { label: "C", value: 5},
        "D": { label: "D", value: 3},
        "E": { label: "E", value: 1},
      }
    },
    { race: "Elf", 
      racials: "Low-Light Vision",
      attributes: [
        { label: "Bod", min: 1, max: 6, current: 1 },
        { label: "Agi", min: 2, max: 7, current: 2 },
        { label: "Rea", min: 1, max: 6, current: 1 },
        { label: "Str", min: 1, max: 6, current: 1 },
        { label: "Wil", min: 1, max: 6, current: 1 },
        { label: "Log", min: 1, max: 6, current: 1 },
        { label: "Int", min: 1, max: 6, current: 1 },
        { label: "Cha", min: 3, max: 8, current: 3 }
        ],
      edge: [
        { label: "Edge",  min: 1, max: 6, current: 1}
      ],
      priorities: {
        "A": { label: "A", value: 8},
        "B": { label: "B", value: 6},
        "C": { label: "C", value: 3},
        "D": { label: "D", value: 0},
        "E": { label: "E", value: "-"},
      }
    },
    { race: "Dwarf", 
      racials: "Thermographic Vision, +2 Pathogen/Toxic Resist, 20% Lifestyle increase",
      attributes: [
        { label: "Bod", min: 3, max: 8, current: 3 },
        { label: "Agi", min: 1, max: 6, current: 1 },
        { label: "Rea", min: 1, max: 5, current: 1 },
        { label: "Str", min: 3, max: 8, current: 3 },
        { label: "Wil", min: 2, max: 7, current: 2 },
        { label: "Log", min: 1, max: 6, current: 1 },
        { label: "Int", min: 1, max: 6, current: 1 },
        { label: "Cha", min: 1, max: 6, current: 1 }
        ],
      edge: [
        { label: "Edge",  min: 1, max: 6, current: 1}
      ],
      priorities: {
        "A": { label: "A", value: 7},
        "B": { label: "B", value: 4},
        "C": { label: "C", value: 1},
        "D": { label: "D", value: "-"},
        "E": { label: "E", value: "-"},
      }
    },
    { race: "Ork", 
      racials: "Low-Light Vision",
      attributes: [
        { label: "Bod", min: 4, max: 9, current: 4 },
        { label: "Agi", min: 1, max: 6, current: 1 },
        { label: "Rea", min: 1, max: 6, current: 1 },
        { label: "Str", min: 3, max: 8, current: 3 },
        { label: "Wil", min: 1, max: 6, current: 1 },
        { label: "Log", min: 1, max: 5, current: 1 },
        { label: "Int", min: 1, max: 6, current: 1 },
        { label: "Cha", min: 1, max: 5, current: 1 }
        ],
      edge: [
        { label: "Edge",  min: 1, max: 6, current: 1}
      ],
      priorities: {
        "A": { label: "A", value: 7},
        "B": { label: "B", value: 4},
        "C": { label: "C", value: 1},
        "D": { label: "D", value: "-"},
        "E": { label: "E", value: "-"},
      }
    },
    { race: "Troll", 
      racials: "Thermographic Vision, +1 Reach, +1 Dermal Armor, 100% Lifestyle increase",
      attributes: [
        { label: "Bod", min: 5, max: 10, current: 5 },
        { label: "Agi", min: 1, max:  5, current: 1 },
        { label: "Rea", min: 1, max:  6, current: 1 },
        { label: "Str", min: 5, max: 10, current: 5 },
        { label: "Wil", min: 1, max:  6, current: 1 },
        { label: "Log", min: 1, max:  5, current: 1 },
        { label: "Int", min: 1, max:  5, current: 1 },
        { label: "Cha", min: 1, max:  4, current: 1 }
        ],
      edge: [
        { label: "Edge",  min: 1, max: 6, current: 1}
      ],
      priorities: {
        "A": { label: "A", value: 5},
        "B": { label: "B", value: 0},
        "C": { label: "C", value: "-"},
        "D": { label: "D", value: "-"},
        "E": { label: "E", value: "-"},
      }
    }
  ]

  // My selections
  $scope.chosen_priorities = { "A": '', "B": '' , "C": '', "D": '', "E": '' }

  $scope.chosen_attributes = {
    // Stats
    "magic": '',
    "metatypes": '',
    "resources": '',
    "skills": '',
    "stats": '',
    // Metatype
    "race": '',
    "race_points": 0,
    "racials": '',
    // Attributes
    "stat_points": 0,
    "remaining_stat_points": 0,
    "my_stats": {
      "bod": 1, "agi": 1, "rea": 1, "str": 1, "wil": 1, "log": 1, "int": 1, "cha": 1
    },
    // Specials
    "my_specials": {
      "edge": 1, "magic": 0, "resonance": 0,
      "max_edge": 0, "max_magix": 6, "max_resonance": 6
    },
    "essence": 6
  }

  $scope.all_priorities = [
    $scope.metatypes,
    $scope.stats,
    $scope.magic,
    $scope.skills,
    $scope.resources
  ]

  // Priority Table
  $scope.check_disabled = function(option) {
    var priority = option.value;
    var type = option.type;

    if ($scope.chosen_priorities[priority] !== "") {
      if ($scope.chosen_priorities[priority] === type) {
        option.chosen = true;
        option.selectable = false;
      } else {
        option.selectable = false;
      }
    }
  }

  $scope.reset_attributes = function(new_type) {
    switch(new_type) {
      case "metatypes":
        $scope.chosen_attributes['race'] = "";
      break;
      case "stats":
        $scope.chosen_attributes['stat_points'] = 0;
        $scope.chosen_attributes['remaining_stat_points'] = 0;
        reset_stats();
      break;
      case "race":
        $scope.chosen_attributes['remaining_stat_points'] = $scope.chosen_attributes['stat_points'];
        reset_stats();
      break;
    }

    function reset_stats() {
      $.each($scope.races, function(key, value) {
        value.attributes[0].current = value.attributes[0].min;
        value.attributes[1].current = value.attributes[1].min;
        value.attributes[2].current = value.attributes[2].min;
        value.attributes[3].current = value.attributes[3].min;
        value.attributes[4].current = value.attributes[4].min;
        value.attributes[5].current = value.attributes[5].min;
        value.attributes[6].current = value.attributes[6].min;
        value.attributes[7].current = value.attributes[7].min;
      });

      $scope.chosen_attributes['my_stats'] = { "bod": 1, "agi": 1, "rea": 1, "str": 1, "wil": 1, "log": 1, "int": 1, "cha": 1 }
    }
  }

  $scope.update = function(option) {
    var new_type;
    var type = "";
    if ($.type(option) === "string") {
      type = "string";
    }

    if (type === "string") {
      new_type = option;
    } else {
      new_type = option.type;
    }

    // Remove ones from this Priority Type.
    $.each($scope.chosen_priorities, function(key, value) {
      if (value === new_type) {
        var priority = key;
        $scope.chosen_priorities[priority] = "";
        $scope.chosen_attributes[new_type] = "";

        $scope.reset_attributes(new_type);

        // Reset selectable state.
        $.each($scope[new_type], function(key, value) {
          if (value.value === priority) {
            value.selectable = true;
            value.chosen = false;
          }
        });
      }
    });

    if (type !== "string") {
      var priorities = option.value;
      $scope.chosen_priorities[priorities] = new_type;
      $scope.chosen_attributes[new_type] = priorities;

      if (new_type === 'stats') {
        $.each($scope.stats, function(key, value) {
          if (value.value === priorities) {
            $scope.chosen_attributes['stat_points'] = value.label;
            $scope.chosen_attributes['remaining_stat_points'] = value.label;
          }
        });
      }
    }

    // Remove ones based on Priority Ranking.
    $.each($scope.chosen_priorities, function(key, value) {
      if (value == "") {
        var priority = key;
        $.each($scope.all_priorities, function(key, value) {
          var individual_priorities = value;

          $.each(individual_priorities, function(key, value) {
              if (value.value === priority) {
                value.selectable = true;
                value.chosen = false;
              }
          });
        });
      }
    });

    // Currently used to force a $scope.$apply() which is kinda not great.
    $timeout(function() {
     // console.log($scope.chosen_priorities)
     // console.log($scope.chosen_attributes)
    }, 10);
  }

  // Metatype & Race
  $scope.choose_race = function(option) {
    $scope.chosen_attributes['race'] = option.race;
    $scope.chosen_attributes['race_points'] = option.priorities[$scope.chosen_attributes['metatypes']].value;
    $scope.chosen_attributes['racials'] = option.racials;
    $scope.chosen_attributes['my_specials'].edge = option.edge[0].min;
    $scope.chosen_attributes['my_specials'].max_edge = option.edge[0].max;

    $scope.reset_attributes('race');

    $.each($scope.races, function(key, value) {
      if (value.race === option) {
        $scope.chosen_attributes['my_stats'] = {
          "bod": value.attributes[0].min,
          "agi": value.attributes[1].min,
          "rea": value.attributes[2].min,
          "str": value.attributes[3].min,
          "wil": value.attributes[4].min,
          "log": value.attributes[5].min,
          "int": value.attributes[6].min,
          "cha": value.attributes[7].min
        }
      }
    });

    console.log($scope.chosen_attributes)
  }

  // Limits
  $scope.get_limits = function(type) {
    var limit;
    var strength  = $scope.chosen_attributes['my_stats']['str'];
    var charisma  = $scope.chosen_attributes['my_stats']['cha'];
    var reaction  = $scope.chosen_attributes['my_stats']['rea'];
    var intuition = $scope.chosen_attributes['my_stats']['int'];
    var logic     = $scope.chosen_attributes['my_stats']['log'];
    var willpower = $scope.chosen_attributes['my_stats']['wil'];
    var body      = $scope.chosen_attributes['my_stats']['bod'];
    var essence   = $scope.chosen_attributes['essence'];

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
    var reaction = $scope.chosen_attributes['my_stats']['rea'];
    var intuition = $scope.chosen_attributes['my_stats']['int'];
    var data_processing = "";
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
      case "rigging":
        dice = "1d6";
        initiative = reaction + intuition;
      break;
      case "matrix":
        dice = "1d6";
        initiative = reaction + intuition;
      break;
      case "vrhot":
        dice = "3d6";
        //initiative = "";
      break;
      case "vrcold":
        dice = "4d6";
       // initiative = "";
      break;
    }

    return initiative + " + " + dice;
  }

  // Stats
  $scope.increase_attribute = function(attribute) {
    console.log(attribute)
    var name = attribute.label.toLowerCase();
    var maximum = parseInt(attribute.max);
    var current = parseInt(attribute.current);
    var maxed = $scope.is_maxed();
    $scope.chosen_attributes['remaining_stat_points']

    if (($scope.chosen_attributes['remaining_stat_points'] > 0) && (current < maximum)) {
      if (!maxed) {
        increase_stat();
      } else {
        if (current + 1 < maximum) {
          increase_stat();
        }
      }
    }

    function increase_stat() {
      $scope.chosen_attributes['my_stats'][name]++;
      attribute.current++;
      $scope.chosen_attributes['remaining_stat_points']--;
    }
  }

  $scope.decrease_attribute = function(attribute) {
    var name = attribute.label.toLowerCase();
    var minimum = attribute.min;
    var current = attribute.current;

    if (current > minimum) {
      $scope.chosen_attributes['my_stats'][name]--;
      attribute.current--;
      $scope.chosen_attributes['remaining_stat_points']++;
    }
  }

  $scope.is_maxed = function() {
    var stats_maxed = 0;
    var race = $scope.chosen_attributes['race'];
    var max;

    $.each($scope.races, function(key, value) {
      if (race === value.race) {
        max = {
          "bod": value.attributes[0].max,
          "agi": value.attributes[1].max,
          "rea": value.attributes[2].max,
          "str": value.attributes[3].max,
          "wil": value.attributes[4].max,
          "log": value.attributes[5].max,
          "int": value.attributes[6].max,
          "cha": value.attributes[7].max
        }
      }
    });

    $.each($scope.chosen_attributes['my_stats'], function(key, value) {
      if (value === max[key]) {
        stats_maxed++;
      }
    });

    if (stats_maxed > 0) {
      return true;
    } else {
      return false;
    }
  }

  $scope.description = "'Ready Up, Chummer' is a Character Creation tool for Shadowrun 5th Edition";
//}

}]);
