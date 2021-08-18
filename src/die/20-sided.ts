import Die from './die';

export default class TwentySided extends Die {
  roll(): number {
    return Math.ceil(((Math.random() * 100) % 20) + 1);
  }
}
