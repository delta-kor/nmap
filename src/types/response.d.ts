declare namespace InstantSearchResponse {
  export type Query = string;
  export interface Address {
    dist: number;
    fullAddress: string;
    id: string;
    pnu: string;
    shortAddress: string[];
    title: string;
    totalScore: number;
    type: 'address';
    x: string;
    y: string;
  }
  export interface Bus {
    busType: string;
    busTypeIconName: string;
    busTypeName: string;
    cityCode: string;
    cityName: string;
    dist: number;
    firstStop: {
      firstTime: string;
      lastTime: string;
      name: string;
    };
    id: string;
    interval: {
      weekday: {
        type: 'COUNT' | 'TIME';
        unit: string;
        value: string;
      };
    };
    lastStop: {
      name: string;
      firstTime?: string;
      lastTime?: string;
    };
    liveUpdate: boolean;
    mainStation: string;
    title: string;
    totalScore: number;
    turningPointIdx: number;
    type: 'bus';
  }
  export interface Place {
    cid: string;
    ctg: string;
    dist: number;
    id: string;
    jibunAddress: string;
    review: {
      count: string;
    };
    roadAddress: string;
    sid: string;
    title: string;
    totalScore: number;
    type: 'place';
    x: string;
    y: string;
  }
  export interface Meta {
    model: string;
    query: string;
    requestId: string;
  }
  export interface All {
    address?: InstantSearchResponse.Address;
    place?: InstantSearchResponse.Place;
    bus?: InstantSearchResponse.Bus;
  }
}

declare interface InstantSearchResponse {
  ac: InstantSearchResponse.Query[];
  address: InstantSearchResponse.Address[];
  bus: InstantSearchResponse.Bus[];
  place: InstantSearchResponse.Place[];
  meta: InstantSearchResponse.Meta[];
  all: InstantSearchResponse.All[];
}
