import ApiClient, { ApiPath } from './api/client';
import { InstantSearchResponse } from './types/response';
import { Coordinate } from './types/coordinate';

export default class NMAP {
  public coordinate: Coordinate;
  private readonly client: ApiClient;

  constructor(coordinate: Coordinate) {
    this.coordinate = coordinate;
    this.client = new ApiClient();
  }

  private joinCoordinate(): string {
    return `${this.coordinate.y},${this.coordinate.x}`;
  }

  public async instant(query: string): Promise<InstantSearchResponse> {
    return this.client.request<InstantSearchResponse>(ApiPath.INSTANT, {
      query,
      types: 'place,address,bus',
      coords: this.joinCoordinate(),
    });
  }
}
