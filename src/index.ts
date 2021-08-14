import * as readLine from 'readline-sync';

import { distplayHeader } from './graphics/graphics';
import Location from './map/location';

distplayHeader();
console.log('Welcome to Jorgen Island. It is a world where anything is');
console.log('possible! You can battle other people and find the love of');
console.log('your life. To get started lets create a character.');
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
}
console.log('Thank you for playing! Goodbye!');
process.exit(0);
