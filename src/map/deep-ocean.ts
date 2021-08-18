import TwentySided from '../die/20-sided';
import gameState from '../state';
import { message } from '../ui/utils';
import Terrian from './terrian.interface';

export default class DeepOcean implements Terrian {
  randomEvent(): void {
    const roll = new TwentySided().roll();
    if (roll === 1) {
      message(
        'Unfortantly a shark came up from behind and killed you. You must respect the ocean!',
      );
      gameState.mainCharacter.hitPoints = 0;
      return;
    }
    message('You better find land soon or you could be swimming for a while.');
  }
}
