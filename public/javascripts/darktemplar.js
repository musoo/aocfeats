var classFeats = function() {
return [

new Feat(70000, 1, 1, 3, 17, 5, null,
    new FeatDescription("Devouring Touch",
    	   [{s:[1.5,2,2.5,3,4], suf:'%', t:"Physical Health Tap"}],
    	   "Converts part of the damage inflicted by the dark templar into healing.")),
new Feat(70400, 1, 2, 2, 0, 5, null,
    new FeatDescription("Crystallized Ether",
        [{s:[26.3,33.3,40,46.6,53.3], suf:'', t:"Non Combat Mana Regen"},
        {s:[21.1,27.7,34.7,41.3,55], suf:'', t:"Natural Mana Regen"},
        {s:[0,12.5,25,37.5,50], suf:'%', t:"Increase to damage or healing on Crystallized Chaos"}],
   	   "Increases the rate of all mana regeneration and adds the Crystallized Chaos effect to the Seal of Chaos spell. Crystallized Chaos restores mana over time to the templar for each target affected.")),
new Feat(72900, 1, 2, 4, 2, 3, null,
    new FeatDescription("Consuming Bulwark",
        [{s:[0,15,30], suf:'%', t:"Increase to damage or healing on Consuming Chaos"},
        {s:[0,100,300], suf:'%', t:"Increase to damage or healing on Consuming Bulwark"}],
    	"Improves the Defensive Stance by adding a chance to steal life from anyone that strikes the templar and adds the Comsuming Chaos effect to the Seal of Chaos spell. Consuming Chaos restores health over time to the templar for each target affected.")),
new Feat(71300, 1, 2, 5, 13, 5, null,
    new FeatDescription("Vigor Leech",
        [{s:[1.5,2.4,3.3,4.3,6.1], suf:'%', t:"Physical Stamina Tap"}],
   	   "Converts some of the damage inflicted by the dark templar into stamina.")),
new Feat(72600, 1, 3, 2, 4, 5, null,
    new FeatDescription("Devourer's Might",
        [{s:[1,2,3,4,5], suf:'%', t:"Increase to Damage Per Second on Leech Life"},
        {s:[3,6,9,12,15], suf:'%', t:"Increase to Damage Per Second A Soul for our Feast"}],
    	"Improves the damage done by the A Soul for our Feast and Leech Life combos.")),
new Feat(71600, 1, 3, 3, 14, 5, null,
    new FeatDescription("Improved Martyrdom",
        [{s:[0,50,100,150,200], suf:'%', t:"Increase to damage or healing on Exhilarating Martyrdom"}],
    	   "Enhances the Martyrdom spell by restoring mana, stamina and health to team members.")),
new Feat(70100, 1, 3, 5, 19, 1, [2,5],
    new FeatDescription("Ether Leech",
        [{s:[6.1], suf:'%', t:"Physical Mana Tap"}],
    	   "Converts some of the damage inflicted by the dark templar into mana.")),
new Feat(70900, 1, 4, 1, 1, 5, null,
    new FeatDescription("Spell - Dark Hand",
        [{s:[0,100,200,300,400], suf:'%', t:"Increase to damage and healing on Dark Hand"}],
    	   "Grants the dark templar a spell which inflicts damage on their target and heals the templar. This spell inflicts more damage against foes affected by Drain Strength and the healing effect is greatly increases while Blood Pacts is active.")),
new Feat(73300, 1, 4, 4, 5, 1, [4,5],
    new FeatDescription("Incinerate Ether",
    	   [],
    	   "Improves the Mystical Bane combo by inflicting half the amount of unholy damage, in addition to mana damage.")),
new Feat(73200, 1, 4, 5, 6, 3, null,
    new FeatDescription("Dissipate Ether",
    	   [],
    	   "Improves the Mystical Bane combos by inflicting additional mana damage. Each additional feat point increases this damage by 20%")),
new Feat(73100, 1, 4, 6, 20, 3, null,
    new FeatDescription("Ability - Soul Barrier",
        [],
    	   "Grants an ability that protects the dark templar. While active, a portion of the damage inflicted on them is turned into mana damage, at ratio of 2/1.76/1.33 for every 1 damage absorbed.")),
new Feat(71000, 1, 5, 2, 8, 1, null,
    new FeatDescription("Spell - Seal of Chaos",
    	   [],
    	   "Grants the templar a spell which generates a high amount of Hate on the four closest targets. After activating this spell, the templar receives more healing from all sources and may cast Martyrdom spell instantly. The healing bonus increases with the number of targets affected by this spell.")),
new Feat(72700, 1, 5, 4, 3, 5, [4,4],
    new FeatDescription("Ether Reap",
        [{s:[0,50,100,150,300], suf:'%', t:"Increase to damage or healing on Ether Reap"},
        {s:[0,100,200,300,400], suf:'%', t:"Increase to damage or healing on Reaping Chaos"}],
   	   "After striking with a Mystical Bane combo, for a brief time the templar's attacks have a chance of triggering a Mana Restoration effect on themselves. Adds the Reaping Chaos effect to the Seal of Chaos spell. Reaping Chaos deals damage over time to each target affected.")),
new Feat(72400, 1, 5, 5, 21, 1, null,
    new FeatDescription("Spell - Hex Marked Soul",
    	   [],
    	   "Grants the dark templar a spell which increases Protection by a large amount.")),
new Feat(74500, 1, 5, 6, 20, 1, [4,6],
    new FeatDescription("Soul Infusion",
    	   [],
    	   "Improves the Soul Barrier ability by allowing the templar to recover 10% of their Mana from hostile spells striking them. This effect cannot occur more than once every 10 seconds.")),
new Feat(73600, 1, 6, 1, 9, 1, [4,1],
    new FeatDescription("Fiendish Hand",
    	   [],
    	   "Empowers the Dark Hand spell, causing it to damage foes near the primary target.")),
new Feat(71700, 1, 6, 2, 27, 5, null,
    new FeatDescription("Invulnerable Soul",
    	   [],
    	   "Augments the Covenant of Invulnerability spell by adding Bonus Protection and granting 1 Invulnerable Soul charge. When struck by a magical attack, a charge is converted into an Arcane Seal - up to a maximum of 10 Seals. Invulnerable Soul charges will reset to the full amount 10 seconds after the previous charge was converted into a Seal.")),
new Feat(72200, 1, 6, 5, 22, 5, null,
    new FeatDescription("Solid Pestilence",
    	   [],
    	   "Augments the Covenant of Pestilence spell by adding Armor and causing the templar to gain up to 4 Blood Seals when attacked. These Seals can be consumed by the Seal of Yog spell.")),
new Feat(73000, 1, 7, 2, 15, 5, null,
    new FeatDescription("Improved Infusion",
        [{s:[0,100,200,300,400], suf:'%', t:"Increase to healing on Improved Infusion"}],
    	   "Enhances the Aura of Infusion spell by adding a team-wide healing effect.")),
new Feat(75300, 1, 7, 3, 18, 1, null,
    new FeatDescription("Ability - Curse of Gwahlur",
    	   [],
    	   "Grants an ability which, while active, causes physical attackers to be cursed to suffer unholy damage and constantly feed health to the templar. The damage inflicted by this curse causes a high amount of hate. Effect can be applied 3 times on an attacker. Each curse increases the damage of all other Curse of Gwahlur effects on enemies.")),
new Feat(75400, 1, 7, 4, 7, 1, [7,5],
    new FeatDescription("Vile Gluttony",
    	   [],
    	   "Causes your Zone of Gluttony to inflict damage.")),
new Feat(74700, 1, 7, 5, 24, 5, null,
    new FeatDescription("Cabalistic Hunger",
        [{s:[0.5,1,1.5,2,2.5], suf:'%', t:"Magical Health Tap"}],
    	"Converts part of the damage inflicted by spells into life for the dark templar. Also, Leech Life combos has a 20/40/60/80/100% chance of creating a Zone of Gluttony when used. Zone of Gluttony increases your Magical Health Tap by 7.5%.")),
new Feat(72000, 1, 8, 2, 10, 5, [7,2],
    new FeatDescription("Masochism",
        [],
    	   "Provides a 2/4/6/8/10% chance of adding to the Sadism counter whenever the dark templar takes damage.")),
new Feat(73500, 1, 8, 3, 11, 1, null,
    new FeatDescription("Combo - Mind Shatter",
    	   [],
    	   "The templar focuses their unnatural aura and blasts it at enemies around them in a stunning, mind-shattering blast.")),
new Feat(71800, 1, 8, 5, 26, 5, [7,5],
    new FeatDescription("Improved Blood Pact",
    	   [{s:[-30,-60, -90,-120,-180], suf:'%', t:"Modify recast time on Blood Pact"}],
    	   "Reduces the recast time of the Blood Pact spell.")),
new Feat(74400, 1, 8, 6, 12, 1, null,
    new FeatDescription("Drain Strength",
    	   [],
    	   "Improves all the dark templar's combos with a chance of reducing the target's strength.")),
new Feat(70600, 1, 9, 2, 28, 1, [8,2],
    new FeatDescription("Combo - Warped Dread",
    	   [],
    	   "Forms a shield around the templar, causing damage to attackers. This shield also warps the real world so enemy attacks are more likely to miss. This miss effect can only be applied once every 15 seconds.")),
new Feat(71500, 1, 9, 5, 16, 1, [8,5],
    new FeatDescription("Spell - Dread Shadow",
    	   [],
    	   "Grants the dark templar a spell which summons a shadow beast to fight alongside him for 15 seconds. The dread shadow also applies a Spiritual Ruin debuff on its target.")),
new Feat(70700, 2, 1, 3, 29, 5, null,
    new FeatDescription("Blighted Touch",
        [{s:[0,5,10,15,30], suf:'%', t:"Increase to damage or healing on Blighted Touch"}],
    	"Grants all the templar's attacks a chance of inflicting unholy damage.")),
new Feat(70800, 2, 2, 2, 30, 5, null,
    new FeatDescription("Blighted Soul",
        [{s:[0,20,40,60,100], suf:'%', t:"Increase to damage or healing on Blighted Soul"}],
    	   "Improves Blighted Touch, inflicting unholy damage to all nearby enemies whenever Blighted Touch is triggered.")),
new Feat(72800, 2, 2, 4, 31, 3, null,
    new FeatDescription("Devouring Blood Frenzy",
        [{s:[0,100,300], suf:'%', t:"Increase to damage or healing on Devouring Blood Frenzy"}],
    	   "Improves the Frenzy stance by adding a chance to convert some of the blood spilled into life for the dark templar.")),
new Feat(74800, 2, 2, 5, 45, 5, null,
    new FeatDescription("Spell - Covenant of Arms",
    	   [{s:[0,20,25.5,31,42], suf:'%', t:"Increase to damage or healing on Covenant of Arms"}],
    	   "Grants all the templar's attacks a chance of inflicting unholy damage. Additonal ranks increase the rate of the unholy damage effect.")),
new Feat(75500, 2, 3, 1, 32, 5, null,
    new FeatDescription("Ability - Pact of Malacodor",
        [{s:[0,10,20,30,50], suf:'%', t:"Increase to damage or healing on Malacodor's Blight"}],
    	   "Grants an ability which, while active, causes all melee attacks to inflict additional unholy damage. Each successful attack costs the dark templar a portion of his Mana.")),
new Feat(72500, 2, 3, 3, 37, 5, null,
    new FeatDescription("Hexer's Might",
    	   [{s:[1,2,3,4,5], suf:'%', t:"Increase to Damage Per Second on Blood for Aid and Crimson Succor"}],
    	   "Witchcraft empowers the templar and improves the damage inflicted by the Blood for Aid and Crimson Succor.")),
new Feat(74900, 2, 3, 5, 49, 1, [2,5],
    new FeatDescription("Approach of Death",
    	   [],
    	   "Improves the Covenant of Arms spell to inflict additional damage the closer the target is to death.")),
new Feat(70500, 2, 4, 2, 51, 1, null,
    new FeatDescription("Sacrificial Fury",
    	   [],
    	   "The templar's demon patrons bestow even more power, casting the Martyrdom spell also increases the damage inflicted by the templar's attacks.")),
new Feat(71200, 2, 4, 4, 46, 5, null,
    new FeatDescription("Talisman Mastery",
        [],
    	   "Grants the Shadow Hex and Blood Hex spells. These spells may only be used while wielding a talisman. Also, wielding a talisman improves unholy magic damage and the damage dealt by the Covenant of Arms spell. Investing feat points increases these two effects and the power of the Hex spells.")),
new Feat(73800, 2, 4, 6, 47, 2, null,
    new FeatDescription("Corrupt Weapon",
        [{s:[0,25], suf:'%', t:"Increase to damage or healing on Corruption"}],
    	   "Grants all melee attacks a chance of inflicting a lingering wound that deals unholy damage for a short time.")),
new Feat(75900, 2, 5, 1, 35, 1, [3,1],
    new FeatDescription("Reaper of Malacodor",
    	   [],
    	   "Improves the Pact of Malacodor ability by causing the unholy damage dealt to become area of effect unholy damage, affecting up to two enemies near the primary target.")),
new Feat(70200, 2, 5, 2, 50, 1, null,
    new FeatDescription("Improved Soul Covenants",
    	   [],
    	   "Increases the frequency of Covenant of Arms and Covenant of Vengeance effects being triggered.")),
new Feat(74000, 2, 5, 3, 33, 2, null,
    new FeatDescription("Spell - Dark Burden",
        [{s:[0,-15], suf:'s', t:"Modify recast on Dark Burden"},
        {s:[0, 4], suf:'s', t:"Duration on Dark Burden"}],
   	   "A quick spell that inflicts wracking pain, slowing target's movement speed.")),
new Feat(71400, 2, 5, 5, 34, 1, null,
    new FeatDescription("Dread Lord",
        [{s:[-6], suf:'s', t:"Decrease to cooldown time on A Soul for out Feast and Dooming Presence"},
        {s:[-5], suf:'s', t:"Decrease to cooldown time on Mind Shatter and Warped Dread"},
        {s:[-4], suf:'s', t:"Decrease to cooldown time on Mind Wrack"},
        {s:[-3], suf:'s', t:"Decrease to cooldown time on Mystical Bane"},
        {s:[-2], suf:'s', t:"Decrease to cooldown time on Unhallowed Blight"},
        {s:[-1], suf:'s', t:"Decrease to cooldown time on Blood for Aid, Crimson Succor, Death Lord, Leech Life"}],
    	   "Reduces the reuse time of all combos.")),
new Feat(73700, 2, 6, 3, 48, 5, null,
    new FeatDescription("Improved Dread Fury",
    	   [],
    	   "Increases the chances of Aura of Dread Fury inflicting unholy damage and converts a fraction of any magical damage inflicted into healing. Investing feat points increases these two effects.")),
new Feat(72100, 2, 6, 4, 40, 5, [4,4],
    new FeatDescription("Shadowed Blade",
    	   [],
    	   "Grants the templar's attacks a chance to trigger the Shadow Hex effect if a talisman is equipped. Enemies damaged by this effect will not receive the Hexed debuff.")),
new Feat(76000, 2, 7, 2, 57, 5, null,
    new FeatDescription("Blooded Weapons",
        [{s:[75,150,225,300,375], suf:'', t:"Combat Rating (Unholy)"},
        {s:[92,185,277,369,461], suf:'', t:"Spell Penetration"}],
    	   "Increases the unholy damage dealt by the templar's melee attacks and allows part of the magic damage dealt to bypass enemy defenses.")),
new Feat(71900, 2, 7, 3, 52, 3, null,
    new FeatDescription("Desecrated Blood",
        [{s:[2.5,5,7.5], suf:'%', t:"Increase critical chance of finishing attack on Blood for Aid and Crimson Succor"}],
    	   "Improves the Blood for Aid combo by increasing the chance of inflicting a critical injury.")),
new Feat(74100, 2, 7, 5, 38, 5, null,
    new FeatDescription("Touch of Death",
        [{s:[0,100,200,300,400], suf:'%', t:"Increase to damage or healing on Touch of Death"}],
    	   "Performing the A Soul for our Feast combo empowers the next Blood for Aid combo with additional unholy damage.")),
new Feat(74200, 2, 7, 6, 39, 1, [7,5],
    new FeatDescription("Air of Death",
    	   [],
    	   "Improves Touch of Death by causing foes near the target to suffer additional unholy damage.")),
new Feat(75000, 2, 8, 2, 54, 5, [7,2],
    new FeatDescription("Unholy Empowerment",
        [{s:[15,30,45,60,75], suf:'%', t:"Spell critical damage"}],
    	   "Increases the critical damage dealt by many of the dark templar's unholy damaging effects.")),
new Feat(73900, 2, 8, 3, 53, 2, null,
    new FeatDescription("Ability - Ritualistic Bloodshed",
    	   [],
    	   "Grants an ability which increases the templar's Sadism counter but inflicts a small portion of Mana drain, which increases by 2% for each rank of Sadism. Investing feat points reduces the 20 seconds reuse time by 50%.")),
new Feat(75100, 2, 8, 4, 55, 1, [6,4],
    new FeatDescription("Spreading Shadows",
    	   [],
    	   "Empowers the Shadow Hex spell, causing it to damage foes near the primary target.")),
new Feat(74300, 2, 8, 5, 41, 5, [7,5],
    new FeatDescription("Unholy Strength",
    	   [{s:[2,4,6,8,10], suf:'%', t:"Increase to Damage Per Second"}],
    	   "Increases the damage done by all the dark templar's innate combo lines.")),
new Feat(70300, 2, 9, 2, 56, 1, [8,2],
    new FeatDescription("Combo - Dooming Presence",
    	   [],
    	   "Summons a terrifying cloud of Fear in an area around the templar.")),
new Feat(71100, 2, 9, 5, 42, 1, [8,5],
    new FeatDescription("Ability - Shadowed Soul",
    	   [],
    	   "Grants an ability that transforms the templar into a shadow. While active, the templar is immune to snare, root and fear effects; hexes become more powerful, and attacks cause additional unholy damage."))
]};