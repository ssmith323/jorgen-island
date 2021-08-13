import Character from './character';

describe('Character', () => {
  describe('construtor', () => {
    let character: Character;
    beforeEach(() => (character = new Character('Stephen', 'Good')));

    it('should have a name of Stephen', () =>
      expect(character.name).toBe('Stephen'));

    it('should have a alignment of Good', () =>
      expect(character.alignment).toBe('Good'));

    it('should have a armor class of 10', () =>
      expect(character.armor).toBe(10));

    it('should have a hitpoint of 5', () =>
      expect(character.hitPoints).toBe(5));
  });

  describe('alignment', () => {
    it('should allow for Evil', () => {
      const character = new Character('Stephen', 'Evil');

      expect(character.alignment).toBe('Evil');
    });

    it('should allow for Good', () => {
      const character = new Character('Stephen', 'Good');

      expect(character.alignment).toBe('Good');
    });

    it('should allow for Neutral', () => {
      const character = new Character('Stephen', 'Neutral');

      expect(character.alignment).toBe('Neutral');
    });
  });

  describe('attack', () => {
    let character1: Character;
    let character2: Character;
    beforeEach(() => (character1 = new Character('Stephen', 'Good')));
    beforeEach(() => (character2 = new Character('Jeff', 'Evil')));
    it('should damage character2', () => {
      character1.attack(character2, 21);
      expect(character2.hitPoints).toBe(4);
    });

    it('should not damage character2', () => {
      character1.attack(character2, 0);
      expect(character2.hitPoints).toBe(5);
    });

    it('should do double damage with a natual 20', () => {
      character1.attack(character2, 20);
      expect(character2.hitPoints).toBe(3);
    });
  });
});
