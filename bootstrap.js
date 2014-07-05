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
    description: "This character blends into a crowd; he's seldom noticed and easily forgotten. He is unremarkable in every aspect of physical appearance. Anyone attempting to desecribe the character cannot come up with anything more precise than 'average height, average build, average hair, etc'. (More on Pg. 72)" 
  }, 
  {
    name: 'Catlike', 
    cost: 7,
    ratings: 1,
    description: "A character with the Catlike quality is gifted with an uncanny elegance, a stealthy gait, and an almost preternatural ability to move without making a sound. They also claim they land on their feet when dropped, though they tend not to let people test this. This quality adds a +2 dice pool modifier to Sneaking skill tests."
  }, 
  {
    name: 'Codeslinger', 
    cost: 10,
    ratings: 1,
    description: "Ones and zeroes are practically a native language to a Codeslinger. The character is adpet at performing a particular Matrix action (which she selects when she selects this quality) and receives a +2 dice pool modifier on that Matrix action. This can only be selected for Matrix actions that have a test associated with them."
  }, 
  {
    name: 'Double-Jointed', 
    cost: 6,
    ratings: 1,
    description: "A Double-Jointed character has unusually flexible joints and can bend and contort his body into extreme positions. The character receives a +2 dice pool modifier for Escape Artist tests. The character may also be able to squeeze into small, cramped spaces where less limber characters cannot. They're also great at parties and bars."
  }, 
  {
    name: 'Exceptional Attribute', 
    cost: 14,
    ratings: 1,
    description: "The Exceptional Attribute quality is how you get to be the charismatic troll or the agile dwarf. It allows you to possess one attribute at a level one point above the metatype maximum limit. Exceptional Attribute also applies towards Special Attributes such as Magic and Resonance. Edge cannot be affected by the Exceptional Attribute (it is raised by another quality called Lucky). A character may only take Exceptional Attribute once, and only with the Gamemaster's approval."
  }, 
  {
    name: 'First Impression', 
    cost: 11,
    ratings: 1,
    description: "The First Impression quality enables a character to slide easily into new environments, situations, groups, and jobs. Whether infiltrating a gang, making contacts in a new city, or wrangling an invite to a private meet, the character gains a temporary +2 dice pool modifier for relevant Social Tests during the first meeting. This modifier does not apply to second and subsequent encounters."
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
    description: "A technomancer or magic user with the Focused Concentration quality has the discipline to manipulate mana or Resonance more precisely than otherwise possible. This precision reduces stress to the user's body. She is able to sustain one spell / complex form with a force/level equal to her Focused Concentration rating without suffering any penlties. Sustaining additional spells or complex forms incurs the standard -2 dice pool modifier per spell or complex form sustained. This quality may only be taken by technomancers, and magic user characters that are able to cast spells"
  },
  {
    name: 'Gearhead', 
    cost: 11,
    ratings: 1,
    description: "The Gearhead is who you look for when it's time to stomp on the gas and move. She's a natural-born driver or pilot, and has an intuitive understanding of a vehicle's limitations and capabilities and is able to coax whatever machine she's controlling to perform at its best. During vehicle or chase combat, a Gearhead can increase the Speed of her vehicle or drone by 20%, or increase the Handling modifier by +1. She also receives a +2 dice pool modifier when attempting difficult maneuvers or stunts in the vehicles, lasting for 1d6 minutes. The player can choose to make this last longer by pushing the vehicle beyond its limits (See pg 74)."
  }, 
  {
    name: 'Guts', 
    cost: 10,
    ratings: 1,
    description: "When a bug spirit with dripping mandibles comes calling, the character with Guts is the one most likely to stand and fight instead of freaking the hell out. Guts gives a character a +2 dice pool modifier on tests to resist fear and intimidation, including magically induced fear from spells or critter powers."
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
    description: "High Pain Tolerance lets a character keep delivering on the pain even if she's had plenty piled on her own head. A character with this quality can ignore one box of damage per rating point when calculating wound modifiers. This quality may not be used with the Pain Resistance adept power, pain editor bioware, or damage compensator bioware."
  }, 
  {
    name: 'Home Ground', 
    cost: 10,
    ratings: 1,
    description: "The character knows their neighborhood better than anyone - the shortcuts, the hiding places, and the people they can trust. (See more on pg 74)"
  }, 
  {
    name: 'Human-Looking', 
    cost: 6,
    ratings: 1,
    description: "A metahuman character with the Human-Looking quality can pass for human in most circumstances. Human NPCs respond with neutral attitudes towards such characters when making Social skill tests - even those who are particularly biased against metahumans. The character may suffer increased animosity from metahuman NPCs who are prejudiced against humans and who either mistake him for human or distrust his motives for trying to look human. Only elves, dwarves, and orks can take the Human-Looking quality."
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
    description: "Bodies and minds have limits, but some people have the will to push right through those boundaries. For each rank of this quality, the character receives a +1 increase to an inherent limit of his choice (Physical, Mental, or Social). The points can be spent in any combination on these three stats."
  }, 
  {
    name: 'Juryrigger', 
    cost: 10,
    ratings: 1,
    description: "Juryrigger gives a character an intuitive grasp of the inner workings and underlying principles of mechanical and electronic devices. She knows how to repair the broken, rejuvenate the worn, improve a device's efficiency, or coax it into doing things its designers hadn't intended. Characters with the Juryrigger quality receive a +2 dice pool modifier for mechanical Tests when juryrigging gear. (See more on pg 75)"
  }, 
  {
    name: 'Lucky', 
    cost: 12,
    ratings: 1,
    description: "The dice roll and the coin flips this character's way more often than not, giving her the chance to drop jaws in amazement at her good fortune. Lucky allows a character to possess an Edge attribute one point higher than his metatype maximum. Note that taking this quality does not actually increase the character's current Edge rating, it just allows her the opportunity to do so. This quality may only be taken once and must be approved by the Gamemaster. The Lucky quality cannot be combined with Exceptional Attribute."
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
    description: "This is the wonderful ability to potentially make a Fireball bounce away. For every 6 Karma spent on Magic Resistance, a character receives 1 additional die for Spell Resistance Tests. The Magical Resistance quality, however, is always 'on' - the character cannot lower it to receive beneficial spells such as Heal. A character with Magic Resistance cannot take part in spells that require a voluntary subject; such spells automatically fail when used on magic-resistant characters. Characters with a Magic rating cannot take this quality."
  }, 
  {
    name: 'Mentor Spirit', 
    cost: 5,
    ratings: 1,
    description: "Everyone needs some help in life, even if it comes from someone relatively filmy and insubstantial. Mentor Spirit means the character follows a patron spirit (see Mentor Spirits, p. 320) that guides him in his practice of magic and provides certain advantages and disadvantages to his natural abilities. A character may change mentor spirits, but he may have only one mentor spirit at a time. To change mentor spirits, the character must first buy off the current mentor spirit as if it were a Negative quality. He can then purchase the quality again to follow a different mentor spirit. This cost represents the toll of divorcing from one mentor spirit and bonding with a new one. Each tradition has a different name for a mentor spirit. Hermetic mages prefer the term 'mentor spirit' while shamans use the word 'totem' for the spirit that they follow. While the names may vary, the way the mentor works is consistent. This quality is only available to characters that possess a Magic attribute rating."
  }, 
  {
    name: 'Natural Athlete', 
    cost: 7,
    ratings: 1,
    description: "A character with this quality has an innate combination of physical fitness, spatial awareness, and natural athletic or gymnastic talent. While the character may not be a world-class athlete and may require training to achieve peak performance, he is in prime physical shape for his size and weight class. The Natural Athlete adds a +2 dice pool modifier for Running and Gymnastics skill tests."
  }, 
  {
    name: 'Natural Hardening', 
    cost: 10,
    ratings: 1,
    description: "This quality makes the character's neural structure resistant to feedback. This gives her 1 point of natural biofeedback filtering, which is cumulative with a Biofeedback Filter program or a technomancer's firewall (p. 251)."
  }, 
  {
    name: 'Natural Immunity', 
    cost: 0,
    ratings: 2,
    levels: [
      { name: '1', cost: 4}, 
      { name: '2', cost: 10}
    ],
    description: "The ability to casually sip poison can never be overrated. A character with Natural Immunity has an innate or developed immunity to one single disease or toxin. This quality is available at two levels. If purchased at the 4 Karma level, the character is immune to a single natural disease or toxin. If Natural Immunity is purchased at the full 10 Karma level, the character is immune to a single, synthetic (artificially created) disease or toxin. Natural Immunity does not affect diseases or toxins that are magically based, such as HMHVV. The player and gamemaster must agree on the disease, drug, or poison to which the character is immune. The character can take one dose of the drug or poison and experience one exposure to the disease every six hours with no ill effects. Any subsequent dosing or exposure during the next six hours causes normal damage, but the character's recovery time is halved. Note that characters with Natural Immunity to a disease can be a carrier, infecting other characters while suffering no ill effects."
  }, 
  {
    name: 'Photographic Memory', 
    cost: 6,
    ratings: 1,
    description: "A character with Photographic Memory can instantly recall facts, dates, numbers, or anything else he has seen or heard. The character gains a +2 dice pool modifier to all Memory Tests."
  }, 
  {
    name: 'Quick Healer', 
    cost: 3,
    ratings: 1,
    description: "A character with the Quick Healer quality receives a +2 dice pool modifier to all Healing Tests made on/for/by her, including magical healing."
  }, 
  {
    name: 'Resistance (Pathogens / Toxins)', 
    cost: 4,
    ratings: 2,
    levels: [
      { name: '1', cost:  4 },
      { name: '2', cost:  8 }
    ],
    description: "A character with Resistance to Pathogens/Toxins can fight off diseases and drugs more easily than other characters and receives a +1 dice pool modifier to Resistance Tests. This quality comes at two levels: at 4 Karma the character is resistant to either pathogens or toxins, not both. If the character purchases this quality at 8 Karma, she receives the +1 modifier for resisting both."
  }, 
  {
    name: 'Spirit Affinity', 
    cost: 7,
    ratings: 1,
    description: "Available only to magic users, the Spirit Affinity quality allows a character to be attuned to one type of spirit (see Spirits, p. 303). These spirits find the character interesting, are drawn to her, and are more inclined to assist her. They may be reluctant to attack the character, and if forced to do so they are likely to use nonlethal power. Watchers and minions do not count for this quality as they are constructed and are not summoned like normal spirits. Spirit Affinity provides magicians with 1 additional spirit service for each spirit of that type, and it also provides a +1 dice pool modifier for Binding Tests. Magic users may possess this quality for a type of spirit that is not part of their magical tradition."
  }, 
  {
    name: 'Toughness', 
    cost: 9,
    ratings: 1,
    description: "Characters with the Toughness quality shrug off damage more easily than others. Such characters gain a +1 dice pool modifier to their Body when making Damage Resistance tests."
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
    description: "For each rating point in Will to Live, the character gains 1 additional Damage Overflow Box (p. 101). These additional boxes only allow the character to sustain additional damage before dying; they do not raise the threshold at which the character becomes unconscious or incapacitated, nor do they affect modifiers from the damage the character has taken."
  } 
];

var data_drawbacks = [
  {
    name: 'Addiction',
    cost: 0,
    ratings: 4,
    levels: [
      { name: 'Mild',     cost:  -4 },
      { name: 'Moderate', cost:  -9 },
      { name: 'Severe',   cost: -20 },
      { name: 'Burnout',  cost: -25 }
    ],
    description: "A character with the Addiction quality is hooked on chemical substances, such as street drugs (novacoke, bliss, tempo); technological or magical devices, such as better-than-life (BTL) chips or foci; or potentially addictive activities such as gambling or sex. Physiological Addictions affect the Body's functions, producing pain, nausea, shakes, and other side effects that can impair the runner, particularly during  withdrawal. Some possible effects of psychological Addictions include paranoia, anxiety, insomnia, poor concentration, mood disorders, and depression. (Read more on pg 77)"
  },
  {
    name: 'Allergy (Frequency)',
    cost: 0,
    ratings: 2,
    levels: [
      {name: 'Common', cost: -7 },
      {name: 'Uncommon', cost: -2}
    ],
    description: "A character with the Allergy quality is allergic to a substance or condition found in their environment. The value of this quality depends on two factors. The first is whether the substance or condition is Uncommon or Common. Next, determine the severity of the symptoms. Add the appropriate point values together to find the final value. If a character is attacked with a substance to which they are allergic, they lose 1 die from their Resistance Test for each stage of severity of the Allergy (e.g., 1 die for a Mild allergy, 2 dice for a Moderate allergy, etc.)."
  },
  {
    name: 'Allergy (Severity)',
    cost: 0,
    ratings: 4,
    levels: [
      {name: 'Mild',     cost: -3 },
      {name: 'Moderate', cost: -8 },
      {name: 'Severe',  cost: -13 },
      {name: 'Extreme', cost: -18 }
    ],
    description: "A character with the Allergy quality is allergic to a substance or condition found in their environment. The value of this quality depends on two factors. The first is whether the substance or condition is Uncommon or Common. Next, determine the severity of the symptoms. Add the appropriate point values together to find the final value. If a character is attacked with a substance to which they are allergic, they lose 1 die from their Resistance Test for each stage of severity of the Allergy (e.g., 1 die for a Mild allergy, 2 dice for a Moderate allergy, etc.)."
  },
  {
    name: 'Astral Beacon',
    cost: -10,
    ratings: 1,
    description: "The astral signature of a character with the Astral Beacon quality is like, well, a beacon - highly visible on the astral plane. The signature also lasts twice as long as it would without the Astral Beacon quality and others assensing it receive a â -1 to the threshold of their Assensing Test for gathering information about it. Only characters with a Magic rating may take this quality."
  },
  {
    name: 'Bad Luck',
    cost: -12,
    ratings: 1,
    description: "This character is cursed - his own luck often turns against him. When the character uses Edge, roll 1D6. On a result of 1, the point of Edge is spent, but it has the exact opposite effect intended. For example, if a character hopes to gain additional dice he loses that many dice from his dice pool. If a character spends Edge to go first in an Initiative Pass, he ends up going last. If a character spent Edge to negate a glitch, Bad Luck turns it into a critical glitch. The character suffers Bad Luck on only one Edge roll per game session. After the character has suffered his Bad Luck, he does not need to roll the test for Bad Luck for any more expenditures of Edge for the duration of that game session."
  },
  {
    name: 'Bad Rep',
    cost: -7,
    ratings: 1,
    description: "A character with a Bad Rep quality has a dark and lasting stain on her reputation. Whether she's guilty of any wrongdoing is not relevant. What people believe she has done has permanently tainted the way they see her and how they deal with her. The character starts play with 3 points of Notoriety (p 372) that can only be removed or decreased by confronting and resolving the source of the bad reputation. Only then may the quality be bought off with Karma."
  },
  {
    name: 'Code of Honor',
    cost: -15,
    ratings: 1,
    description: "The character has a binding Code of Honor when it comes to killing members of a specific group; it's a matter of unwavering principle. The character with the Code of Honor quality chooses a specific group that they will not kill or allow others to kill. Examples of this group could include women, children, innocent bystanders, or a specific metatype. A character can choose to protect specific paracritters, but only if the specified paracritter possesses the Sapience power. The gamemaster must approve the group that the character designates as being 'off limits.' (Read more on Pg. 79)"
  },
  {
    name: 'Codeblock',
    cost: -10,
    ratings: 1,
    description: "A character with the Codeblock quality always has trouble with a particular Matrix action. He receives a -2 dice pool modifier any time he attempts that type of Matrix action. Codeblock only applies to Matrix actions with an associated test; it does not apply to actions that do not require a test (p. 237). Characters cannot apply Codeblock toward hacking actions they are never likely to take."
  },
  {
    name: 'Combat Paralysis',
    cost: -12,
    ratings: 1,
    description: "A character with Combat Paralysis freezes in combat. On the character's first Initiative Test, the character divides their Initiative Score for that round in half (rounded up). In subsequent phases, the character may roll their normal Initiative. Combat Paralysis also gives the character a -3 dice pool modifier on Surprise Tests. If the character must make a Composure Test while under fire or in a similar combat situation, the gamemaster applies a +1 threshold modifier."
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
    description: "A character with the Dependents quality has one or more loved ones who depend on them for emotional support and financial aid. Dependents may include children, parents, a spouse or lover, a sibling, or an old friend. Meeting the needs of a dependent should take up a fair amount of the character's time, as well as some of the character's money. (Read more on Pg. 80)"
  },
  {
    name: 'Distinctive Style',
    cost: -5,
    ratings: 1,
    description: "A character with the Distinctive Style quality has at least one aspect of his appearance, mannerism, or personality that makes him inconveniently memorable. Choices for Distinctive Style include, but are by no means limited to: tattoos that cannot be easily concealed, an accent or atypical manner of speaking, bizarre fashion choices, scars, gang or prison signs, flashy custom augmentations, or non-metahuman modifications like a tail. Note that what's distinctive in one culture or location may not be in another. Whatever Distinctive Style the player selects makes her character easy to remember. Anyone who attempts to identify, trace, or physically locate this character (or gain information about him via legwork) receives a +2 dice pool modifier for relevant tests. If an NPC makes a Memory Test (p. 152) to determine how much they recall about the character, reduce the Difficulty Threshold by 1, to a minimum of 1. This quality is physical in nature and does not apply to astral searches. This quality may only be taken once. This quality is incompatible with Blandness."
  },
  {
    name: 'Elf Poser',
    cost: -6,
    ratings: 1,
    description: "The Elf Poser is a human character who wants to be an elf. She associates with elves as much as possible, talks like elves, and alters her appearance to resemble an elf. Characters with this quality may undergo cosmetic surgery to get elf ears and elf eyes, and they may successfully pass as elves and avoid any negative Social modifiers associated with being a non-elf. Real elves consider Elf Posers an embarrassment, many humans think of them as sellouts, and other metatypes generally consider posers to be pathetic. If an elf discovers the character's secret, the elf is likely to treat her with contempt and hostility (see Social Modifiers Table, p. 140). An outed elf poser may also face stigma from prejudiced humans as a 'race traitor.' Only human characters may take the Elf Poser quality."
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
    description: "Characters with the Gremlins quality don't get along with technology. Devices malfunction inexplicably, software crashes unexpectedly, vehicles refuse to start, components become unusually fragile at his touch, and wireless links suffer faltering connections and odd interference whenever he's involved. For each level (maximum of 4), reduce the number of rolled 1s necessary to get a glitch (p. 45) by 1 whenever the character is attempting to use a moderately sophisticated device. (Read more on Pg 81)"
  },
  {
    name: 'Incompetent',
    cost: -5,
    ratings: 1,
    description: "An Incompetent character possesses a total lack of knowledge or ability with a certain Active skill groupâ€” or, perhaps worse, they have some vague knowledge or the skills contained in the group, but they have neither the coordination nor the comprehension to come anywhere close to carrying it off properly. No matter how much effort they put into this area, they simply cannot grasp it - it would take a miracle for them to somehow, someday advance to the level of 'poor' in those skills. Incompetent may not be applied to Language or Knowledge skills. (Read more on Pg 81)"
  },
  {
    name: 'Insomnia',
    cost: 0,
    ratings: 2,
    levels: [
      {name: '1', cost: -10},
      {name: '2', cost: -15}
    ],
    description: "A character with the Insomnia quality has trouble falling asleep and seldom feels well rested. Usually, this is only an annoyance. For runners, however, this can become a major problem when they are dependent on being able to rest at every opportunity to remain sharp. Insomnia can lengthen the amount of time it takes for a character to recover Stun damage. At the 10 Karma level, before a character rolls his Body + Willpower to recover Stun damage, the character rolls an Intuition + Willpower (4) Test. If the character succeeds on this test, the character is not impeded by Insomnia and the character regains Stun damage as normal. He also regains his Edge after 8 hours of restful sleep. If the character fails, double the amount of time it normally would take for a character to recover their Stun damage. So instead of healing a number of boxes of Stun damage in an hour, it now takes two hours per roll. If the character is affected by Insomnia, the character does not have his Edge refreshed and may not have it refreshed for up to another 24 hours. At the 15 Karma level, a failed Willpower + Intuition (4) Test means that all efforts to regain Stun damage through rest are negated during that time period, and the character must try again later. No Stun damage is regained from the attempt due to the insomnia the character experiences, and the character must wait for 24 hours before their Edge refreshes."
  },
  {
    name: 'Loss of Confidence',
    cost: -10,
    ratings: 1,
    description: "The Loss of Confidence quality means something has caused the character to lose confidence in himself and one of his abilities. Though a skilled decker, he failed to hack into a Stuffer Shack grid, or despite high Agility, he glitched an easy Climbing Test and fell into a dumpster - whatever the reason, he now doubts himself and his abilities. In tests involving the affected skill, the character suffers a -2 dice pool modifier. If the character has a specialization with the skill, the character cannot use that specialization while suffering a loss of confidence. The skill chosen for the character to have a Loss of Confidence must be one that the character prides himself in and has invested in building. Only skills with a rating 4 or higher may suffer the Loss of Confidence quality. Edge may not be used for tests involving this skill when the character is suffering Loss of Confidence."
  },
  {
    name: 'Low Pain Tolerance',
    cost: -9,
    ratings: 1,
    description: "Characters with Low Pain Tolerance are particularly sensitive to pain; they incur a -1 wound modifier for every 2 boxes of cumulative damage, instead of the normal 3 boxes. This affects both Physical and Stun damage tracks."
  },
  {
    name: 'Ork Poser',
    cost: -6,
    ratings: 1,
    description: "Influenced by Goblin Rock or over-hyped orxploitation trends, an Ork Poser is an elf or human character who alters her appearance to appear as an ork. Various cosmetic biomods - tusk implants, steroids, larynx alterations, etc. - allow him to successfully pass as an ork. Ork posers are an embarrassment to many orks, but some tolerate, if not appreciate, the compliment behind the effort. This means an ork who discovers the character's secret may either become very hostile toward him or be willing to let the character join the 'family' - provided he passes an appropriate hazing ritual to prove his 'orkness.' An outed ork poser may also face stigma from other humans or elves as 'race traitors,' if those humans/elves harbor any prejudice against orks. Only humans and elves may take the Ork Poser quality."
  },
  {
    name: 'Prejudiced (Frequency)',
    cost: 0,
    ratings: 2,
    levels: [
      { name: 'Specific', cost: -3},
      { name: 'Common', cost: -5 }
    ],
    description: "With this quality the character is Prejudiced against members of a specific group of people: metahumans, Awakened, non-metahuman sapient critters, or some other group. The character is not merely intolerant - he is outspoken about his beliefs and may actively work against the target of his prejudice. Depending upon the degree of prejudice, this quality can get the character into trouble for expressing his views or when forced to confront the targets of his prejudice. The Karma bonus granted by this quality varies depending upon how common the hated group is, how often the character is likely to encounter members of the group, and the degree to which the character is openly antagonistic toward them. Refer to the Prejudiced Table (Page 82) to determine the Karma value of the quality based on the prevalence of the hated group and the degree of prejudice. When dealing with the target of their prejudice, a character receives a -2 dice pool modifier per level of severity of the Prejudiced quality for all Social Tests. If negotiations are a part of the encounter, the target receives a +2 modifier per level of the Prejudiced quality. So if a character who is radical in their prejudiced views against the Awakened tries to negotiate with the target of their prejudice, they receive a -6 to their Negotiation Test while the target receives a +6 dice pool modifier."
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
    description: "With this quality the character is Prejudiced against members of a specific group of people: metahumans, Awakened, non-metahuman sapient critters, or some other group. The character is not merely intolerant - he is outspoken about his beliefs and may actively work against the target of his prejudice. Depending upon the degree of prejudice, this quality can get the character into trouble for expressing his views or when forced to confront the targets of his prejudice. The Karma bonus granted by this quality varies depending upon how common the hated group is, how often the character is likely to encounter members of the group, and the degree to which the character is openly antagonistic toward them. Refer to the Prejudiced Table (Page 82) to determine the Karma value of the quality based on the prevalence of the hated group and the degree of prejudice. When dealing with the target of their prejudice, a character receives a -2 dice pool modifier per level of severity of the Prejudiced quality for all Social Tests. If negotiations are a part of the encounter, the target receives a +2 modifier per level of the Prejudiced quality. So if a character who is radical in their prejudiced views against the Awakened tries to negotiate with the target of their prejudice, they receive a -6 to their Negotiation Test while the target receives a +6 dice pool modifier."
  },
  {
    name: 'Scorched',
    cost: -10,
    ratings: 1,
    description: "A Scorched character is coping with neurological problems brought on by damage caused in some way by Black IC, Psychotropic IC, or BTL. The problem can manifest as short- or long-term memory loss, unexpected blackouts, frequent migraines, diminished senses (sight, touch, smell, etc.), and mood disorders such as paranoia and anxiety. The player chooses one specific effect of Scorched, and its effect should be pronounced enough to hinder the character and present potential plot hooks for the gamemaster. Whenever he enters VR or slots a BTL chip, the character must make a Body + Willpower (4) Test. On a failed roll, he experiences the specified physical effects for six hours. A glitch or critical glitch on this test results in suffering the effects for 24 hours. The only way to eliminate the Scorched quality is to get the medical treatment necessary to repair the damage, then spend the Karma to buy off the Negative quality. Once Scorched, though, the character remains susceptible to the condition. Another bad encounter with Black or Psychotropic IC or a BTL will bring this quality back. In addition to the physical side effects the character may experience from being Scorched, the character is vulnerable to damage inflicted by either Black or Psychotropic IC or BTLs. When faced with this IC, the character must make a Willpower (3) Test to be able to confront it without panicking. If he is able to confront the IC that caused their Scorched condition, the character suffers a -2 to Damage Resistance Tests when these programs are inflicting damage. To take the Scorched quality for BTLs, the character must have at least a Mild Addiction to BTLs and possess the gear necessary to use BTLs. To take the Scorched quality for Black and/or Psychotropic IC, the character must be either a decker or a technomancer."
  },
  {
    name: 'Sensitive System',
    cost: -12,
    ratings: 1,
    description: "A character with the Sensitive System quality has immuno- suppressive problems with cybernetic implants. Double all Essence losses caused by cyberware. Bioware implants, regardless of how they are grown or designed, are rejected by the character's body. This quality works differently for characters who are technomancers or Awakened and therefore never plan to take implants. Awakened individuals or technomancers remain fully capable of channeling mana or using Resonance, but they are potentially more susceptible to Drain or Fading. A magic user or technomancer with a Sensitive System must make a Willpower (2) Test before any Drain or Fading Tests. Failure on this test results in Drain or Fading Values being increased by +2 for that particular Drain or Fading Test, as the energy traveling through their body does more damage to their Sensitive System."
  },
  {
    name: 'Simsense Vertigo',
    cost: -5,
    ratings: 1,
    description: "Characters who suffer from Simsense Vertigo experience feelings of disorientation whenever they work with augmented reality, virtual reality, or simsense (including smartlinks, simrigs, and image links). Such characters receive a -2 dice pool modifier to all tests when interacting with AR, VR, or simsense."
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
    description: "Corporate or National), Corporate Limited SIN, or Corporate Born. Individuals with SINs are required by law to always broadcast their SINs. A legal SIN is required for all legal purchases. This makes them very useful things to have, so those who are SINless generally get by with the use of fake SINs just so they can participate in society. (Read more on Pg 84)"
  },
  {
    name: 'Social Stress',
    cost: -8,
    ratings: 1,
    description: "Whether as a result of loss or trauma or due to innate psychological makeup, the Social Stress quality burdens the character with emotions that interfere with his ability to interact with others. A specific cause and trigger for the Social Stress must be established. For example, if his Social Stress is caused by survivor's guilt after the loss of a close friend, unexpectedly encountering someone who looks similar to the lost friend will heighten stress. When a character is using Leadership or Etiquette skills, reduce the number of 1s required to glitch the test by 1. Gamemasters should call for more Social Tests for characters with Social Stress to determine how a character reacts to others, particularly if a situation related to the cause of their stress arises."
  },
  {
    name: 'Spirit Bane',
    cost: -7,
    ratings: 1,
    description: "A character with a Spirit Bane really torques off a certain type of spirit (p. 303). Whether the character has a reputation for harming this sort of spirit or something about her aura enrages them, spirits of the type affected by the Spirit Bane are likely to harass the character when she is in their presence, and they may be reluctant to obey or perform favors for the character or her friends. If spirits of this type are ordered to attack a party that includes the character, these spirits will single her out and attempt to destroy her first. Affected spirits will always use lethal force against these characters with the Spirit Bane quality. If the character with Spirit Bane tries to summon or bind this spirit, she suffers a -2 dice pool modifier for the attempt. If the summoner tries to banish a spirit of this type, the spirit receives a +2 dice pool modifier for resisting her attempt. Watchers and minions do not count for Spirit Bane, as they are constructs that are not summoned like normal spirits. This quality may only be taken by magic users. Magic users may possess this quality for a type of spirit that is not a part of their magical tradition."
  },
  {
    name: 'Uncouth',
    cost: -14,
    ratings: 1,
    description: "The character with the Uncouth quality has difficulty interacting with others. He acts impulsively, overreacts to any perceived provocation, and tends to do whatever pops into his head without considering the consequences (i.e., flipping off Mr. Johnson, calling a drunk troll a 'Trog,' or responding to casual trash talk from a rival runner by punching her in the face). All Social Tests made by the character to resist acting improperly or impulsively receive a -2 dice pool modifier. Additionally, the cost for learning or improving Social Skills is double for Uncouth characters (including at character creation), and they may never learn any Social skill groups. Uncouth characters are treated as 'unaware' in any Social skills that they do not possess at Rating 1 or higher (see Skill Ratings, p. 129). The gamemaster may require the character to make Success Tests for social situations that pose no difficulty for normal characters."
  },
  {
    name: 'Uneducated',
    cost: -8,
    ratings: 1,
    description: "An Uneducated character is not mentally impaired - she just never had the opportunity to learn. Whether because she and her family were isolated squatters, or were SINless, or otherwise underprivileged, she was denied access to the education system. She has only a rudimentary knowledge of reading, writing, and arithmetic. Characters with the Uneducated quality are considered 'unaware' in Technical, Academic Knowledge, and Professional Knowledge skills they do not possess (see Skill Ratings, p. 129), and they may not default on skill tests for those skills. The gamemaster may also require the character to make Success Tests for ordinary tasks that the typical sprawl-dweller takes for granted. Additionally, the Karma cost for learning new skills or improving existing ones in these categories is twice the normal rating (including at character creation), and it's possible the character will never learn some skill groups belonging to these categories."
  },
  {
    name: 'Unsteady Hands',
    cost: -7,
    ratings: 1,
    description: "A character with Unsteady Hands has mild shakes that affect the dexterity and finesse in his hands. The character suffers a -2 dice pool modifier for all Agility-based tests when symptoms manifest themselves. The condition could be physiological (an untreated genetic disorder or damaged nerves, for example), caused by psychological trauma, or even be symptomatic of age. Certain augmentations or medications can mask these symptoms under normal circumstances. Under more stressful situations in the course of the run, there is a chance the Unsteady Hands condition can reappear. The character makes an Agility + Body (4) Test following a stressful encounter (combat, for example). A successful test means the character does not experience the symptoms of this condition (this time). A failed test causes the difficulties associated with unsteady hands to re-emerge, and they remain with the character for the remainder of the run."
  },
  {
    name: 'Weak Immune System',
    cost: -10,
    ratings: 1,
    description: "A character with a Weak Immune System has reduced resistance to infections and disease. Increase the Power of any disease by +2 for every Resistance Test. A character with Weak Immune System cannot take the Natural Immunity or Resistance to Pathogens/Toxins qualities. A Weak Immune System often results from immune-suppression treatments used in cybersurgery and bio-genetic procedures, so it is reasonable to believe that characters that have undergone extensive body modifications are more likely to acquire this quality."
  }  
];
