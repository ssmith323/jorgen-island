import * as readLine from 'readline-sync';

import { Alignment } from './attributes';
import PlayableCharacter from './character';

export default class CharacterFactory {
  static create(): PlayableCharacter {
    const name = readLine.question('What is your characters name?');
    const alignment = readLine.question('What is your alignment name?');

    return new PlayableCharacter(name, alignment as Alignment);
  }
}
