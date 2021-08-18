import { Places } from '../map/world';

export default interface Event {
  run(terrian: Places): void;
}
