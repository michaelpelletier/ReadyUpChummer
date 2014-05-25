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
		stats: 24,
    skills: "46 / 10",
    resources: '450,000'
	},
	{ 
		label: "B",
		metatypes: 'Human (7)<br>Elf (6)<br>Dwarf (4)<br>Ork (4)<br>Troll (0)', 
		magic: '<span class="yellow">Magician or Mystic Adept:</span> Magic 4, two Rating 4 Magic skills, 7 spells<br><span class="yellow">Technomancer:</span> Resonance 4, two Rating 4 Resonance Skills, 2 complex forms<br><span class="yellow">Adept:</span> Magic 6, one Rating 4 Active Skill<br><span class="yellow">Aspected Magician:</span> Magic 5, one Rating 4 Magical Skill group</span>',
		stats: 20,
    skills: "36 / 5",
    resources: '275,000'
	},
	{ 
		label: "C",
		metatypes: 'Human (5)<br>Elf (3)<br>Dwarf (1)<br>Ork (0)',
		magic: '<span class="yellow">Magician or Mystic Adept:</span> Magic 3, 5 spells<br><span class="yellow">Technomancer:</span> Resonance 3, 1 complex forms<br><span class="yellow">Adept: </span>Magic 4, one Rating 2 Active Skill<br><span class="yellow">Aspected Magician:</span> Magic 3, one Rating 2 Magical Skill group',
		stats: 16,
    skills: "28 / 2",
    resources: '140,000'
	},
	{ 
		label: "D",
		metatypes: 'Human (3)<br>Elf (0)', 
		magic: '<span class="yellow">Adept:</span> Magic 2<br><span class="yellow">Aspected Magician:</span> Magic 2',
		stats: 14,
    skills: "22 / 0",
    resources: '50,000'
	},
	{ 
		label: "E",
		metatypes: 'Human (1)', 
		magic: '<span class="yellow">Mundane:</span> Jack and Squat at the Rating of zilch',
		stats: 12,
    skills: "10 / 0",
    resources: '6,000'
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






var skills_col_1 = [
    { category: 'Combat', groups: [
        { name: 'Misc', skills: [
              {name: 'Archery', id: 0, attribute: 'Agi'},
              {name: 'Exotic Melee Weapon', id: 1, attribute: 'Agi'}, 
              {name: 'Exotic Ranged Weapon', id: 2, attribute: 'Agi'}, 
              {name: 'Heavy Weapons', id: 3, attribute: 'Agi'}, 
              {name: 'Throwing Weapons', id: 4, attribute: 'Agi'} ]},
        { name: 'Close Combat', skills: [
              {name: 'Blades', id: 5, attribute: 'Agi'}, 
              {name: 'Clubs', id: 6, attribute: 'Agi'}, 
              {name: 'Unarmed', id: 7, attribute: 'Agi'}
              ]},
        { name: 'Firearms', skills: [
              {name: 'Automatics', id: 8, attribute: 'Agi'}, 
              {name: 'Long Arms', id: 9, attribute: 'Agi'}, 
              {name: 'Pistols', id: 10, attribute: 'Agi'}]}
      ] 
    },
    { category: 'Social', groups: [
      { name: 'Misc', skills: [
              {name: 'Animal Handling', id: 23, attribute: 'Cha'}, 
              {name: 'Instruction', id: 24, attribute: 'Cha'}, 
              {name: 'Intimidation', id: 25, attribute: 'Cha'}]},
      { name: 'Acting', skills: [
              {name: 'Con', id: 26, attribute: 'Cha'}, 
              {name: 'Impersonation', id: 27, attribute: 'Cha'}, 
              {name: 'Performance', id: 28, attribute: 'Cha'}]},
      { name: 'Influence', skills: [
              {name: 'Etiquette', id: 29, attribute: 'Cha'}, 
              {name: 'Leadership', id: 30, attribute: 'Cha'}, 
              {name: 'Negotiation', id: 31, attribute: 'Cha'}]}
     ]
    },
    { category: 'Science / Technical', groups: [
      { name: 'Misc', skills: [
              {name: 'Armorer', id: 46, attribute: 'Log'}, 
              {name: 'Artisan', id: 47, attribute: 'Int'}, 
              {name: 'Chemistry', id: 48, attribute: 'Log'}, 
              {name: 'Demolitions', id: 49, attribute: 'Log'},
              {name: 'Forgery', id: 50, attribute: 'Log'}, 
              {name: 'Locksmith', id: 51, attribute: 'Agi'}]},
      { name: 'Biotech', skills: [
              {name: 'Biotechnology', id: 52, attribute: 'Log'}, 
              {name: 'Cybertechnology', id: 53, attribute: 'Log'}, 
              {name: 'First Aid', id: 54, attribute: 'Log'}, 
              {name: 'Medicine', id: 55, attribute: 'Log'}]},
      { name: 'Cracking', skills: [
              {name: 'Cybercombat', id: 56, attribute: 'Log'}, 
              {name: 'Electronic Warfare', id: 57, attribute: 'Log'}, 
              {name: 'Hacking', id: 58, attribute: 'Log'}]},
      { name: 'Electronics', skills: [
              {name: 'Computers', id: 59, attribute: 'Log'}, 
              {name: 'Hardware', id: 60, attribute: 'Log'}, 
              {name: 'Software', id: 61, attribute: 'Log'}]}
     ]
    }
];

var skills_col_2 = [
{ category: 'Physical', groups: [
        { name: 'Misc', skills: [
              {name: 'Diving', id: 11, attribute: 'Bod'}, 
              {name: 'Escape Artist', id: 12, attribute: 'Agi'}, 
              {name: 'Free-Fall', id: 13, attribute: 'Bod'}, 
              {name: 'Perception', id: 14, attribute: 'Int'}]},
        { name: 'Athletics', skills: [
              {name: 'Gymnastics', id: 15, attribute: 'Agi'}, 
              {name: 'Running', id: 16, attribute: 'Str'}, 
              {name: 'Swimming', id: 17, attribute: 'Str'}]},
        { name: 'Outdoors', skills: [
              {name: 'Navigation', id: 18, attribute: 'Int'}, 
              {name: 'Survival', id: 19, attribute: 'Wil'}, 
              {name: 'Tracking', id: 20, attribute: 'Int'}]},
        { name: 'Stealth', skills: [ 
              {name: 'Disguise', id: 21, attribute: 'Int'}, 
              {name: 'Palming', id: 22, attribute: 'Agi'}, 
              {name: 'Sneaking', id: 23, attribute: 'Agi'}]}

      ] 
    },
    { category: 'Vehicles', groups: [
        { name: 'Misc', skills: [
              {name: 'Gunnery', id: 35, attribute: 'Agi'}, 
              {name: 'Pilot Aerospace', id: 36, attribute: 'Rea'}, 
              {name: 'Pilot Aircraft', id: 37, attribute: 'Rea'}, 
              {name: 'Pilot Exotic', id: 38, attribute: 'Rea'}, 
              {name: 'Pilot Ground Craft', id: 39, attribute: 'Rea'}, 
              {name: 'Pilot Walker', id: 40, attribute: 'Rea'}, 
              {name: 'Pilot Water Craft', id: 41, attribute: 'Rea'}]},
        { name: 'Engineering ', skills: [
              {name: 'Aeronautic Mechanics', id: 42, attribute: 'Log'}, 
              {name: 'Automotive Mechanics', id: 43, attribute: 'Log'}, 
              {name: 'Industrial Mechanics', id: 44, attribute: 'Log'}, 
              {name: 'Nautical Mechanics', id: 45, attribute: 'Log'}]}
      ] 
    },
    { category: 'Magic & Resonance', groups: [
      { name: 'Misc', skills: [
              {name: 'Arcane', id: 62, attribute: 'Magic'}, 
              {name: 'Assensing', id: 63, attribute: 'Magic'}, 
              {name: 'Astral Combat', id: 64, attribute: 'Magic'}]},
      { name: 'Conjuring', skills: [
              {name: 'Banishing', id: 65, attribute: 'Magic'}, 
              {name: 'Binding', id: 66, attribute: 'Magic'}, 
              {name: 'Summoning', id: 67, attribute: 'Magic'}]},
      { name: 'Enchanting', skills: [
              {name: 'Alchemy', id: 68, attribute: 'Magic'}, 
              {name: 'Artificing', id: 69, attribute: 'Magic'}, 
              {name: 'Disenchanting', id: 70, attribute: 'Magic'}]},
      { name: 'Sorcery', skills: [
              {name: 'Counterspelling', id: 71, attribute: 'Magic'}, 
              {name: 'Ritual Spellcasting', id: 72, attribute: 'Magic'}, 
              {name: 'Spellcasting', id: 73, attribute: 'Magic'}]},
      { name: 'Tasking', skills: [
              {name: 'Compiling', id: 32, attribute: 'Reson'}, 
              {name: 'Decompiling', id: 33, attribute: 'Reson'}, 
              {name: 'Registering', id: 34, attribute: 'Reson'}]}
     ]
    }
]