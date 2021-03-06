var classFeats = function() {
return [

new Feat(50000, 1, 1, 3, 0, 5, null,
    new FeatDescription("Lacerate",
        [{s:[0,100,200,300,400],suf:'%',t:"Increase to damage or healing on Lacerate"}],
   	   "All the conqueror's attacks have a chance of inflicting a wound that bleeds for a short time. This effect can be applied up to 5 times.")),
new Feat(50800, 1, 2, 2, 19, 5, null,
    new FeatDescription("Improved Bloody Hack",
    	   [{s:[1,2,3,4,5],suf:'%',t:"Increase to Damage Per Second on Bloody Hack and Besiege"}],
    	   "Increases the damage per second of the Bloody Hack and Besiege combos.")),
new Feat(55200, 1, 2, 4, 2, 3, null,
    new FeatDescription("Ability - Annihilate",
        [],
   	   "This ability increases the critical strike chance of their next combo by 25/50/100%. 20 second duration.")),
new Feat(51300, 1, 2, 5, 3, 3, null,
    new FeatDescription("Fierce Opening",
        [{s:[30,45,75],suf:'%',t:"Increase to Damage Per Second on opening attack"}],
    	   "Increases the opening damage done by all combos.")),
new Feat(50200, 1, 3, 2, 4, 5, null,
    new FeatDescription("Offhand Precision",
    	   [{s:[2,4,6,8,10],suf:'%',t:"Chance of Offhand Attack"}],
    	   "Increases the chance of a dual-wielding conqueror performing an offhand attack when successfully damaging an enemy.")),
new Feat(51400, 1, 3, 5, 5, 5, null,
    new FeatDescription("Improved Discipline",
    	   [],
    	   "Increases the weapon damage bonus for all Disciplines.")),
new Feat(51500, 1, 3, 6, 6, 1, null,
    new FeatDescription("Fierce Inspirations",
    	   [{s:[-1.5],suf:'s',t:"Duration on Furious Inspiration"}],
    	   "Increases the rate of receiving a Furious Inspiration stack when inflicting melee damage or when struck by physical or magical attacks.")),
new Feat(50300, 1, 4, 2, 8, 5, null,
    new FeatDescription("Ability - Defiance",
        [{s:[0,25,50,75,100],suf:'%',t:"Increase to damage or healing on Defiance"}],
        "This ability restores health to all team members. You can only be affected by this ability once every 30 seconds.")),
new Feat(50400, 1, 4, 1, 7, 3, [4,2],
    new FeatDescription("Improved Defiance",
        [{s:[0,50,100],suf:'%',t:"Increase to damage or healing on Improved Defiance"}],
   	   "The conqueror's warrior spirit also restores stamina, energy and mana when using their Defiance ability.")),
new Feat(50500, 1, 4, 3, 9, 5, null,
    new FeatDescription("Rend and Tear",
    	   [{s:[5,10,15,20,25],suf:'%',t:"Increase to damage or healing on Bloodbath"}],
    	   "Increases the bleeding damage inflicted by the Bloodbath combos.")),
new Feat(51600, 1, 4, 5, 10, 1, null,
    new FeatDescription("War Lord",
    	   [],
    	   "A permanent ability that increases the Mana and Stamina renewal rates and out of combat movement speed of the conqueror and their allies.")),
new Feat(50900, 1, 5, 2, 18, 1, null,
    new FeatDescription("Crippling Bloody Hack",
    	   [],
    	   "Improves the Bloody Hack combos by also decreasing the target's movement speed by 35% for 10 seconds.")),
new Feat(53000, 1, 5, 4, 28, 5, null,
    new FeatDescription("Deep Wounds",
    	   [],
    	   "The conqueror's attacks have a chance of inflicting a bleeding wound on their target. This effect can stack up to 3 times.")),
new Feat(51800, 1, 5, 5, 13, 1, null,
    new FeatDescription("Bloodlust",
    	   [],
    	   "Performing the Breach combo increases the damage of the next Bloody Hack, Bloodbath, Whirlwind or Hail of Furious Strikes combo finisher by 25%.")),
new Feat(50700, 1, 6, 2, 25, 3, null,
    new FeatDescription("Resolute Advance",
    	   [{s:[10,20,30],suf:'%',t:"resistance to Root"}],
    	   "Increases the conqueror's resistance to Root effects. Also, activating the Charge ability removes most Root effect from the conqueror and provides 6 seconds of Root Immunity after removal.")),
new Feat(52300, 1, 6, 4, 15, 1, null,
    new FeatDescription("Fleet of Foot",
    	   [],
    	   "Refreshes the cooldown of the Charge ability when the conqueror or their allies perform a killing blow.")),
new Feat(51900, 1, 6, 5, 16, 3, null,
    new FeatDescription("Ability - Rend Flesh",
        [{s:[0,100,200],suf:'%',t:"Increase to damage or healing on Rend Flesh"}],
   	    "Grants the conqueror an ability which empowers their attacks for a short time, inflicting a bleeding wound on each target struck. Each strike costs the conqueror stamina.")),
new Feat(52000, 1, 6, 6, 17, 5, [6,5],
    new FeatDescription("Improved Rend",
    	[{s:[0,100,200,300,400],suf:'%',t:"Increase to damage or healing on Improved Rend"}],
    	"Augments the Rend Flesh feat by adding slashing damage to each bleeding wound, but increases the stamina cost.")),
new Feat(50600, 1, 7, 1, 12, 1, null,
    new FeatDescription("Ability - Bladeweave",
   	   [],
    	"Grants an ability that increases the conqueror's offhand chance and critical hit chance.")),
new Feat(50100, 1, 7, 2, 1, 5, null,
    new FeatDescription("Berserk Inspiration",
    	   [],
    	   "Grants the conqueror increased Hit Rating and Offhand Chance when Furious Inspiration triggers from physical or magical attacks.")),
new Feat(52100, 1, 7, 4, 20, 2, null,
    new FeatDescription("Ability - Cunning",
    	   [{s:[1,2],suf:'%',t:"Spell Critical Chance on Deep Wounds, Rend Flesh, Improved Rend and Lacerate"}],
    	   "Increases the critical chance of Deep Wounds, Rend Flesh, Improved Rend Flesh and Lacerate. Also grants the conqueror an ability which lowers the hate generated by their attacks by 2/5%.")),
new Feat(55400, 1, 7, 5, 24, 5, null,
    new FeatDescription("Lightning Steel",
    	   [],
    	   "The conqueror's offhand attacks have a chance to trigger an increase in damage. Once gained, successful offhand attacks will refresh the duration of this bonus and have a 5/10/15/20/25% chance to refresh the duration of the Bladeweave effect.")),
new Feat(53400, 1, 8, 2, 22, 5, [7,2],
    new FeatDescription("Art of War",
    	   [],
    	   "The conqueror's Critical Hits have a 20/40/60/80/100% chance of increasing their damage. This effect can stack up to 10 times.")),
new Feat(55500, 1, 8, 3, 12, 2, [8,2],
    new FeatDescription("Hemorrhage",
    	   [],
    	   "While Art of War is active, damage caused by Deep Wounds, Lacerate, Rend Flesh and Bloodbath is increased by 7.5/15%.")),
new Feat(52200, 1, 8, 5, 21, 5, [7,5],
    new FeatDescription("Grievous Wounds",
    	   [{s:[1,2,3,4,5],suf:'%',t:"Critical Bonus Damage"}],
    	   "Increases the damage done by the conqueror's Critical Hits.<br/><br/> Additionally, the stamina cost of Rend Flesh is reduced by 5/10/15/20/25% for every target currently affected by Bloodbath damage over time effect.")),
new Feat(51200, 1, 8, 6, 23, 1, [6,6],
    new FeatDescription("Reaping Blade",
    	   [{s:[5],suf:'s',t:"Duration on Rend Flesh"},
           {s:[5],suf:'%',t:"Increase to damage or healing"}],
    	   "Increases the duration of the Rend Flesh ability by and increases the power of the damage over time effects of Bloodbath, Deep Wounds and Lacerate")),
new Feat(51000, 1, 9, 2, 26, 1, [8,2],
    new FeatDescription("Ability - Flashing Defense",
    	   [],
    	   "Reduces the cooldown of the Rend Flesh ability and grants an ability which increases the conqueror's Evade Chance by 100% for 8 seconds. Activating this ability applies the Fighting Spirit effect. This ability cannot be activated if Fighting Spirit is currently active.")),
new Feat(52400, 1, 9, 5, 27, 1, [8,5],
    new FeatDescription("Combo - Whirlwind",
    	   [],
    	   "Reduces the cooldown of the Rend Flesh ability and grants the Whirlwind combo attack that lashes out at all nearby enemies.The strikes have a 17.5% higher chance of critically injuring victims and will affect foes with the Deep Wounds bleed, if the feat is trained. Also, performing this combo increases the damage of the next Whirlwind combo and the damage of the bleed effect from Bloodbath combo. This damage increase can stack up to 5 times.")),
new Feat(52500, 2, 1, 3, 29, 5, null,
    new FeatDescription("Blessed Blade",
    	   [],
    	   "The Bloody Hack and Hail of Furious Strikes combos have a chance of granting the conqueror the Blessed Blade effect. Blessed Blade causes the next 3 attacks to heal the conqueror for 1% of their maximum health. This effect can only occur once once every 15 seconds. Investing feat points increases the chance of gaining the Blessed Blade effect.")),
new Feat(52600, 2, 2, 2, 30, 5, null,
    new FeatDescription("Ruthless Assault",
    	   [],
    	   "The conqueror's critical attacks grant him an increase in Critical Rating for a short time. This effect can only occur once every 15 seconds. Investing feat points increases the Critical Rating bonus from 1% to 5%.")),
new Feat(53600, 2, 2, 4, 31, 3, null,
    new FeatDescription("Ability - Lumbering Hulk",
    	   [],
    	   "Grants the conqueror an ability which increases life regeneration and damage inflicted by attacks but reduces movement speed. While active the conqueror is immune to most snare effects and all existing snare effects are removed.")),
new Feat(57800, 2, 2, 5, 56, 2, null,
    new FeatDescription("Ability - Retaliation",
    	   [],
    	   "Grants the conqueror an ability which generates a high amount of threat on the closest four enemies. For a short time afterward, any enemies attacking the conqueror will be damaged. Investing another feat point increases the power of this damage shield.")),
new Feat(53800, 2, 3, 2, 34, 5, null,
    new FeatDescription("Devastate",
        [{s:[1,2,3,4,5],suf:'%',t:"Increase to Damage Per Second on Besiege and Hail of Furious Strike"},
        {s:[9,18,27,36,45],suf:'%',t:"Increase to Damage Per Second on Batter Aside"}],
    	"Increases the damage of the Hail of Furious Strikes and Batter Aside combos.")),
new Feat(53300, 2, 3, 5, 32, 5, [2,5],
    new FeatDescription("Improved Retaliation",
        [{s:[0.8,1.6,2.4,3.2,4],suf:'',t:"Duration on Retaliation"}],
   	   "Increases the duration and retributive damage of Retaliation. Each point invested also increases the amount of hate generated when Guard of Dancing Steel is running.")),
new Feat(54600, 2, 4, 1, 35, 1, null,
    new FeatDescription("Combo - Throat Slash",
    	   [],
    	   "This swift combo interrupts any spellcasting or combos in progress.")),
new Feat(53700, 2, 4, 3, 39, 5, null,
    new FeatDescription("Power Feint",
    	   [{s:[5,10,15,20,25],suf:'%',t:"Increase to Damage Per Second on Feint Attack"}],
    	   "Increases the damage done by all two-handed Feint Attack combos.")),
new Feat(54700, 2, 4, 4, 37, 3, [2,4],
    new FeatDescription("Improved Lumbering Hulk",
        [],
   	   "Increases the rate of life regeneration, damage done by the conqueror's attacks and reduces the Snare Effect applied when Lumbering Hulk is active.")),
new Feat(54000, 2, 4, 5, 38, 1, null,
    new FeatDescription("Ability - Burst of Aggression",
    	   [],
    	   "This ability knocks away enemies in an area around the conqueror. For a short time after use, all attacks will generate 10% more hate.<br/><br/>The knock back effect will not apply to crows control combos.")),
new Feat(54500, 2, 4, 6, 50, 1, null,
    new FeatDescription("Angel of Fury",
    	   [{s:[-1.5],suf:'s',t:"Duration on Furious Inspiration"}],
    	   "Increases the rate of receiving a Furious Inspiration stack when doing melee damage or when struck by physical or magical attacks.")),
new Feat(53100, 2, 5, 2, 40, 1, null,
    new FeatDescription("Ability - Crushing Onslaught",
    	   [],
    	   "Grants the conqueror an ability which empowers the next melee attack so it reduces the target's movement speed by 60% and damage done by their attacks and spells by 25%. 6 second duration.")),
new Feat(55100, 2, 5, 4, 41, 1, null,
    new FeatDescription("Ability - Heroic Call",
    	   [],
    	   "Grants the conqueror an ability which plants a banner in the ground, providing a team-wide damage bonus. 12 second duration.")),
new Feat(54100, 2, 5, 5, 42, 1, [4,5],
    new FeatDescription("Remorseless Aggression",
    	   [],
    	   "Refreshes the cooldown on the Burst of Aggression ability when the conqueror or their allies perform a killing blow. Also reduces the casting time of Burst of Aggression by 0.5s.")),
new Feat(53200, 2, 6, 1, 45, 3, [4,1],
    new FeatDescription("Improved Throat Slash",
        [{s:[15,30,50],suf:'%',t:"Spell Critical Damage on Guard of Dancing Steel"},
        {s:[1,2,3],suf:'s',t:"Duration on Throat Slash"}],
   	   "Increases the duration of the Silence effect caused by Throat Slash combo and increases the critical damage dealt by Guard of Dancing Steel's retaliatory strikes.")),
new Feat(52800, 2, 6, 2, 44, 5, null,
    new FeatDescription("Furious Strikes",
        [{s:[-0.8,-1.6,-2.4,-3.2,-4],suf:'s',t:"Decrease to cooldown time on Besiege and Hail of Furious Strikes"}],
    	"Reduces the cooldown of the Hail of Furious Strikes combo and causes the Feint Attack combo to have a chance of granting the Furious Strikes effect. Furious Strikes increases the your Critical Rating. Investing feat points improves the cooldown reduction and Critical Rating bonus.")),
new Feat(54200, 2, 6, 4, 46, 3, [5,4],
    new FeatDescription("Legendary Heroic Call",
        [],
   	   "Improves the Heroic Call ability by adding a life regeneration effect and bonus magic damage. It will also increment soldier's Sadism, Vengeance or Furious Inspiration counters.")),
new Feat(53900, 2, 6, 5, 33, 5, null,
    new FeatDescription("Improved Furious Inspiration",
        [],
   	   "Grant the conqueror increased Hit Rating and Critical Damage Rating when Furious Inspiration triggers from physical or magical attacks. In addition this feat increases the amount of health, mana and stamina allies receive after being resurrected by the Furious Resurgence and Resurgence abilities.")),
new Feat(52700, 2, 7, 2, 48, 5, null,
    new FeatDescription("Improved Formations",
    	   [],
    	   "Increases the weapon damage bonus from all formations")),
new Feat(52900, 2, 7, 3, 43, 1, null,
    new FeatDescription("Scourge",
    	   [{s:[10],suf:'%',t:"Spell Critical Chance on Guard of Dancing Steel"}],
    	   "Increases the critical chance of retaliatory strikes from Guard of Dancing Steel.")),
new Feat(54400, 2, 7, 5, 49, 5, null,
    new FeatDescription("Mocking Sneer",
    	   [{s:[1,2,3,4,5],suf:'%',t:"Hate Modifier"}],
    	   "All the conqueror's attacks are substantially more threatening and, in addition, foes affected by most of the conqueror's combos will grant the conqueror a damage bonus when attacking (20% Weapon Damage for 6s). This works for both physical and magical attacks.")),
new Feat(51100, 2, 8, 2, 51, 5, [7,2],
    new FeatDescription("Improved Dancing Steel",
        [{s:[8,16,24,32,40],suf:'%',t:"Increase to damage or healing on Guard of Dancing Steel"},
        {s:[2,4,6,8,10],suf:'%',t:"Increase to Damage Per Second on Guard of Dancing Steel"}],
    	"Increases the damage and frequency of the conqueror's retaliatory strikes when Guard of Dancing Steel combo is active. Investing feat points increases both damage and frequency.<br/><br/> At rank 5 the retaliatory strikes can also trigger from the conqueror's attacks.")),
new Feat(55600, 2, 8, 3, 52, 2, null,
    new FeatDescription("Impervious Defense",
    	   [{s:[3,6],suf:'%',t:"Bonus Armor"}],
    	   "Increases the Armor the conqueror gains from items.")),
new Feat(54300, 2, 8, 4, 47, 3, null,
    new FeatDescription("At Death's Door",
    	   [],
    	   "When falling below 35% health, the conqueror gains 6/12/18% damage deflection for 10 seconds. This effect cannot occur more than once every 50 seconds.")),
new Feat(55300, 2, 8, 5, 53, 5, [7,5],
    new FeatDescription("Colossus of War",
    	   [{s:[3,6,9,12,15],suf:'%',t:"Weapon Damage (Melee)"}],
    	   "Passively increases the conqueror's weapon damage and increases the damage bonus from Mocking Sneer.")),
new Feat(53500, 2, 9, 2, 54, 1, [8,2],
    new FeatDescription("Ability - Overcome the Odds",
    	   [],
    	   "Grants an ability that causes physical attacks to heal the conqueror and applies the Fighting Spirit effect. When activated, this ability refreshes the cooldown on the Retaliation ability. This ability cannot be activated if Fighting Spirit is currently active.")),
new Feat(54800, 2, 9, 5, 55, 1, [8,5],
    new FeatDescription("Ability - Blessed Conquest",
    	   [],
    	   "Grants the conqueror an ability that makes them invulnerable for a brief time and applies the Fighting Spirit effect. This ability cannot be activated if Fighting Spirit is currently active."))
]};