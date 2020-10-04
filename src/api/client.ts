import Axios from 'axios';

export type HttpHeader = { [key: string]: string };
export type HttpQuery = { [key: string]: string };
export enum ApiPath {
  INSTANT = 'instantSearch',
}

export default class ApiClient {
  private readonly baseUrl: string;
  private readonly basicHeaders: HttpHeader;

  constructor() {
    this.baseUrl = 'https://map.naver.com/v5/api';
    this.basicHeaders = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    };
  }

  public async request<T>(path: ApiPath, query: HttpQuery): Promise<any> {}

  private buildPath(path: ApiPath, query: HttpQuery): string {
    const params = new URLSearchParams(query);
    return `${this.baseUrl}/${path}?${params}`;
  }
}
