import * as readLine from 'readline-sync';

import { message } from '../ui/utils';

export default class MainMenu {
  display(): string {
    message('Pick an option:');
    message('New Game');
    message('Exit');
    return readLine.question('What do you want to do? ');
  }
}
