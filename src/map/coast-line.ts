import { message } from '../ui/utils';
import Terrian from './terrian.interface';

export default class CoastLine implements Terrian {
  randomEvent(): void {
    message('You are enjoying walking with the tide hitting your feet');
  }
}
