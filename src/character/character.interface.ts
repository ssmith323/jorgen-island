import { Alignment } from './attributes';

export default interface Character {
  armor: number;
  hitPoints: number;
  alignment: Alignment;

  attack(defender: Character, roll: number): void;
}
