var Shadowrun = Shadowrun || {}

Shadowrun = angular.module('shadowrun_app', ['shadowrun_app.controllers', 'ngResource', 'ngSanitize', 'shadowrun_app.directives']);

Shadowrun.Controllers = angular.module('shadowrun_app.controllers', []);
//Shadowrun.Directives = angular.module('shadowrun_app.directives', []);
//Shadowrun.Services = angular.module('shadowrun_app.services', []);
Shadowrun.Directives = angular.module('shadowrun_app.directives', []);


// Data. Lots and lots of Data.

var data_priorities = [
	{ 
		label: "A",
		metatypes: 'Human (9)<br>Elf (8)<br>Dwarf (7)<br>Ork (7)<br>Troll (5)', 
		magic: '<span class="yellow">Magician or Mystic Adept:</span> Magic 6, two Rating 5 Magic skills, 10 spells <br><span class="yellow">Technomancer:</span> Resonance 6, two Rating 5 Resonance Skills, 5 complex forms', 
		stats: 24
	},
	{ 
		label: "B",
		metatypes: 'Human (7)<br>Elf (6)<br>Dwarf (4)<br>Ork (4)<br>Troll (0)', 
		magic: '<span class="yellow">Magician or Mystic Adept:</span> Magic 4, two Rating 4 Magic skills, 7 spells<br><span class="yellow">Technomancer:</span> Resonance 4, two Rating 4 Resonance Skills, 2 complex forms<br><span class="yellow">Adept:</span> Magic 6, one Rating 4 Active Skill<br><span class="yellow">Aspected Magician:</span> Magic 5, one Rating 4 Magical Skill group</span>',
		stats: 20
	},
	{ 
		label: "C",
		metatypes: 'Human (5)<br>Elf (3)<br>Dwarf (1)<br>Ork (0)',
		magic: '<span class="yellow">Magician or Mystic Adept:</span> Magic 3, 5 spells<br><span class="yellow">Technomancer:</span> Resonance 3, 1 complex forms<br><span class="yellow">Adept: </span>Magic 4, one Rating 2 Active Skill<br><span class="yellow">Aspected Magician:</span> Magic 3, one Rating 2 Magical Skill group',
		stats: 16
	},
	{ 
		label: "D",
		metatypes: 'Human (3)<br>Elf (0)', 
		magic: '<span class="yellow">Adept:</span> Magic 2<br><span class="yellow">Aspected Magician:</span> Magic 2',
		stats: 14
	},
	{ 
		label: "E",
		metatypes: 'Human (1)', 
		magic: '<span class="yellow">Mundane:</span> Jack and Squat at the Rating of zilch',
		stats: 12
	}
]

var data_races = [
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
    priorities: { "A": 9, "B": 7, "C": 5, "D": 3, "E": 1 }
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
    priorities: { "A": 8, "B": 6, "C": 3, "D": 0, "E": "-" }
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
    priorities: { "A": 7, "B": 4, "C": 1, "D": "-", "E": "-" }
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
    priorities: { "A": 7, "B": 4, "C": 1, "D": "-", "E": "-" }
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
    priorities: { "A": 5, "B": 0, "C": "-", "D": "-", "E": "-" }
  }
	]

var data_magic = [
	{ label: "Magician", 		 			priorities: {"A": 6, "B": 4, "C": 3, "D": '-', "E": '-'} },
	{ label: "Mystic Adept", 			priorities: {"A": 6, "B": 4, "C": 3, "D": '-', "E": '-'} },
	{ label: "Technomancer", 			priorities: {"A": 6, "B": 4, "C": 3, "D": '-', "E": '-'} },
	{ label: "Aspected Magician", priorities: {"A": '-', "B": 5, "C": 4, "D": 2, "E": '-'} },
	{ label: "Adept", 						priorities: {"A": '-', "B": 6, "C": 4, "D": 2, "E": '-'} }
]
