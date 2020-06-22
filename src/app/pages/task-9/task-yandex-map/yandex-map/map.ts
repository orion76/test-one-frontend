import {MVCObject, TPosition} from './types';
import {GeoObjects} from './geo-objects/geo-objects';

export interface YandexMap extends MVCObject {

  // constructor(el: HTMLElement, opts?: MapOptions): void;
  events: any;
  geoObjects: GeoObjects;

  setCenter(param: TPosition): void;

  getCenter(): TPosition;

  panTo(points: any[], options: any[]): void;

  removeOverlay(overlay: any): void;
}

export interface MapClickMouseEvent {
  lat: number;
  lng: number;
}

export interface MapMouseEvent {
  lat: number;
  lng: number;
  nativeMarker: any;
}

export interface MapOptions {
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  center?: TPosition;
  type: any;
  controls?: any[];
}
