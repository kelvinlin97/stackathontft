export const traits = [
  {
    key: "Set4_Adept",
    name: "Adept",
    description:
      "Adepts calm the flow of battle, reducing the Attack Speed of all enemies for a few seconds at the start of combat.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 2,
      },
      {
        style: "gold",
        min: 3,
        max: 3,
      },
      {
        style: "chromatic",
        min: 4,
      },
    ],
  },
  {
    key: "Set4_Assassin",
    name: "Assassin",
    innate: "At the start of combat, Assassins leap to the enemy backline.",
    description:
      "Assassins gain bonus Critical Strike Damage and Chance, and their spells can critically strike.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
        max: 5,
      },
      {
        style: "chromatic",
        min: 6,
      },
    ],
  },
  {
    key: "Set4_Blacksmith",
    name: "Blacksmith",
    description:
      "After each combat a Blacksmith participates in, they will make progress forging an Artifact. The higher their star-level, the faster they work. Once the Artifact is complete, it will become available to bestow upon an ally. Each ally may only equip one Artifact.",
    type: "class",
    sets: [
      {
        style: "gold",
        min: 1,
      },
    ],
  },
  {
    key: "Set4_Brawler",
    name: "Brawler",
    description: "Brawlers gain bonus Health.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 7,
      },
      {
        style: "chromatic",
        min: 8,
      },
    ],
  },
  {
    key: "Cultist",
    name: "Cultist",
    description:
      "Once your team loses a percentage of their Health, Galio is summoned, slamming into the largest cluster of enemies and knocking them up.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 8,
      },
      {
        style: "chromatic",
        min: 9,
      },
    ],
  },
  {
    key: "Set4_Daredevil",
    name: "Daredevil",
    description:
      "Daredevils seek the thrill of battle, dashing after every other attack. After every dash, they shield themselves for a percentage of their max health and their next attack fires shots, gaining Style. At max Style, they cast their spell.",
    type: "origin",
    sets: [
      {
        style: "gold",
        min: 1,
      },
    ],
  },
  {
    key: "Divine",
    name: "Divine",
    description:
      "Upon attacking several times or dropping below a percentage of their Health, Divine champions ascend, taking reduced damage and dealing bonus true damage for the rest of combat.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 7,
      },
      {
        style: "chromatic",
        min: 8,
      },
    ],
  },
  {
    key: "Set4_Dragonsoul",
    name: "Dragonsoul",
    description:
      "The first Dragonsoul allies to take damage in combat receive the Dragon's Blessing. While blessed, the unit gains bonus stats, and every 5th attack fires a Dragonsoul blast, dealing a percentage of the target's maximum Health in magic damage. On death, this blessing passes to the closest Dragonsoul ally without a blessing.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 8,
      },
      {
        style: "chromatic",
        min: 9,
      },
    ],
  },
  {
    key: "Duelist",
    name: "Duelist",
    innate: "Duelists gain bonus Movement Speed.",
    description: "Duelists' attacks grant Attack Speed.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 7,
      },
      {
        style: "chromatic",
        min: 8,
      },
    ],
  },
  {
    key: "Set4_Elderwood",
    name: "Elderwood",
    description:
      "Every two seconds all Elderwood champions grow, gaining bonus stats. This effect stacks up to five times.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 8,
      },
      {
        style: "chromatic",
        min: 9,
      },
    ],
  },
  {
    key: "Emperor",
    name: "Emperor",
    description:
      "The Emperor deploys with two Sand Guards who can be placed anywhere on the battlefield. They do not move or attack, and die when their Emperor does.",
    type: "class",
    sets: [
      {
        style: "gold",
        min: 1,
        max: 1,
      },
    ],
  },
  {
    key: "Set4_Enlightened",
    name: "Enlightened",
    description: "Enlightened champions generate more Mana.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
      },
    ],
  },
  {
    key: "Set4_Executioner",
    name: "Executioner",
    description:
      "Executioner attacks and spells always critically hit targets beneath a certain Health threshold.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 2,
      },
      {
        style: "gold",
        min: 3,
        max: 3,
      },
      {
        style: "chromatic",
        min: 4,
      },
    ],
  },
  {
    key: "Set4_Exile",
    name: "Exile",
    description:
      "If an Exile has no adjacent allies at the start of combat, they gain a shield equal to a percentage of their maximum health and Lifesteal if there are two or more Exiles.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 1,
        max: 1,
      },
      {
        style: "gold",
        min: 2,
      },
    ],
  },
  {
    key: "Set4_Fabled",
    name: "Fabled",
    description:
      "Fabled champions' abilities are empowered from tales of their past valor.",
    type: "origin",
    sets: [
      {
        style: "gold",
        min: 3,
      },
    ],
  },
  {
    key: "Fortune",
    name: "Fortune",
    description:
      "Winning combat against a player will give bonus orbs. The longer you've gone without an orb, the bigger the payout! Wins give an extra bonus orb with rare loot if there are size or more Fortune!",
    type: "origin",
    sets: [
      {
        style: "gold",
        min: 3,
        max: 5,
      },
      {
        style: "chromatic",
        min: 6,
      },
    ],
  },
  {
    key: "Keeper",
    name: "Keeper",
    description:
      "At the start of combat, Keepers grant themselves and all nearby allies a shield for several seconds. This shield is stronger on Keepers.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
        max: 5,
      },
      {
        style: "chromatic",
        min: 6,
      },
    ],
  },
  {
    key: "Set4_Mage",
    name: "Mage",
    description: "Mages cast twice and have modified Spell Power.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 4,
      },
      {
        style: "gold",
        min: 5,
        max: 6,
      },
      {
        style: "chromatic",
        min: 7,
      },
    ],
  },
  {
    key: "Set4_Mystic",
    name: "Mystic",
    description: "All allies gain Magic Resistance.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
        max: 5,
      },
      {
        style: "chromatic",
        min: 6,
      },
    ],
  },
  {
    key: "Set4_Ninja",
    name: "Ninja",
    description:
      "Ninjas gain bonus Attack Damage and Spell Power. This trait is only active when you have exactly 1 or 4 unique Ninjas.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 1,
        max: 1,
      },
      {
        style: "gold",
        min: 4,
        max: 4,
      },
    ],
  },
  {
    key: "Sharpshooter",
    name: "Sharpshooter",
    description:
      "Sharpshooters attacks and spells ricochet to nearby enemies dealing reduced damage.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
        max: 5,
      },
      {
        style: "chromatic",
        min: 6,
      },
    ],
  },
  {
    key: "Set4_Slayer",
    name: "Slayer",
    description:
      "Slayers gain Lifesteal that gets stronger as their own Health decreases, and deal bonus damage that scales up based on their target's missing Health.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
      },
    ],
  },
  {
    key: "Set4_Spirit",
    name: "Spirit",
    description:
      "The first time a Spirit casts their spell, all allies gain Attack Speed based on the spell's mana cost.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
      },
    ],
  },
  {
    key: "Set4_Syphoner",
    name: "Syphoner",
    description:
      "All allies heal for some of the damage they deal with spells and attacks.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
      },
    ],
  },
  {
    key: "Boss",
    name: "The Boss",
    description:
      "When The Boss first drops below a percentage of his Health, he leaves combat to start doing sit-ups. Each sit-up restores a percentage of his maximum Health and gives him Attack and Movement Speed. If he reaches full Health he returns to combat Pumped Up: all of his attacks and spells deal true damage. If all of his allies die, he will immediately return to combat.",
    type: "origin",
    sets: [
      {
        style: "gold",
        min: 1,
      },
    ],
  },
  {
    key: "Set4_Vanguard",
    name: "Vanguard",
    description: "Vanguard champions gain bonus Armor.",
    type: "class",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 7,
      },
      {
        style: "chromatic",
        min: 8,
      },
    ],
  },
  {
    key: "Warlord",
    name: "Warlord",
    description:
      "Warlords have bonus Health and Spell Power. Each victorious combat they participate in increases the bonus.",
    type: "origin",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 8,
      },
      {
        style: "chromatic",
        min: 9,
      },
    ],
  },
];
