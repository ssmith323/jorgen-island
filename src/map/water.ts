import { message } from '../ui/utils';
import Terrian from './terrian.interface';

export default class Water implements Terrian {
  randomEvent(): void {
    message('Careful now. You are in the ocean. You could get lost.');
  }
}
