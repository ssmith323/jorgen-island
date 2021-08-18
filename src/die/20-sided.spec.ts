import TwentySided from './20-sided';

describe('TwentySided', () => {
  describe('roll', () => {
    it('should return a value', () => {
      Math.random = jest.fn().mockReturnValue(2);
      expect(new TwentySided().roll()).toBe(1);
    });
  });
});
