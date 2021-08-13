import * as readLine from 'readline-sync';

import { distplayHeader } from './graphics/graphics';
import Location from './map/location';

distplayHeader();
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
      console.log('LOCATION', location.move(input));
      break;
    default:
      console.log('I dont understand');
  }
}
console.log('Exit');
process.exit(0);
