var classFeats = function() {
return [

new Feat(102400, 1, 1, 3, 0, 5, null,
    new FeatDescription("Spell - Circle of Magic",
        [{s:[1,2,3,4,5], suf:'%', t:"Increase to damage or healing on Shockstrike"}],
    	"Increases the damage of the Shockstrike and grants a spell that creates a circle of magic at the demonologist's feet for 10 seconds. All allies standing within the circle gain 2/4/6/8/10% Magical Mana Tap.")),
new Feat(102500, 1, 2, 2, 1, 5, null,
    new FeatDescription("Discharge Shockstrike",
        [{s:[15,30,45,60,100], suf:'%', t:"Splash Damage on Shockstrike"}],
   	   "Improves the Shockstrike spell by increasing the damage inflicted on enemies adjacent to the primary lightning strike.")),
new Feat(103600, 1, 2, 5, 2, 5, null,
    new FeatDescription("Natural Conductor",
    	   [{s:[21.7,28.9,36.1,43.4,72.3], suf:'', t:"Magic Damage (Electrical)"}],
    	   "Increses the damage done by the sorcerer's electrical spells.")),
new Feat(102600, 1, 3, 1, 3, 5, null,
    new FeatDescription("Overload",
    	   [],
    	   "Whenever Fires of Gehenna, Shockstrike, Inferno of Amher, Shockblast, Hellfire Stream, Shock or the Wicked Bolt spell is cast there is a chance of building an Overload charge. When this ability is stacked 3 times the next time the spell is cast it costs zero mana.")),
new Feat(102700, 1, 3, 3, 4, 2, null,
    new FeatDescription("Demonic Power",
    	   [],
    	   "The magician calls upon the monarchs of the nine hells to increase the damage done by their demonic servants by 20%. Investing another feat point increases this to 50%.")),
new Feat(103700, 1, 3, 5, 5, 5, null,
    new FeatDescription("Rapid Recharge",
    	   [{s:[-0.4,-0.8,-1.2,-1.6,-2], suf:'s', t:"Decrease recast time on Shock"}],
    	   "Reduces the reuse time of your Shock spells.")),
new Feat(102800, 1, 4, 2, 6, 5, null,
    new FeatDescription("Earth Recharge",
    	   [],
    	   "The demonologist's direct damage spells have a chance of restoring a portion of Mana when cast.")),
new Feat(103800, 1, 4, 5, 7, 5, null,
    new FeatDescription("Bombardment",
    	   [{s:[1.5,3,4.5,6,7.5], suf:'m', t:"Attack Range"}],
    	   "Increases the attack range of the Shock and Shockstrike spells.")),
new Feat(105500, 1, 5, 2, 8, 1, null,
    new FeatDescription("Soul Resonance",
    	   [],
    	   "Enemies affected by the Shock spell become more vulnerable to elemental damage and inflict damage to all nearby enemies shortly afterward.")),
new Feat(102900, 1, 5, 3, 9, 1, null,
    new FeatDescription("Spell - Agonizing Jolts",
    	   [],
    	   "Grants a channeling lightning spell that also reduces the victim's movement speed for a short time.")),
new Feat(103900, 1, 5, 5, 10, 1, null,
    new FeatDescription("Spell - Living Thunderstorm",
    	   [],
    	   "Grants a spell that summons a dark thundercloud that slowly moves toward the target inflicting damage on any enemies in its path. When it reaches the target, it detonates with a single massive lightning bolt.")),
new Feat(103100, 1, 6, 1, 17, 1, [6,2],
    new FeatDescription("Charged Storm Chains",
    	   [],
    	   "Improves the Storm Chains spell by adding a pulsing electrical damage effect around the target. Enemies damaged by this effect will have their movement speed reduced by 30%. This movement speed reduction bypasses crowd control immunities.")),
new Feat(103000, 1, 6, 2, 11, 3, null,
    new FeatDescription("Copper Strom Chains",
    	   [{s:[20,50,100], suf:'%', t:"Increase to damage or healing on Storm Chains"}],
    	   "Increases the damage done by the Storm Chains spell.")),
new Feat(104000, 1, 6, 5, 12, 3, null,
    new FeatDescription("Chained Shockstrike",
    	   [],
    	   "Enhances the Shockstrike spell with a chance (20/40/75%) of inflicting electrical damage on two additional targets within 5 meters.")),
new Feat(104300, 1, 6, 6, 14, 5, null,
    new FeatDescription("Fury of the Underworld",
    	   [],
    	   "Increases the Spell Critical Chance of your demon servants by 2/4/6/8/10%.")),
new Feat(103200, 1, 7, 1, 0, 3, null,
    new FeatDescription("Overloaded Shockblast",
    	   [{s:[15,30], suf:'%', t:"Increase to damage or healing on Shockblast"}],
    	   "Augments the Shockblast spell by adding a chance of creating secondary pillars of lightning that can strike up to 3 targets. Investing feat points increases the chance of adding these secondary pillars and damage these secondary strikes cause.")),
new Feat(105000, 1, 7, 2, 16, 5, null,
    new FeatDescription("Spell - Shock Lance",
    	   [],
    	   "Grants a spell which blasts all enemies between the target and the demonologist. After using this spell, the mana cost of all subsequent Shock Lance spell increases. This mana cost increase can stack up to 5 times. Also the demonologist's Shock and Shockstrike spells build up the Empowered Shock Lance effect. Empowered Shock Lance lowers the cast time and increases the critical hit chance of Shock Lance based on the number of stacks active. Casting Shock Lance consumes 4 stacks of this effect.")),
new Feat(103300, 1, 7, 3, 15, 3, null,
    new FeatDescription("Demon Heart of Chatha",
    	   [],
    	   "Improves the Demonic Heart invocation by increasing the rate of mana and health regeneration and resistances to stun and fear effects. Investing feat points increases these benefits.")),
new Feat(103400, 1, 7, 4, 18, 2, null,
    new FeatDescription("Hell's Embrace",
    	   [],
    	   "Increases the health effects of the demonologist's Demon Guardian servant. Investing feat points further increases these benefits.")),
new Feat(104200, 1, 7, 5, 19, 5, null,
    new FeatDescription("Spell - Wicked Bolt",
        [{s:[0,100,200,300,400], suf:'%', t:"Increase to damage or healing on Wicked Bolt"}],
   	   "Grants a lightning spell that also flings the target backwards. Adding ranks increases the damage done and the distance the target is knocked back.")),
new Feat(104900, 1, 8, 2, 20, 5, [7,2],
    new FeatDescription("Pact of Dread",
    	   [{s:[10,20,30,40,50], suf:'%', t:"Critical Damage Bonus"}],
    	   "A critical hit with a spell (demonologist's or their minion) triggers a critical damage bonus for the Fires of Gehenna, Hellfire Stream, Shockstrike and Waves of Flames spells. This effect has 5 charges & when all are used this power becomes inactive for a brief time.")),
new Feat(104100, 1, 8, 3, 21, 2, null,
    new FeatDescription("Spell - Possession",
    	   [{s:[0,3], suf:'s', t:"Duration on Possession"}],
    	   "Grants a spell that instantly sends a demonic spirit into the target, stunning them.")),
new Feat(104400, 1, 8, 5, 22, 5, [7,5],
    new FeatDescription("Spell - Thunderclap",
    	   [{s:[0,5,10,15,20], suf:'%', t:"Increase to damage or healing on Thunderclap"}],
    	   "Grants a channeling spell which invokes a cone shaped energy-field that inflicts electrical damage and has a chance of knockbacking anyone caught in it.")),
new Feat(103500, 1, 9, 2, 23, 1, [8,2],
    new FeatDescription("Pact of Earthwalking",
    	   [],
    	   "Allows the demonologist's demon servants to fully manifest in the world and grants them access to a team-wide healing spell.(Increases Magic Damage +166%, Fire & Unholy Invulnerability +200%. Holy Invulnerability reduced by -50%. Spells can trigger a team healing effect that lasts 20 seconds.)")),
new Feat(105600, 1, 9, 5, 24, 1, [8,5],
    new FeatDescription("Spell - Lore of Skelos",
    	   [],
    	   "Grants a spell that increases the demonologist's magic damage, but also increases the mana cost of many of their spells.")),
new Feat(100000, 2, 1, 3, 25, 5, null,
    new FeatDescription("Deeper Fires",
    	   [{s:[1.5,2,2.5,3,5], suf:'%', t:"Increase to damage or healing on Fires of Gehenna"}],
    	   "Increases the damage done by the Fires of Gehenna invocation.")),
new Feat(100100, 2, 2, 2, 26, 5, null,
    new FeatDescription("Pyromancer",
    	   [{s:[21.7,28.9,36.1,43.4,72.3], suf:'', t:"Magic Damage (Fire)"}],
    	   "Increases the damage done by all of the demonologist's fire-based spells.")),
new Feat(101300, 2, 2, 5, 27, 5, null,
    new FeatDescription("Fluidic Fires",
    	   [{s:[15,30,45,60,100], suf:'%', t:"Splash Damage on Fires of Gehenna"}],
    	   "Improves the Fires of Gehenna spell with a splash effect that damages enemies nearby the primary target.")),
new Feat(100300, 2, 3, 2, 28, 5, null,
    new FeatDescription("Lingering Flames",
    	   [{s:[30,60,90,120,150], suf:'%', t:"Increase damage or healing on Incinerate"}],
    	   "Improves the Fires of Gehenna spell by increasing the damage inflicted by its lingering Incinerate effect.")),
new Feat(105700, 2, 3, 3, 30, 1, [3,2],
    new FeatDescription("Scorch",
    	   [{s:[0.3,0.5,0.8], suf:'m', t:"Spell column radius on Hellfire Stream"}],
    	   "Improves the lingering Incinerate effect, allowing it to apply Blistering Wounds which reduces the amount of healing received by 5%. This can be applied up to 5 times.")),
new Feat(105100, 2, 3, 4, 29, 3, null,
    new FeatDescription("Blazing Fire",
    	   [],
    	   "Increases the width of the Hellfire Stream spell and gives it a 33/66/100% chance to apply the Incinerate effect. Enemies damaged by Hellfire Stream have a 33/66/100% chance of becoming vulnerable to elemental damage.")),
new Feat(101500, 2, 3, 5, 48, 2, [2,5],
    new FeatDescription("Amassed Flames",
    	   [],
    	   "Each time the demonologist casts the Fires of Gehenna spell, they empower their magic for a short time with extra fire damage. This can be applied up to 5 times. Additonal feat point increase the fire damage bonus.")),
new Feat(100400, 2, 4, 1, 33, 3, null,
    new FeatDescription("Spell - Consume Flames",
        [],
    	"Grants a spell that converts the lingering Incinerate damage effect into Mana for the demonologist. Stacked incinerate effects return more Mana.(1%,2%,3%,4%,6%)/(2%,3%,5%,6%,8%)/(3%,4%,6%,8%,12%)")),
new Feat(100200, 2, 4, 2, 31, 3, [3,2],
    new FeatDescription("Field of Fires",
    	   [{s:[0,10,25], suf:'%', t:"Increase damage or healing on Intense Heat"}],
    	   "Improves the Fires of Gehenna spell by adding an Intesnse Heat area effect to the lingering Incinerate effect.")),
new Feat(101000, 2, 4, 3, 37, 1, null,
    new FeatDescription("Devouring Flames",
    	   [],
    	   "Augments the Fires of Gehenna spell so that the corpses of any enemy killed by the spells lingering flames continue to burn fiercly, damaging any nearby enemies.")),
new Feat(101600, 2, 4, 5, 34, 2, null,
    new FeatDescription("Spell - Demonic War",
    	   [],
    	   "Grants a spell that focuses the minds of the demonologist and their party, granting a chance on successful attacks to increase their physical damage. Each party member affected also increases the demonologist's magic damage.")),
new Feat(101700, 2, 4, 6, 35, 1, [4,5],
    new FeatDescription("Spell - Unholy Hate",
    	   [],
    	   "Grants the demonologist an incantation that increases the physical and magical damage inflicted by all team members.")),
new Feat(100500, 2, 5, 2, 36, 1, null,
    new FeatDescription("Spell - Living Firestorm",
    	   [],
    	   "Grants a ground targeted fire spell which leaves a field of flames that inflicts fire damage on anyone in the area.")),
new Feat(101400, 2, 5, 4, 32, 3, [5,5],
    new FeatDescription("Backdraft",
    	   [{s:[33,66,100], suf:'%', t:"Chance to knockback on Detonation"},
           {s:[5,10,15], suf:'%', t:"Increase Pel Splash Damage"}],
    	   "Empowers the spell of demonic servants with additional splash damage and adds a chance to knock back targets affected by the Detonation spell. The distance of the knockbakc increases based on the number of Incinerate effects running on the target.")),
new Feat(101800, 2, 5, 5, 38, 1, null,
    new FeatDescription("Spell - Detonation",
    	   [],
    	   "Grants a spell that converts the lingering Incinerate effect into instant fire damage that affects all enemies near the target. The damage of this spell is increased by 25% per additional Incinerate effect running on the target. If the target is a Minion it is instantly slain.")),
new Feat(104800, 2, 6, 2, 39, 5, null,
    new FeatDescription("Improved Waves of Flame",
    	   [{s:[1,2,3,4,5], suf:'%', t:"Spell Critical Chance on Waves of Flame"},
           {s:[10,20,30,40,50], suf:'%', t:"Chance to apply Incinerate on Waves of Flame"}],
    	   "By pouring in their own despicable willpower the demonologist increases the critical hit chance of the Waves of Flame spell. This also gives the spell a chance to apply Incinerate effect when causing damage.")),
new Feat(105400, 2, 6, 3, 40, 1, [6,2],
    new FeatDescription("Hellwave",
    	   [],
    	   "A critical spell strikes while channeling Waves of Flame, means their next Hellfire Stream will be cast for no Mana.")),
new Feat(105300, 2, 6, 5, 41, 2, null,
    new FeatDescription("Combustion",
    	   [{s:[-0.5,-1], suf:'s', t:"Decrease to Casting Time on Hellfire Stream"},
           {s:[0.5,1], suf:'s', t:"Increase to Recast Time on Hellfire Stream"}],
    	   "Lowers the casting time of Hellfire Stream but increases its recharge time.")),
new Feat(102100, 2, 6, 6, 42, 2, null,
    new FeatDescription("Black Ashes",
    	   [],
    	   "Enhances the Inferno of Amher spell by inflicting a damage reduction penalty on nearby enemies and by giving the spell a chance (50/100%) to apply the Incinerate effect. Investing feat points increases the damage reduction penalty and its area of effect.")),
new Feat(102200, 2, 7, 1, 43, 5, null,
    new FeatDescription("Hell's Pavise",
    	   [],
    	   "Each rank increases the strength of the Soul Spikes damage shield cast by the sorcerer's Demon Avenger servant.")),
new Feat(104700, 2, 7, 2, 44, 5, null,
    new FeatDescription("Blessing of Amher",
    	   [{s:[-0.3,-0.5,-0.8,-1,-1.3], suf:'s', t:"Modify Recast Time"},
           {s:[2.5,5,7.5,10,15], suf:'%', t:"Increase to damage or healing on Inferno of Amher"}],
    	   "Increases the damage of Inferno of Amher and reduces the recast time.")),
new Feat(100600, 2, 7, 3, 51, 1, null,
    new FeatDescription("Spell - Greater Flames",
    	   [],
    	   "Grants a spell that increases the damage inflicted by the next Fires of Gehenna spell and allows it to apply an extra Incinerate effect, although it also increases the casting time.")),
new Feat(102000, 2, 7, 5, 46, 5, null,
    new FeatDescription("Spell - Flame Body",
    	   [{s:[0,-0.3,-0.5,-0.8,-1], suf:'s', t:"Decrease to Casting Time on Flame Body"}],
    	   "Grants a spell that increases the demonologist's fire spells and their fire resistance but makes them more suspectible to cold damage. Investing feat points increases both positive and negative effects and reduces the cast time of the spell.")),
new Feat(105200, 2, 7, 6, 47, 3, null,
    new FeatDescription("Agonizing Fiery Torment",
    	   [{s:[-0.1,-0.3,-0.5], suf:'s', t:"Decrease to Casting Time"},
           {s:[35,70,140], suf:'%', t:"Increase to damage or healing on Fiery Torment"}],
    	   "Increases the damage of the Fiery Torment spell and reduces the casting time.")),
new Feat(101100, 2, 8, 1, 55, 2, null,
    new FeatDescription("Hell's Blood",
    	   [],
    	   "Each rank increases the Regeneration Bonus received from the Vile Ambrosia incantation cast by the sorcerer's Demon Slave servant.")),
new Feat(101900, 2, 8, 2, 49, 5, [7,2],
    new FeatDescription("Spell - Gate of Hell",
    	   [{s:[0,7.5,15,22.5,30], suf:'%', t:"Increase to damage or healing on Gate of Hell"}],
    	   "Grants a spell that stuns a demon target, causes them to pulse fire damage, eventually inflicting fire damage on them. Non-demon targets are rooted, preventing movement and pulse fire damage.")),
new Feat(100900, 2, 8, 4, 50, 2, null,
    new FeatDescription("Phase Out",
    	   [{s:[-0.3,-0.5], suf:'s', t:"Decrease to Casting Time"},
           {s:[10,20], suf:'%', t:"Increase Evade Chance"},
           {s:[0,5], suf:'%', t:"Increase Damage Deflection"}],
    	   "The demonologist has walked in Hades, decreasing the casting time and increasing the bonuses of the Planar Shift spell.")),
new Feat(100700, 2, 8, 5, 45, 5, [7,5],
    new FeatDescription("Set's Chosen",
    	   [{s:[-20,-40,-60,-80,-100], suf:'%', t:"Decrease to damage or healing on Pacts"}],
    	   "<div class='small-title'>Affects:</div><ul><li>Archfiend's Pact</li><li>Bloody Pact with Set</li><li>Pact with Set</li></ul>Improves the Pact spells by reducing the amount of damage done to the demonologist.")),
new Feat(100800, 2, 8, 6, 52, 2, [8,5],
    new FeatDescription("Empowered Pacts",
    	   [{s:[2.5,5], suf:'s', t:"Duration on Pacts"}],
    	   "<div class='small-title'>Affects</div><ul><li>Archfiend's Pact</li><li>Bloody Pact with Set</li><li>Pact with Set</li></ul>Increases the duration of the demonologist's Pact spells.")),
new Feat(101200, 2, 9, 2, 53, 1, [8,2],
    new FeatDescription("Spell - Impish Horde",
    	   [],
    	   "Creates a breach in the walls of reality, through which are summoned 4-8 fire imps. Any demon servant already summoned will return to hell when this spell is cast. Additionally, when you cast Gate of Hell on a demon, there is a small chance that an imp will appear and obey your commands for a short period of time.")),
new Feat(102300, 2, 9, 5, 54, 1, [8,5],
    new FeatDescription("Spell - Let Them Burn",
    	   [],
    	   "Grants the demonologist the Let Them Burn spell, which channels fire at the target, burns any enemies nearby and applies the Incinerate effect. The flame's strength increase while channeling.")),
]};