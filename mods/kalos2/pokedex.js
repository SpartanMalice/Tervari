exports.BattlePokedex = {
       flygon: {
                inherit: true,
                types: ["Bug","Ground"]
                abilites: {0:"Levtitate",1:"Compoundeyes",H:"Tinted Lens"}
                baseStats: {hp:80,atk:110,def:100,spa:80,spd:95,spe:105}
       },
       mew: {
                inherit: true,
                types: ["Psychic","Fairy"]
                abilites: {0:"Regenerator",H:"Synchronoise"}
       },
       celebi: {
                inherit: true,
                types: ["Grass","Fairy"]
       },
       jirachi: {
                inherit: true,
                types: ["Steel","Fairy"]
                abilites: {0:"Synchronoise",H:"Illuminate"}
       },
       manaphy: {
                inherit: true,
                types: ["Water","Fairy"]
                abilites: {0:"Hydraition",H:"Swift Swim"}
       },
       shaymin: {
                inherit: true,
                types: ["Grass","Normal"]
                abilites: {0:"Unaware"}
       },
       meloetta: {
                inherit: true,
                abilites: {0:"Stance Change"}
       },
       victini: {
                inherit: true,
                types: ["Fire","Fairy"]
                abilites: {0:"Victory Star",H:"Pixilate"}
       },
       abomasnowmega: {
                inherit: true,
                abilites: {0:"Analytic"}
                baseStats: {hp:100,atk:140,def:90,spa:165,spd:95,spe:30}
       },
       garchompmega: {
                inherit: true,
                types: ["Dragon","Fighting"]
                abilites: {0:"Tough Claws"}
                baseStats: {hp:110,atk:175,def:110,spa:110,spd:100,spe:98}
       },
       heracrossmega: {
                inherit: true,
                abilites: {0:"Scrappy"}
                baseStats: {hp:80,atk:165,def:90,spa:85,spd:90,spe:100}
       },
       gyaradosmega: {
                inherit: true,
                abilites: {0:"Moxie"}
                baseStats: {hp:100,atk:165,def:90,spa:85,spd:110,spe:100}
       },
       delphox: {
                inherit: true,
                abilites: {0:"Blaze",1:"Magic Guard",H:"Magician"}
                baseStats: {hp:75,atk:69,def:72,spa:115,spd:100,spe:108}
       },
       greninja: {
                inherit: true,
                abilites: {0:"Torrent",1:"Illusion",H:"Protean"}
                baseStats: {hp:72,atk:105,def:67,spa:100,spd:71,spe:122}
       },
       chesnaught: {
                inherit: true,
                abilites: {0:"Overgrow",1:"Regenerator",H:"Bulletproof"}
                baseStats: {hp:80,atk:110,def:100,spa:80,spd:95,spe:105}
       },
       florges: {
                inherit: true,
                abilites: {0:"Regenerator",1:"Natural Cure",H:"Pixelate"}
                baseStats: {hp:90,atk:65,def:68,spa:112,spd:160,spe:75}
       },
       heliolisk: {
                inherit: true,
                types: ["Electric","Ground"]
                baseStats: {hp:70,atk:55,def:105,spa:110,spd:60,spe:135}
       },
       talonflame: {
                inherit: true,
                abilites: {0:"Flame Body",1:"Flash Fire",H:"Gale Wings"}
                baseStats: {hp:80,atk:100,def:100,spa:80,spd:95,spe:126}
       },
       latias:{num:380,species:"Latias",types:["Dragon","Fairy"],gender:"F",baseStats: {hp:90,atk:65,def:100,spa:105,spd:140,spe:110},abilities:{0:"Levitate"},heightm:1.4,weightkg:40,color:"Red",eggGroups:["No Eggs"],otherFormes:["latiasmega"]},
       latiasmega:{num:380,species:"Latias-Mega",baseSpecies:"Latias",forme:"Mega",formeLetter:"M",types:["Dragon","Fairy"],gender:"N",baseStats:{hp:120,atk:65,def:100,spa:130,spd:165,spe:135},abilities:{0:"Magic Bounce"},heightm:3,weightkg:215,color:"Red",eggGroups:["No Eggs"]},
       latios:{num:381,species:"Latios",types:["Dragon","Psychic"],gender:"M",baseStats:{hp:90,atk:100,def:65,spa:140,spd:105,spe:110},abilities:{0:"Levitate"},heightm:2,weightkg:60,color:"Blue",eggGroups:["No Eggs"],otherFormes:["latiosmega"]},
       latiosmega:{num:381,species:"Latios-Mega",baseSpecies:"Latios",forme:"Mega",formeLetter:"M",types:["Dragon","Psychic"],gender:"N",baseStats:{hp:70,atk:150,def:68,spa:190,spd:72,spe:165},abilities:{0:"Magic Guard"},heightm:3,weightkg:215,color:"Blue",eggGroups:["No Eggs"]},
       xerneas:{num:716,species:"Xerneas",types:["Fairy"],gender:"N",baseStats:{hp:126,atk:131,def:95,spa:131,spd:98,spe:99},abilities:{0:"Fairy Aura"},heightm:3,weightkg:215,color:"",eggGroups:["No Eggs"],otherFormes:["xerneasmega"]},
       yveltal:{num:717,species:"Yveltal",types:["Dark","Flying"],gender:"N",baseStats:{hp:126,atk:131,def:95,spa:131,spd:98,spe:99},abilities:{0:"Dark Aura"},heightm:5.8,weightkg:203,color:"",eggGroups:["No Eggs"],otherFormes:["yveltalmega"]},
       xerneasmega:{num:716,species:"Xerneas-Mega",baseSpecies:"Xerneas",forme:"Mega",formeLetter:"M",types:["Fairy","Grass"],gender:"N",baseStats:{hp:165,atk:60,def:135,spa:115,spd:165,spe:105},abilities:{0:"Natural Cure"},heightm:3,weightkg:215,color:"",eggGroups:["No Eggs"]},
       yveltalmega:{num:717,species:"Yveltal-Mega",baseSpecies:"Yveltal",forme:"Mega",formeLetter:"M",types:["Dark","Flying"],gender:"N",baseStats:{hp:105,atk:185,def:90,spa:175,spd:85,spe:115},abilities:{0:"Gale Wings"},heightm:5.8,weightkg:203,color:"",eggGroups:["No Eggs"]}
};
