Planner.skillDataAddon[Planner.data.classes.Cid.id] = {
    version: 0.052,
    skills: {
        // ----------- Stats
        "G": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GoldMultiplier,
            value: 0.1
        },
        "Cc": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.CritChance,
            value: 2
        },
        "Cd": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.CritDamageMultiplier,
            value: 0.2
        },
        "H": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.HasteMultiplier,
            value: 0.05
        },
        "Gc": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.ClickableGoldMultiplier,
            value: 0.5
        },
        "Cl": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.ClickDamageMultiplier,
            value: 0.1
        },
        "Gb": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.BossGoldMultiplier,
            value: 1
        },
        "Ir": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.ItemCostMultiplier,
            value: -0.08
        },
        "Mt": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.TotalMana,
            value: 25
        },
        "Mr": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.ManaRegenerationMultiplier,
            value: 0.1
        },
        "En": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.TotalEnergy,
            value: 25
        },
        "Gp": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.ClickableGoldFrequencyMultiplier,
            value: 0.1
        },
        "Bg": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.BonusGoldChance,
            value: 2
        },
        "Tc": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.TreasureChestChance,
            value: 2
        },
        "Tg": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.TreasureChestGoldMultiplier,
            value: 0.25
        },
        "I1": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearWeaponMultiplier,
            value: 0.5
        },
        "I2": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearHelmetMultiplier,
            value: 0.5
        },
        "I3": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearChestMultiplier,
            value: 0.5
        },
        "I4": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearRingMultiplier,
            value: 0.5
        },
        "I5": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearPantsMultiplier,
            value: 0.5
        },
        "I6": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearGloveMultiplier,
            value: 0.5
        },
        "I7": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearBootsMultiplier,
            value: 0.5
        },
        "I8": {
            category: Planner.data.skillCategories.minorStat,
            stat: Planner.data.stats.GearCapeMultiplier,
            value: 0.5
        },
        // ----------- Skills
        "T3": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.MultiClick
        },
        "T1": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.BigClicks
        },
        "T2": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.Energize
        },
        "T5": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.HugeClick
        },
        "T4": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.ClickStorm
        },
        "T6": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.PowerSurge
        },
        "T7": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.ManaCrit
        },
        "T8": {
            category: Planner.data.skillCategories.skillUnlock,
            unlocks: Planner.data.skillUnlocks.Reload
        },
        // ----------- Skill Modifiers
        "Mu": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.MultiClickCount,
                    value: 3
                },
                {
                    target: Planner.data.skillModifiers.EnergyCost,
                    value: 1
                }
            ]
        },
        "Bc": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.BigClickCount,
                    value: 1
                }
            ]
        },
        "Bd": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.BigClickDamageMultiplier,
                    value: 0.25
                }
            ]
        },
        "Hd": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.HugeClickDamageMultiplier,
                    value: 0.25
                }
            ]
        },
        "Md": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.ManaClickDamageMultiplier,
                    value: 0.25
                }
            ]
        },
        "Kh": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.ClickStormCooldownMultiplier,
                    value: -0.2
                }
            ]
        },
        "Eh": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.EnergizeCooldownMultiplier,
                    value: -0.2
                },
                {
                    target: Planner.data.skillModifiers.EnergizeManaCostMultiplier,
                    value: -0.2
                }
            ]
        },
        "Ea": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.EnergizeDurationMultiplier,
                    value: 0.2
                }
            ]
        },
        "Ph": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.PowerSurgeCooldownMultiplier,
                    value: -0.2
                },
                {
                    target: Planner.data.skillModifiers.PowerSurgeManaCostMultiplier,
                    value: -0.2
                }
            ]
        },
        "Pt": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.PowerSurgeDurationMultiplier,
                    value: 0.2
                }
            ]
        },
        "Pa": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.PowerSurgeDamageMultiplier,
                    value: 0.25
                }
            ]
        },
        "Ra": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.ReloadEffectMultiplier,
                    value: 0.1
                }
            ]
        },
        "Rh": {
            category: Planner.data.skillCategories.minorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.ReloadCooldownMultiplier,
                    value: -0.2
                }
            ]
        },
        // ----------- Major Stats
        "qG": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.GoldMultiplier,
            value: 0.33
        },
        "qCd": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.CritDamageMultiplier,
            value: 0.728
        },
        "qH": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.HasteMultiplier,
            value: 0.157
        },
        "qGc": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.ClickableGoldMultiplier,
            value: 2.375
        },
        "qCl": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.ClickDamageMultiplier,
            value: 0.33
        },
        "qGb": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.BossGoldMultiplier,
            value: 7
        },
        "qIr": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.ItemCostMultiplier,
            value: -0.22
        },
        "qMt": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.TotalMana,
            value: 100
        },
        "qMr": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.ManaRegenerationMultiplier,
            value: 0.33
        },
        "qEn": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.TotalEnergy,
            value: 100
        },
        "qGp": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.ClickableGoldFrequencyMultiplier,
            value: 0.3
        },
        "qBg": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.BonusGoldChance,
            value: 0.06
        },
        "qTc": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.TreasureChestChance,
            value: 0.06
        },
        "qTg": {
            category: Planner.data.skillCategories.majorStat,
            stat: Planner.data.stats.TreasureChestGoldMultiplier,
            value: 0.95
        },
        // ----------- Major Skill Modifiers
        "qMu": {
            category: Planner.data.skillCategories.majorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.MultiClickCount,
                    value: 9
                },
                {
                    target: Planner.data.skillModifiers.EnergyCost,
                    value: 3
                }
            ]
        },
        "qBc": {
            category: Planner.data.skillCategories.majorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.BigClickCount,
                    value: 3
                }
            ]
        },
        "qBd": {
            category: Planner.data.skillCategories.majorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.BigClickDamageMultiplier,
                    value: 0.95
                }
            ]
        },
        "qHd": {
            category: Planner.data.skillCategories.majorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.HugeClickDamageMultiplier,
                    value: 0.95
                }
            ]
        },
        "qMd": {
            category: Planner.data.skillCategories.majorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.ManaClickDamageMultiplier,
                    value: 0.95
                }
            ]
        },
        // ----------- Special Unlocks
        "Mo": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.ClickableMouseOver
        },
        "Q21": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveSynchrony
        },
        "Q22": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveRelease
        },
        "Q23": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveRestraint
        },
        "Q24": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveEnergyDischarge
        },
        "Q25": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveGiftOfChronos
        },
        "Q26": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveCurseOfJuggernaut
        },
        "Q27": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveLimitlessBigClicks
        },
        "Q28": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveJeratorsEnchantment
        },
        "Q29": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.AutoAttackStorm
        },
        "Q30": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveManagize
        },
        "Q41": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveGoldenClicks
        },
        "Q42": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveHugeClickDiscount
        },
        "Q43": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveReloadRampage
        },
        "Q44": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassivePreload
        },
        "Q45": {
            category: Planner.data.skillCategories.majorSkill,
            modifies: [
                {
                    target: Planner.data.skillModifiers.ReloadEffectMultiplier,
                    value: -0.9
                },
                {
                    target: Planner.data.skillModifiers.ReloadCooldownMultiplier,
                    value: -0.9
                }
            ]
        },
        "Q61": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveBhaalsRise
        },
        "Q62": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveImprovedManaCrit
        },
        "Q63": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveCriticalKillingSurge
        },
        "Q64": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveManaCritOverflow
        },
        "Q65": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveCritStorm
        },
        "Q66": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveCriticalPowerSurge
        },
        "Q81": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveLimitlessHaste
        },
        "Q82": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveFlurry
        },
        "Q83": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveKillingFrenzy
        },
        "Q84": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveSmallClicks
        },
        "Q85": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveExpandableSmallClicks
        },
        "Q86": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveStormBringer
        },
        "Q87": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveHecatonsEcho
        },
        "Q88": {
            category: Planner.data.skillCategories.majorSkill,
            unlocks: Planner.data.skillUnlocks.PassiveClickTorrent
        },
        // ----------- Automator
        "A0": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.Automator
        },
        "A1": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemMultiClick
        },
        "A3": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemBigClicks
        },
        "A5": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemHugeClick
        },
        "A4": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemClickStorm
        },
        "Av": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemUpgradeCheapestItem
        },
        "Au": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemBuyRandomCatalog
        },
        "A2": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemEnergize
        },
        "A6": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemPowerSurge
        },
        "A7": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemManaCrit
        },
        "A8": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemReload
        },
        "Aw": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemNextSet
        },
        "Ax": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorGemPreviousSet
        },
        "Ay": {
            category: Planner.data.skillCategories.system,
            modifies: [
                {
                    target: Planner.data.skillModifiers.AutomatorSetCount,
                    value: 1
                }
            ]
        },
        "Az": {
            category: Planner.data.skillCategories.system,
            modifies: [
                {
                    target: Planner.data.skillModifiers.AutomatorSpeedMultiplier,
                    value: 0.25
                }
            ]
        },
        "S1": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneAlways
        },
        "S2": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneMonsterHealthOver50
        },
        "S3": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneMonsterHealthUnder50
        },
        "S4": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneEnergyOver90
        },
        "S5": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneEnergyUnder10
        },
        "S6": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneManaOver90
        },
        "S7": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneManaUnder10
        },
        "S8": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneZoneStart
        },
        "S9": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneZoneMiddle
        },
        "Sc": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneCD4
        },
        "Sd": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneCD8
        },
        "Se": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneCD40
        },
        "Sf": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneCD90
        },
        "Sg": {
            category: Planner.data.skillCategories.system,
            unlocks: Planner.data.skillUnlocks.AutomatorStoneCD600
        },
        // ----------- Internal / Testing
        "Pc": {
            category: Planner.data.skillCategories.internal,
            stat: Planner.data.stats.NOT_IMPLEMENTED_MultiHitChance,
            value: 1
        },
        "Test": {
            category: Planner.data.skillCategories.internal
        },
        "Tp": {
            category: Planner.data.skillCategories.internal
        },
        "q": {
            category: Planner.data.skillCategories.internal
        },
        "qCc": {
            category: Planner.data.skillCategories.internal,
            stat: Planner.data.stats.CritChance,
            value: 20
        },
        "Nc": {
            category: Planner.data.skillCategories.internal,
            modifies: [
                {
                    target: Planner.data.skillModifiers.MultiClickDamageMultiplier,
                    value: 9
                }
            ]
        },
        "Z01": {
            category: Planner.data.skillCategories.internal,
            unlocks: Planner.data.skillUnlocks.INTERNAL_AutomatorGemAttemptBoss
        },
        "A9": {
            category: Planner.data.skillCategories.internal,
            unlocks: Planner.data.skillUnlocks.INTERNAL_AutomatorGemDash
        },
        "Z00": {
            category: Planner.data.skillCategories.internal,
            modifies: [
                {
                    target: Planner.data.skillModifiers.INTERNAL_AutomatorSlotCount,
                    value: 1
                }
            ]
        }
    }
};