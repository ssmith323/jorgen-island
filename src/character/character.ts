import { Alignment } from './attributes';
import { canAttack } from './character-util';

export default class Character {
  armor: number;
  hitPoints: number;
  constructor(public name: string, public alignment: Alignment) {
    this.name = name;
    this.armor = 10;
    this.hitPoints = 5;
  }

  attack(character: Character, attackRoll: number): void {
    if (attackRoll === 20) {
      character.hitPoints -= 2;
      return;
    }
    if (canAttack(attackRoll, character.armor)) {
      character.hitPoints--;
    }
  }
}
