export default class Location {
  private x: number;
  private y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  move(direction: CardinalDirections): CurrentLocation {
    switch (direction) {
      case 'NORTH':
        this.y++;
        break;
      case 'SOUTH':
        this.y--;
        break;
      case 'EAST':
        this.x++;
        break;
      case 'WEST':
        this.x--;
        break;
    }
    return [this.x, this.y];
  }
}
export type CardinalDirections = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
export type CurrentLocation = [number, number];
