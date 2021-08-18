import { Alignment } from './attributes';
import PlayableCharacter from './character';

describe('Character', () => {
  describe('construtor', () => {
    let character: PlayableCharacter;
    beforeEach(
      () => (character = new PlayableCharacter('Stephen', 'Good' as Alignment)),
    );

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
      const character = new PlayableCharacter('Stephen', 'Evil' as Alignment);

      expect(character.alignment).toBe('Evil');
    });

    it('should allow for Good', () => {
      const character = new PlayableCharacter('Stephen', 'Good' as Alignment);

      expect(character.alignment).toBe('Good');
    });

    it('should allow for Neutral', () => {
      const character = new PlayableCharacter(
        'Stephen',
        'Neutral' as Alignment,
      );

      expect(character.alignment).toBe('Neutral');
    });

    // it('should not allow for random', () => {
    //   const character = new Character('Stephen', 'random' as Alignment);

    //   expect(character.alignment).toBe('Neutral');
    // });
  });

  describe('attack', () => {
    let character1: PlayableCharacter;
    let character2: PlayableCharacter;
    beforeEach(
      () =>
        (character1 = new PlayableCharacter('Stephen', 'Good' as Alignment)),
    );
    beforeEach(
      () => (character2 = new PlayableCharacter('Jeff', 'Evil' as Alignment)),
    );
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
