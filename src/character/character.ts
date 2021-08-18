import { Alignment } from './attributes';
import { canAttack } from './character-util';
import Character from './character.interface';

export default class PlayableCharacter implements Character {
  armor: number;
  hitPoints: number;
  constructor(public name: string, public alignment: Alignment) {
    this.name = name;
    this.armor = 10;
    this.hitPoints = 5;
  }

  attack(character: PlayableCharacter, attackRoll: number): void {
    if (attackRoll === 20) {
      character.hitPoints -= 2;
      return;
    }
    if (canAttack(attackRoll, character.armor)) {
      character.hitPoints--;
    }
  }
}
