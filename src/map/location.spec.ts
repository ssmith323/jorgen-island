import Location from './location';

describe('Location', () => {
  let location: Location;
  beforeEach(() => (location = new Location()));

  it('should move north by one', () =>
    expect(location.move('NORTH')).toEqual([5, 6]));
  it('should move south by one', () =>
    expect(location.move('SOUTH')).toEqual([5, 4]));
  it('should move WEST by one', () =>
    expect(location.move('WEST')).toEqual([4, 5]));
  it('should move east by one', () =>
    expect(location.move('EAST')).toEqual([6, 5]));
});
