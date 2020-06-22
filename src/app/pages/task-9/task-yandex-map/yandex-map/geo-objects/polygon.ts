/**
 *
 */
import {IDataManager} from '../common';
import {IGeoObject} from './geo-object';
import {TPosition} from '../types';

export type TPolygonCoordinates=TPosition[][]

export interface IPolygon extends IGeoObject {
  properties: IDataManager;
  options: any;
  balloon: any;
  editor: any;
  geometry: any;
  getCoordinates():TPolygonCoordinates;
}
