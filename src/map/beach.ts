import TwentySided from '../die/20-sided';
import MonsterEvent from '../events/monster.event';
import { message } from '../ui/utils';
import Terrian from './terrian.interface';
import { Places } from './world';

export default class Beach implements Terrian {
  randomEvent(): void {
    const roll = new TwentySided().roll();
    if (roll < 10) {
      message('The sand on the beach is hot!');
    } else {
      new MonsterEvent().run(Places.BEACH);
    }
  }
}
