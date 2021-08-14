import { Places, worldMap } from './world';

export default class Location {
  private x: number;
  private y: number;
  constructor() {
    this.x = 5;
    this.y = 5;
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

  event(): void {
    let terrian: Places;
    try {
      terrian = worldMap[this.x][this.y];
    } catch (e) {
      terrian = Places.DEEP_OCEAN;
    }

    switch (terrian) {
      case Places.WATER:
        console.log('Careful now. You are in the ocean. You could get lost.');
        break;
      case Places.COAST_LINE:
        console.log('You are enjoying walking with the tide hitting your feet');
        break;
      case Places.BEACH:
        console.log('The sand on the beach is hot!');
        break;
      default:
        console.log(
          'You better find land soon or you could be swimming for a while.',
        );
    }
    console.log(`[${this.x}, ${this.y}]`);
  }
}
export type CardinalDirections = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
export type CurrentLocation = [number, number];
