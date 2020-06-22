import {IEventManager} from '../common';

export interface IGeoObject {
  events: IEventManager;
  geometry: any;
  options: any;
  properties: any;
  state: any;
}
