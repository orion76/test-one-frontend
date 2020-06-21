import {Observable} from 'rxjs';
import {IMenuItem, IMenuTree} from '../libraries/menu-dynamic/types';
import {InjectionToken} from '@angular/core';
import {UrlSegment} from '@angular/router';

export const MENU_SERVICE = new InjectionToken<IMenuService>('MENU_SERVICE');

export interface IMenuService {
  readonly menuAll$: Observable<Map<string, IMenuItem>>;

  addMenu(menu: IMenuItem[]);

  getMenu(routerLink: string): Observable<IMenuItem>;

  getPath(routerLink: string): Observable<IMenuItem[]>;

  activeMenuItem(): Observable<IMenuItem>;

  activeAnchor(): Observable<IMenuItem>;

  anchorMenu(): Observable<IMenuItem[]>;

  createUrlFromMenuItem(item: IMenuItem): string;

  createUrlFromSegments(segments: UrlSegment[]): string;
}
