var classFeats = function() {
return [
new Feat(122300, 1, 1, 3, 0, 5, null,
    new FeatDescription('Physique',
          [{s:[2,4,6,8,10], suf:'%', t:'Increases your Constitution'}],
          "Increases the barbarian's Constitution by 2% per feat point invested.")),
new Feat(122400, 1, 2, 2, 1, 5, null,
    new FeatDescription('Atrocity',
          [],
          "Increases the chance of the barbarian's Reaver and Blood Rage Stances applying their effects.")),
new Feat(123400, 1, 2, 5, 2, 5, null,
    new FeatDescription('Devastation',
          [],
          "Attacks with the barbarian's primary weapon which do not inflict critical damage have a chance of increasing the barbarian's Critical Rating. This effect can stack up to ten times, but is removed when the barbarian performs a critical hit. Investing feat points increases the chance of applying the Critical Rating increase.")),
new Feat(124200, 1, 3, 1, 3, 3, null,
    new FeatDescription('Shock and Awe',
          [{s:[-3,-6,-13], suf:'s', t:'Cooldown time on Stunning Punch III-V'},
          {s:[-3,-6,-12], suf:'s', t:'Cooldown time on Stunning Punch I-II'},
          {s:[-3,-5,-11], suf:'s', t:'Cooldown time on Clobber IV-V'},
          {s:[-3,-5,-10], suf:'s', t:'Cooldown time on Clobber III'},
          {s:[-3,-4,-9], suf:'s', t:'Cooldown time on Clobber I-II'}],
          "Reduces the reuse time for Stunning Punch and Clobber combos.")),
new Feat(122500, 1, 3, 2, 4, 3, null,
    new FeatDescription('Staggering Punch',
          [],
          "Improves the Stunning Punch combos by also reducing the victim's movement speed by 35% for 4/8/12 seconds.")),
new Feat(124100, 1, 3, 5, 5, 5, null,
    new FeatDescription('Reverse Swing',
          [{s:[0,2,4,6,8], suf:'s', t:'Duration on Reverse Swing'}],
          "Augments the Staggering Blow and Bone Shatter combo by increasing the damage the barbarian inflicts. Investing feat points increases this damage bonus and the duration of the effect.")),
new Feat(123500, 1, 3, 6, 6, 1, null,
    new FeatDescription('Paralysis',
          [],
          "Augments the Clobber combo by battering the target's armor, increasing the damage the target takes from physical attacks.")),
new Feat(122600, 1, 4, 2, 7, 3, null,
    new FeatDescription('Ability - Eyes of Madness',
          [],
          "Grants the barbarian an ability that makes all foes in the vicinity less likely to focus their attacks on the barbarian. Investing feat points increases the threath reduction.")),
new Feat(122900, 1, 4, 3, 8, 3, null,
    new FeatDescription('Insanity',
          [],
          "Increases the maximum stack size of Blood Rage Stance to 11/13/15.")),
new Feat(123600, 1, 4, 5, 9, 5, null,
    new FeatDescription('Grisly Wounds',
          [{s:[1,2,3,4,5], suf:'%', t:'Increase to Damage Per Second'}],
          "The barbarian augments the Butcher and Upheal combos with their own inborn brutality, adding more damage.")),
new Feat(123300, 1, 5, 2, 10, 1, null,
    new FeatDescription("Ability - No Escape",
         [],
         "Grants an ability that enables the barbarian to throw their weapon, impaling their enemy, cause massive damage that lingers for a short time and also stuns the victim. This ability disarms the barbarian for a short time.")),
new Feat(123800, 1, 5, 5, 11, 1, null,
    new FeatDescription("Combo - Earth Shatter",
         [],
         "This mighty combo stuns all enemies in close vicinity.")),
new Feat(123700, 1, 5, 6, 12, 3, [3,6],
    new FeatDescription("Ability - Finishing Blow",
         [{s:[0,3,6], suf:'%', t:"Increase to Damage Per Second on Finishing Blow"}],
         "Grants the barbarian a powerful follow-up charge attack that can only be used after successfully knocking back their foe.")),
new Feat(124500, 1, 6, 2, 13, 5, null,
    new FeatDescription("Arcane Marauder",
         [{s:[1,2,3,4,5], suf:'%', t:"Immunity"}],
         "Increases the barbarians resistance to spells. Each time the barbarian is damaged by spells, their is a 4/8/12/16/20% chance of incrementing the Blood Rage Stance stack. Also, after being the victim of a spell critical hit, the barbarian has a 20/40/60/80/100% chance to improve their movement speed by 25%.")),
new Feat(122700, 1, 6, 3, 14, 1, [4,3],
    new FeatDescription("Ability - Blood Fury",
         [],
         "Grants an ability which allows the barbarian to gain Critical Rating and Combat Rating. Activating this ability consumes 5 stacks of Blood Rage.")),
new Feat(124600, 1, 6, 5, 15, 5, null,
    new FeatDescription("Ability - Swarm Fighter",
         [{s:[4,8,12,16,20], suf:'%', t:"Weapon Damage (melee)"}],
         "Grants the barbarian an ability that taunts all minions in the area. Every attack from a taunted target will trigger a heal effect when this ability is active. A minion can only be affected by Swarm Fighter once every minute. This feat also passively increases the damage the barbarian inflicts.")),
new Feat(123000, 1, 7, 1, 16, 5, null,
    new FeatDescription("Hammer and Anvil",
         [{s:[5,10,15,20,25], suf:'%', t:"Increase to Damage Per Second on Bone Shatter and Staggering Blow Rank I to IV"},
         {s:[9,18,27,36,45], suf:'%', t:"Increase to Damage Per Second on Stunning Punch Rank I to V"}],
         "Enhances the Stunning Punch and Staggering Blow combos by increasing the damage they inflict.")),
new Feat(124800, 1, 7, 2, 18, 5, null,
    new FeatDescription("Rampage",
         [{s:[155,310,465,620,775], suf:'', t:"Combat Rating"}],
         "Increases the damage of the barbarian's blows.")),
new Feat(123200, 1, 7, 5, 20, 5, null,
    new FeatDescription("Ability - Rampaging Horde",
         [{s:[0,3,6,9,12], suf:'s', t:"Duration on Rampaging Horde"}],
         "Grants an ability that provides a damage bonus based on the number of friendly targets within 15 meters, up to a maximum of 10. Members of the barbarian's team also receive a small damage boost. Investing feat points increases the duration of both effects by 3 seconds, ultimately doubling the duration.")),
new Feat(123100, 1, 8, 1, 19, 2, [7,1],
    new FeatDescription("Comatose",
         [],
         "Enhances the Stunning Punch combo by increasing the amount of time the victim is stunned for by 1/3 second.")),
new Feat(124700, 1, 8, 2, 17, 5, [7,2],
    new FeatDescription("Unstoppable",
         [],
         "When dropping below 35% health while in Blood Rage Stance, the barbarian gains 6/12/18/24/30% damage deflection for 15 seconds. This effect cannot occur more than once every 30 seconds.")),
new Feat(125100, 1, 8, 3, 25, 2, [8,2],
    new FeatDescription("Blood Frenzy",
         [],
         "When the Unstoppable effect triggers, the barbarian gains increased damage for the duration of the effect.")),
new Feat(123900, 1, 8, 4, 21, 3, null,
    new FeatDescription("Combo - Scatter Foes",
         [],
         "Grants the barbarian a combo that knocks back foes in a wide cone area. Investing feat points increases damage but also increases the distance any foe is knocked back.")),
new Feat(124000, 1, 8, 5, 22, 5, [7,5],
    new FeatDescription("Combo - Decapitation",
         [{s:[0,8,16,24,32], suf:'%', t:"Increase to Damage Per Second on Decapitation"}],
         "Grants the barbarian a swift combo that inflicts massive damage and increases the chance of a fatality. This combo has a long reuse time.")),
new Feat(122800, 1, 9, 2, 23, 1, [8,2],
    new FeatDescription("Welcoming Death",
         [],
         "The barbarian gains increased damage when attacking foes who are below 35% health. This effect can only occur when the barbarian is in Blood Rage Stance.")),
new Feat(124300, 1, 9, 5, 24, 1, [8,5],
    new FeatDescription("Ability - Thirst for Blood",
         [],
         "Grants an ability that drives the group into a wild blood lust. Attacking or being attacked can trigger a damage bonus effect and multiple stacks of this effect eventually boosts health and stamina regeneration. Each group member who reaches the maximum stack will also provide the group with an additional damage increase. This additional damage increase can be stacked up to six times.")),
new Feat(120000, 2, 1, 3, 26, 5, null,
    new FeatDescription("Reave",
         [{s:[5,10,15,20,25], suf:'%', t:"Weapon Damage (melee)"}],
         "Increases the barbarian's weapon damage (melee) by 5% per feat point invested.")),
new Feat(120100, 2, 2, 2, 41, 5, null,
    new FeatDescription("Ability - Blitz",
         [{s:[0,10,20,30,40], suf:'%', t:"Increase to Damage Per Second on Blitz"}],
         "Grants the barbarian an ability allowing them to charge their target. Investing feat points increases the damage of the charge attack.")),
new Feat(121200, 2, 2, 5, 28, 5, null,
    new FeatDescription("Ambidextrous",
        [{s:[2,4,6,8,10], suf:'%', t:"Chance To Offhand Attack"}],
        "Permanently increases the chance to attack with their secondary weapon.")),
new Feat(120200, 2, 3, 2, 29, 5, null,
    new FeatDescription("Sever",
        [{s:[0,15,25,35,60], suf:'%', t:"Increase to damage or healing on Sever"}],
        "Attacks with the barbarian's primary weapon have a chance of inflicting additional slashing damage.")),
new Feat(121400, 2, 3, 4, 31, 2, [3,5],
    new FeatDescription("Brutal Cyclone",
        [{s:[15,30], suf:'%', t:"Increase Critical Chance on Cyclone of Steel and Upheaval opening attack"}],
        "Increases the chance of inflicting critical damage when using the Cyclone of Steel combo starter.")),
new Feat(121300, 2, 3, 5, 32, 3, null,
    new FeatDescription("Smash 'n Crush",
        [{s:[10,20,30], suf:'%', t:"Increase to Damage Per Sec on Cyclone of Steel and Upheaval opening attack"}],
        "Increases the combo starter damage done by the Cyclone of Steel combo.")),
new Feat(121600, 2, 4, 2, 34, 5, null,
    new FeatDescription("Ability - Predatory Instincts",
         [],
         "Grants the barbarian an ability which increases their evade chance by 3/6/9/12/15% and their rate of stamina regeneration.")),
new Feat(120300, 2, 4, 3, 33, 3, null,
    new FeatDescription("Ferocity",
         [],
         "Increases the maximum stack size of Reaver Stance to 11/13/15.")),
new Feat(121500, 2, 4, 5, 35, 5, null,
    new FeatDescription("Tempered Steel",
        [{s:[1,2,3,4,5], suf:'%', t:"Increase to Damage Per Second on Cyclone of Steel and Upheaval"}],
         "Increases the damage done by the barbarian's Cyclone of Steel combo.")),
new Feat(120500, 2, 5, 2, 46, 1, null,
    new FeatDescription("Ability - Haste",
         [],
         "Grants the barbarian an ability which for a short time increases their movement speed and increases damage inflicted by their attacks.")),
new Feat(121700, 2, 5, 4, 37, 1, null,
    new FeatDescription("Ability - Too Many to Count",
         [],
         "Grants the barbarian an ability that increases the damage done by their attacks, based on how many living foes are nearby. The effect can be applied ten times.")),
new Feat(121900, 2, 5, 5, 38, 1, null,
    new FeatDescription("Ability - Savage Fury",
         [],
         "Grants an ability that increases the damage inflicted by the barbarian and their allies' attacks, but can only be used when Reaver Stance has ten stacks or more.")),
new Feat(122000, 2, 5, 6, 39, 2, [5,5],
    new FeatDescription("Endless Fury",
         [{s:[2.5,5], suf:'s', t:"Duration on Savage Fury"}],
         "Improves the Savage Fury feat by increasing the duration of the effect for both the barbarian and their allies. Also, the barbarian gains a stamina and energy regeneration effect while the ability is active.")),
new Feat(120600, 2, 6, 1, 40, 3, null,
    new FeatDescription("Jagged Weapons",
        [{s:[4,8,12], suf:'%', t:"Increase to damage or healing on Jagged Cut and Bone Shatter"}],
        "Increases the bleed damage from the barbarian's Jagged Cut combos. ")),
new Feat(120700, 2, 6, 2, 27, 5, null,
    new FeatDescription("Cyclone of Razors",
        [{s:[5,10,15,20,25], suf:'%', t:"Increase to Damage Per Second on Whirlwind"}],
        "Increases the damage done by the barbarian's Whirlwind combo.")),
new Feat(120400, 2, 6, 3, 42, 3, [4,3],
    new FeatDescription("Spirit of the Panther",
         [],
         "Increases the chance of the barbarian inflicting critical damage with the Cyclone of Steel combo by 5/10/15% while having 7/10/13 stacks of Reaver Stance.")),
new Feat(121800, 2, 6, 5, 43, 3, null,
    new FeatDescription("Boiling Blood",
        [{s:[-5,-10,-15], suf:'s', t:"Decrease to cooldown time on Whirlwind"}],
         "Reduces the reuse time for Whirlwind combos.")),
new Feat(125000, 2, 7, 2, 44, 5, null,
    new FeatDescription("Lashing Swords",
        [{s:[1,1,2,2,3], suf:'m', t:"Increase the area of effect on Jagged Cut and Bone Shatter"}],
         "Increases the area of effect of the Jagged Cut combos and reduces the victim's chance to evade blows for a short time.")),
new Feat(125200, 2, 7, 3, 49, 2, null,
    new FeatDescription("Don't Fear the Reaver",
         [],
         "Increases the barbarian's resistance to fear effects by 2/4% per active stack of Reaver Stance.")),
new Feat(120800, 2, 7, 4, 45, 1, null,
    new FeatDescription("Ability - Back in the Fray",
         [],
         "Grants an ability that allows the barbarian to regenerate a small amount of health. While this effect is active, the barbarian gains increased evade chance and immunity. Activating this ability consumes 5 stacks of Reaver Stance.")),
new Feat(124900, 2, 7, 5, 46, 5, null,
    new FeatDescription("Ability - Overpower",
         [],
         "Grants the barbarian an ability that inflicts damage on all enemies in a cone in front of them. The damage of this ability scales with the number of Reaver Stance stacks active. This ability can only be used when the Overpower effect is active. The barbarian's offhand attacks have a 20/40/60/80/100% chance of applying the overpower effect.")),
new Feat(121000, 2, 8, 1, 47, 1, null,
    new FeatDescription("Rupture Armor",
         [{s:[100],suf:'%',t:' Increase critical chance on Wreck Armour opening attack.'}],
         "Improves the Wreck Armour combos by increasing the chance of inflicting a devastating critical hit.")),
new Feat(120900, 2, 8, 2, 48, 5, [7,2],
    new FeatDescription("Shrapnel",
        [{s:[0,15,25,35,60], suf:'%', t:"Increase to damage or healing on Shrapnel"}],
         "Improves the barbarian's Wreck Armour combo by inflicting piercing damage on any enemies nearby the primary target.")),
new Feat(125300, 2, 8, 3, 53, 1, [7,3],
    new FeatDescription("Ability - Unstable Mind",
         [],
         "Grants the barbarian an ability which removes all stun, snare, root and fear effects and gives them immunity to these effects for 3 seconds.")),
new Feat(122100, 2, 8, 5, 50, 5, [7,5],
    new FeatDescription("Ability - Impale",
        [{s:[0,100,200,300,400], suf:'%', t:"Increase to damage or healing on Impale"}],
        "Grants the barbarian an ability so their next attack also includes an offhand attack. Both primary and offhand attacks cause additional bleeding damage.")),
new Feat(121100, 2, 9, 2, 51, 1, [8,2],
    new FeatDescription("Ability - Dance of Death",
         [],
         "Grants an ability that makes all attacks inflict instant damage on all foes in close vicinity.")),
new Feat(122200, 2, 9, 5, 52, 1, [8,5],
    new FeatDescription("Ability - Armageddon Falls",
         [],
         "Grants an ability so that for a short period of time the barbarian's blows curse the victim to suffer increased slashing damage when struck in combat."))
]};