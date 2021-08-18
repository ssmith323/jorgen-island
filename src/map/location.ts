import Beach from './beach';
import CoastLine from './coast-line';
import DeepOcean from './deep-ocean';
import Water from './water';
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

  getTerrian(): Places {
    if (
      this.x < 0 ||
      this.x > worldMap.length ||
      this.y < 0 ||
      this.y > worldMap.length
    ) {
      return Places.DEEP_OCEAN;
    }

    return worldMap[this.x][this.y];
  }

  event(): void {
    const terrian: Places = this.getTerrian();

    switch (terrian) {
      case Places.WATER:
        new Water().randomEvent();
        break;
      case Places.COAST_LINE:
        new CoastLine().randomEvent();
        break;
      case Places.BEACH:
        new Beach().randomEvent();
        break;
      case Places.DEEP_OCEAN:
        new DeepOcean().randomEvent();
    }
    console.log(`[${this.x}, ${this.y}]`);
  }
}
export type CardinalDirections = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
export type CurrentLocation = [number, number];
