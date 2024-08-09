// Create an array of combat entities
let combatEntityList = [];

// Create an object for in-game entities / characters
function CombatEntity(name, maxHealth, baseAttack) {
  this.name = name;
  this.maxHealth = maxHealth;
  this.baseAttack = baseAttack;
}

