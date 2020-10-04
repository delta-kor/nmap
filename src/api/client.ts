import Axios from 'axios';

export type HttpHeader = { [key: string]: string };
export type HttpQuery = { [key: string]: string };
export enum ApiPath {
  INSTANT = 'instantSearch',
}

export default class ApiClient {
  private readonly baseUrl: string;
  private readonly headers: HttpHeader;
  private readonly baseQuery: HttpQuery;

  constructor() {
    this.baseUrl = 'https://map.naver.com/v5/api';
    this.headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    };
    this.baseQuery = {
      lang: 'ko',
      caller: 'pcweb',
    };
  }

  public async request<T>(path: ApiPath, query: HttpQuery): Promise<T> {
    const url = this.buildPath(path, query);
    const response = await Axios.get(url, { headers: this.headers });
    return response.data;
  }

  private buildPath(path: ApiPath, query: HttpQuery): string {
    const urlQuery = Object.assign(query, this.baseQuery);
    const params = new URLSearchParams(urlQuery);
    return `${this.baseUrl}/${path}?${params}`;
  }
}
