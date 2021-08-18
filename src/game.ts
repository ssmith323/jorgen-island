import * as readLine from 'readline-sync';

import Location from './map/location';
import gameState from './state';
import { message } from './ui/utils';

export default class Game {
  play(): void {
    const location = new Location();
    let keepPlaying = true;
    while (keepPlaying) {
      const input = readLine.question('What do you want to do? ');
      switch (input) {
        case 'EXIT':
          keepPlaying = false;
          break;
        case 'NORTH':
        case 'SOUTH':
        case 'EAST':
        case 'WEST':
          location.move(input);
          location.event();
          break;
        default:
          console.log('I dont understand');
      }
      if (gameState.mainCharacter.hitPoints <= 0) {
        message(
          'Sorry but you have died. This adventage of Jorgen Island is over',
        );
        keepPlaying = false;
      }
    }
  }
}
