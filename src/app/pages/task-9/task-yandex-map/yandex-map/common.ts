export interface IEventManager {
  add(events: string[], handler: (event) => void);
}

/**
 * https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/IDataManager-docpage/
 */
export interface IDataManager {
  events: IEventManager;
  change: any;

  get(path: string, defaultValue?: any)
}
