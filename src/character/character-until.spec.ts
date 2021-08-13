import { canAttack } from './character-util';

describe('canAttack', () => {
  it('should return win when a 20 is the attack', () =>
    expect(canAttack(20, 21)).toBeTruthy());

  it('should return lose when a 19 is the attack the defense is 20', () =>
    expect(canAttack(19, 20)).toBeFalsy());

  it('should return win when a attack is greater than the defense', () =>
    expect(canAttack(19, 18)).toBeTruthy());

  it('should return lost when they are equal', () =>
    expect(canAttack(19, 19)).toBeFalsy());
});
