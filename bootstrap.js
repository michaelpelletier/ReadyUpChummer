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
    priorities: { "A": 7, "B": 4, "C": 0, "D": "-", "E": "-" }
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
	{ label: "Aspected Magician", priorities: {"A": '-', "B": 5, "C": 3, "D": 2, "E": '-'} },
	{ label: "Adept", 						priorities: {"A": '-', "B": 6, "C": 4, "D": 2, "E": '-'} }
]

var data_skills = {
  "A": {single: 46, group: 10},
  "B": {single: 38, group: 5},
  "C": {single: 28, group: 2},
  "D": {single: 22, group: 0},
  "E": {single: 10, group: 0}
}

var skills_col_1 = [
    { category: 'Combat', id: 5000, groups: [
        { name: 'Misc', id: 1000, skills: [
              {name: 'Archery', id: 0, attribute: 'Agi'},
              {name: 'Exotic Melee Weapon', id: 1, attribute: 'Agi'}, 
              {name: 'Exotic Ranged Weapon', id: 2, attribute: 'Agi'}, 
              {name: 'Heavy Weapons', id: 3, attribute: 'Agi'}, 
              {name: 'Throwing Weapons', id: 4, attribute: 'Agi'} ]},
        { name: 'Close Combat', id: 1001, skills: [
              {name: 'Blades', id: 5, attribute: 'Agi'}, 
              {name: 'Clubs', id: 6, attribute: 'Agi'}, 
              {name: 'Unarmed', id: 7, attribute: 'Agi'}
              ]},
        { name: 'Firearms', id: 1002, skills: [
              {name: 'Automatics', id: 8, attribute: 'Agi'}, 
              {name: 'Long Arms', id: 9, attribute: 'Agi'}, 
              {name: 'Pistols', id: 10, attribute: 'Agi'}]}
      ] 
    },
    { category: 'Social', id: 5001, groups: [
      { name: 'Misc', id: 1003, skills: [
              {name: 'Animal Handling', id: 23, attribute: 'Cha'}, 
              {name: 'Instruction', id: 24, attribute: 'Cha'}, 
              {name: 'Intimidation', id: 25, attribute: 'Cha'}]},
      { name: 'Acting', id: 1004, skills: [
              {name: 'Con', id: 26, attribute: 'Cha'}, 
              {name: 'Impersonation', id: 27, attribute: 'Cha'}, 
              {name: 'Performance', id: 28, attribute: 'Cha'}]},
      { name: 'Influence', id: 1005, skills: [
              {name: 'Etiquette', id: 29, attribute: 'Cha'}, 
              {name: 'Leadership', id: 30, attribute: 'Cha'}, 
              {name: 'Negotiation', id: 31, attribute: 'Cha'}]}
     ]
    },
    { category: 'Science / Technical', id: 5002, groups: [
      { name: 'Misc', id: 1006, skills: [
              {name: 'Armorer', id: 46, attribute: 'Log'}, 
              {name: 'Artisan', id: 47, attribute: 'Int'}, 
              {name: 'Chemistry', id: 48, attribute: 'Log'}, 
              {name: 'Demolitions', id: 49, attribute: 'Log'},
              {name: 'Forgery', id: 50, attribute: 'Log'}, 
              {name: 'Locksmith', id: 51, attribute: 'Agi'}]},
      { name: 'Biotech', id: 1007, skills: [
              {name: 'Biotechnology', id: 52, attribute: 'Log'}, 
              {name: 'Cybertechnology', id: 53, attribute: 'Log'}, 
              {name: 'First Aid', id: 54, attribute: 'Log'}, 
              {name: 'Medicine', id: 55, attribute: 'Log'}]},
      { name: 'Cracking', id: 1008, skills: [
              {name: 'Cybercombat', id: 56, attribute: 'Log'}, 
              {name: 'Electronic Warfare', id: 57, attribute: 'Log'}, 
              {name: 'Hacking', id: 58, attribute: 'Log'}]},
      { name: 'Electronics', id: 1009, skills: [
              {name: 'Computers', id: 59, attribute: 'Log'}, 
              {name: 'Hardware', id: 60, attribute: 'Log'}, 
              {name: 'Software', id: 61, attribute: 'Log'}]}
     ]
    }
];

var skills_col_2 = [
    { category: 'Physical', id: 5003, groups: [
        { name: 'Misc', id: 1010, skills: [
              {name: 'Diving', id: 11, attribute: 'Bod'}, 
              {name: 'Escape Artist', id: 12, attribute: 'Agi'}, 
              {name: 'Free-Fall', id: 13, attribute: 'Bod'}, 
              {name: 'Perception', id: 14, attribute: 'Int'}]},
        { name: 'Athletics', id: 1011, skills: [
              {name: 'Gymnastics', id: 15, attribute: 'Agi'}, 
              {name: 'Running', id: 16, attribute: 'Str'}, 
              {name: 'Swimming', id: 17, attribute: 'Str'}]},
        { name: 'Outdoors', id: 1012, skills: [
              {name: 'Navigation', id: 18, attribute: 'Int'}, 
              {name: 'Survival', id: 19, attribute: 'Wil'}, 
              {name: 'Tracking', id: 20, attribute: 'Int'}]},
        { name: 'Stealth', id: 1013, skills: [ 
              {name: 'Disguise', id: 21, attribute: 'Int'}, 
              {name: 'Palming', id: 22, attribute: 'Agi'}, 
              {name: 'Sneaking', id: 23, attribute: 'Agi'}]}
      ] 
    },
    { category: 'Vehicles', id: 5004, groups: [
        { name: 'Misc', id: 1014, skills: [
              {name: 'Gunnery', id: 35, attribute: 'Agi'}, 
              {name: 'Pilot Aerospace', id: 36, attribute: 'Rea'}, 
              {name: 'Pilot Aircraft', id: 37, attribute: 'Rea'}, 
              {name: 'Pilot Exotic', id: 38, attribute: 'Rea'}, 
              {name: 'Pilot Ground Craft', id: 39, attribute: 'Rea'}, 
              {name: 'Pilot Walker', id: 40, attribute: 'Rea'}, 
              {name: 'Pilot Water Craft', id: 41, attribute: 'Rea'}]},
        { name: 'Engineering ', id: 1015, skills: [
              {name: 'Aeronautic Mechanics', id: 42, attribute: 'Log'}, 
              {name: 'Automotive Mechanics', id: 43, attribute: 'Log'}, 
              {name: 'Industrial Mechanics', id: 44, attribute: 'Log'}, 
              {name: 'Nautical Mechanics', id: 45, attribute: 'Log'}]}
      ] 
    },
    { category: 'Magic & Resonance', id: 5005, groups: [
      { name: 'Misc', id: 1016, skills: [
              {name: 'Arcane', id: 62, attribute: 'Magic'}, 
              {name: 'Assensing', id: 63, attribute: 'Magic'}, 
              {name: 'Astral Combat', id: 64, attribute: 'Magic'}]},
      { name: 'Conjuring', id: 1017, skills: [
              {name: 'Banishing', id: 65, attribute: 'Magic'}, 
              {name: 'Binding', id: 66, attribute: 'Magic'}, 
              {name: 'Summoning', id: 67, attribute: 'Magic'}]},
      { name: 'Enchanting', id: 1018, skills: [
              {name: 'Alchemy', id: 68, attribute: 'Magic'}, 
              {name: 'Artificing', id: 69, attribute: 'Magic'}, 
              {name: 'Disenchanting', id: 70, attribute: 'Magic'}]},
      { name: 'Sorcery', id: 1019, skills: [
              {name: 'Counterspelling', id: 71, attribute: 'Magic'}, 
              {name: 'Ritual Spellcasting', id: 72, attribute: 'Magic'}, 
              {name: 'Spellcasting', id: 73, attribute: 'Magic'}]},
      { name: 'Tasking', id: 1020, skills: [
              {name: 'Compiling', id: 32, attribute: 'Reson'}, 
              {name: 'Decompiling', id: 33, attribute: 'Reson'}, 
              {name: 'Registering', id: 34, attribute: 'Reson'}]}
     ]
    }
];

var data_qualities = [
  {
    name: 'Ambidextrous', 
    cost: 4,
    ratings: 1,
    description: "The Ambidextrous character can handle objects equally well with either hand. Without this quality, any action performed solely with the off-hand (i.e., firing a gun) suffers a -2 dice pool modifier."
  }, 
  {
    name: 'Analytical Mind', 
    cost: 5,
    ratings: 1,
    description: "Analytical Mind describes the uncanny ability to logically analyze information, deduce solutions to problems, or separate vital information from distractions and noise. It's useful in cracking cyphers, solving puzzles, figuing out traps, and sifting through data. This quality gives the character a +2 dice pool modifier to any Logic Tests involving a pattern recognition, evidence analysis, clue hunting, or solving puzzles. This quality also the time it takes the character to solve a problem by half."
  }, 
  {
    name: 'Aptitude', 
    cost: 14,
    ratings: 1,
    description: "The quality is how you become even better than the best in the world. The standard limit for skills is 12. Every so often, there is a character who can exceed limitations and be truly exceptional in a particular skill. With this particular quality, the character can have one skill rated at 7 at character creation, and may eventually build that skill up to rating 13. Characters may only take the Aptitude quality once."
  },
  {
    name: 'Astral Chameleon', 
    cost: 10,
    ratings: 1,
    description: "With the Astral Chameleon quality, the character's astral signature blends into the background of astral space and is difficult to detect. All signatures left by the character last only half as long as other astral signatures. Any individuals assensing astral signatures left behind by a character with this quality receive a -2 dice pool for the Assensing Test. Only characters with a Magic rating and capable of leaving astral signatures may have this quality."
  }, 
  {
    name: 'Bilingual', 
    cost: 5,
    ratings: 1,
    description: "A character with this quality reads, writes, and speaks a second language fluently. They can list a second language as a native tongue. This quality can only be acquired at character creation."
  }, 
  {
    name: 'Blandness', 
    cost: 8,
    ratings: 1,
    description: "" 
  }, 
  {
    name: 'Catlike', 
    cost: 7,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Codeslinger', 
    cost: 10,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Double-Jointed', 
    cost: 6,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Exceptional Attribute', 
    cost: 14,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'First Impression', 
    cost: 11,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Focused Concentration', 
    cost: 4,
    ratings: 6,
    levels: [
      { name: '1', cost:  4 },
      { name: '2', cost:  8 },
      { name: '3', cost: 12 },
      { name: '4', cost: 16 },
      { name: '5', cost: 20 },
      { name: '6', cost: 24 }
    ],
    description: ""
  },
  {
    name: 'Gearhead', 
    cost: 11,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Guts', 
    cost: 10,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'High Pain Tolerance', 
    cost: 7,
    ratings: 3,
    levels: [
      { name: '1', cost:  7 },
      { name: '2', cost: 14 },
      { name: '3', cost: 21 }
    ],
    description: ""
  }, 
  {
    name: 'Home Ground', 
    cost: 10,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Human-Looking', 
    cost: 6,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Indomitable', 
    cost: 8,
    ratings: 3,
    levels: [
      { name: '1', cost:  8 },
      { name: '2', cost: 16 },
      { name: '3', cost: 24 }
    ],
    description: ""
  }, 
  {
    name: 'Juryrigger', 
    cost: 10,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Lucky', 
    cost: 12,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Magic Resistance', 
    cost: 6,
    ratings: 4,
    levels: [
      { name: '1', cost:  6 },
      { name: '2', cost: 12 },
      { name: '3', cost: 18 },
      { name: '4', cost: 24 }
    ],
    description: ""
  }, 
  {
    name: 'Mentor Spirit', 
    cost: 5,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Natural Athlete', 
    cost: 7,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Natural Immunity', 
    cost: 4,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Natural Immunity', 
    cost: 10,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Photographic Memory', 
    cost: 6,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Quick Healer', 
    cost: 3,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Resistance (Pathogens / Toxins)', 
    cost: 4,
    ratings: 2,
    levels: [
      { name: '1', cost:  4 },
      { name: '2', cost:  8 }
    ],
    description: ""
  }, 
  {
    name: 'Spirit Affinity', 
    cost: 7,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Toughness', 
    cost: 9,
    ratings: 1,
    description: ""
  }, 
  {
    name: 'Will to Live', 
    cost: 3,
    ratings: 3,
    levels: [
      { name: '1', cost:  3 },
      { name: '2', cost:  6 },
      { name: '3', cost:  9 }
    ],
    description: ""
  } 
];

var data_drawbacks = [
  {
    name: 'Addiction (Mild)',
    cost: -4,
    ratings: 1,
    description: ""
  },
  {
    name: 'Addiction (Moderate)',
    cost: -9,
    ratings: 1,
    description: ""
  },
  {
    name: 'Addiction (Severe)',
    cost: -20,
    ratings: 1,
    description: ""
  },
  {
    name: 'Burnout',
    cost: -25,
    ratings: 1,
    description: ""
  },
  {
    name: 'Allergy (Frequency)',
    cost: 0,
    ratings: 2,
    levels: [
      {name: 'Common', cost: -7 },
      {name: 'Uncommon', cost: -2}
    ],
    description: ""
  },
  {
    name: 'Allergy (Severity)',
    cost: 0,
    ratings: 3,
    levels: [
      {name: 'Moderate', cost: -8 },
      {name: 'Severe',  cost: -13 },
      {name: 'Extreme', cost: -18 }
    ],
    description: ""
  },
  {
    name: 'Astral Beacon',
    cost: -10,
    ratings: 1,
    description: ""
  },
  {
    name: 'Bad Luck',
    cost: -12,
    ratings: 1,
    description: ""
  },
  {
    name: 'Bad Rep',
    cost: -7,
    ratings: 1,
    description: ""
  },
  {
    name: 'Code of Honor',
    cost: -15,
    ratings: 1,
    description: ""
  },
  {
    name: 'Codeblock',
    cost: -10,
    ratings: 1,
    description: ""
  },
  {
    name: 'Combat Paralysis',
    cost: -12,
    ratings: 1,
    description: ""
  },
  {
    name: 'Dependents',
    cost: -3,
    ratings: 3,
    levels: [
      { name: '1', cost: -3 },
      { name: '2', cost: -6 },
      { name: '3', cost: -9 }
    ],
    description: ""
  },
  {
    name: 'Distinctive Style',
    cost: -5,
    ratings: 1,
    description: ""
  },
  {
    name: 'Elf Poser',
    cost: -6,
    ratings: 1,
    description: ""
  },
  {
    name: 'Gremlins',
    cost: -4,
    ratings: 4,
    levels: [
      { name: '1', cost:  -4 },
      { name: '2', cost:  -8 },
      { name: '3', cost: -12 },
      { name: '4', cost: -16 }
    ],
    description: ""
  },
  {
    name: 'Incompetent',
    cost: -5,
    ratings: 1,
    description: ""
  },
  {
    name: 'Insomnia',
    cost: -10,
    ratings: 1,
    description: ""
  },
  {
    name: 'Insomnia',
    cost: -15,
    ratings: 1,
    description: ""
  },
  {
    name: 'Loss of Confidence',
    cost: -10,
    ratings: 1,
    description: ""
  },
  {
    name: 'Low Pain Tolerance',
    cost: -9,
    ratings: 1,
    description: ""
  },
  {
    name: 'Ork Poser',
    cost: -6,
    ratings: 1,
    description: ""
  },
  {
    name: 'Prejudiced (Frequency)',
    cost: 0,
    ratings: 2,
    levels: [
      { name: 'Specific', cost: -3},
      { name: 'Common', cost: -5 }
    ],
    description: ""
  },
  {
    name: 'Prejudiced (Severity)',
    cost: 0,
    ratings: 3,
    levels: [
      { name: 'Biased', cost: 0},
      { name: 'Outspoken', cost: -2 },
      { name: 'Radical', cost: -5}
    ],
    description: ""
  },
  {
    name: 'Scorched',
    cost: -10,
    ratings: 1,
    description: ""
  },
  {
    name: 'Sensitive System',
    cost: -12,
    ratings: 1,
    description: ""
  },
  {
    name: 'Simsense Vertigo',
    cost: -5,
    ratings: 1,
    description: ""
  },
  {
    name: 'Sin',
    cost: 0,
    ratings: 4,
    levels: [
      { name: 'Natioanl', cost: -5 },
      { name: 'Criminal', cost: -10 },
      { name: 'Corp. Limited', cost: -15},
      { name: 'Corporate', cost: -25}
    ],
    description: ""
  },
  {
    name: 'Social Stress',
    cost: -8,
    ratings: 1,
    description: ""
  },
  {
    name: 'Spirit Bane',
    cost: -7,
    ratings: 1,
    description: ""
  },
  {
    name: 'Uncouth',
    cost: -14,
    ratings: 1,
    description: ""
  },
  {
    name: 'Uneducated',
    cost: -8,
    ratings: 1,
    description: ""
  },
  {
    name: 'Unsteady Hands',
    cost: -7,
    ratings: 1,
    description: ""
  },
  {
    name: 'Weak Immune System',
    cost: -10,
    ratings: 1,
    description: ""
  }  
];
