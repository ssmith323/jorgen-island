import * as readLine from 'readline-sync';

import { Alignment } from '../character/attributes';
import PlayableCharacter from '../character/character';
import TwentySided from '../die/20-sided';
import { Places } from '../map/world';
import gameState from '../state';
import { message } from '../ui/utils';
import Event from './event';

export default class MonsterEvent implements Event {
  run(terrian: Places): void {
    const monster = new PlayableCharacter('Bear', Alignment.NEUTRAL);
    const die = new TwentySided();
    const pc = gameState.mainCharacter;
    let inEvent = true;
    message('A wild Bear appered!');
    while (inEvent) {
      const input = readLine.question('What do you want to do? ');
      switch (input) {
        case 'ATTACK':
          pc.attack(monster, die.roll());
          message(`You: ${pc.hitPoints} vs Bear: ${monster.hitPoints}`);
          break;
        case 'RUN AWAY':
          if (die.roll() > 15) {
            message('You were able to run away!');
            inEvent = false;
          }
        default:
          message('Nothing happened!');
      }
      if (
        inEvent &&
        monster.alignment === Alignment.NEUTRAL &&
        monster.alignment !== pc.alignment
      ) {
        monster.attack(pc, die.roll());
        message(`You: ${pc.hitPoints} vs Bear: ${monster.hitPoints}`);
      }
    }
  }
}
