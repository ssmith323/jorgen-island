import CharacterFactory from './character/character-factory';
import Game from './game';
import MainMenu from './menus/main';
import gameState from './state';
import { distplayHeader } from './ui/graphics';
import { message } from './ui/utils';

distplayHeader();
const action = new MainMenu().display();
switch (action) {
  case 'New Game':
    console.log('Welcome to Jorgen Island. It is a world where anything is');
    console.log('possible! You can battle other people and find the love of');
    console.log('your life.');
    gameState.mainCharacter = CharacterFactory.create();
    new Game().play();
    console.log('Thank you for playing! Goodbye!');
    process.exit(0);
  case 'Exit':
    message('Then why did you start?');
    process.exit(0);
  default:
    message('That isnt an option');
    process.exit(1);
}
