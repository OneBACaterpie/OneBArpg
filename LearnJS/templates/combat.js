// Resolve combat between two entities where a is attacking b

// placeholders for testing
class Hero {
  constructor(){
    this.baseHP; // base health points (pre-modifiers)
    this.currentHP = this.baseHP;
    this.ppwr; // physical power
    this.mpwr; // magical power
    this.armor; // armor
    this.mresist; // magic resist
    this.lvl = 1;
  }
}

entity1 = {
  hp: 10, // base health points
  patk: 2, // physical attack
  matk: 1, // magic attack
  pr: 0, // physical resist
  mr: 0, // magic resist
  basicAtk: {type:"physical", range: 1, desc:"Basic Attack", pwr: entity1.patk * 1},
  skill1: {type:"physical", range: 3, desc:"Skill 1", pwr: entity.1.patk * 1.5},
  skill2: {type:"magic", range: 0, desc:"Skill 2", pwr: entity.1.matk * 1.5}
entity2 = { 
}

function combat(a,b){
  
}
