import {Inject, Injectable, InjectionToken, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {forkJoin, Observable, ReplaySubject} from 'rxjs';
import {mapTo, shareReplay} from 'rxjs/operators';


export const SCRIPT_LOAD_SERVICE = new InjectionToken('SCRIPT_LOAD_SERVICE');

@Injectable()
export class ScriptLoadService {
  _loadedLibraries: { [url: string]: ReplaySubject<string> } = {};
  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  load(url: string): Observable<any> {
    if (this._loadedLibraries[url]) {
      return this._loadedLibraries[url].asObservable();
    }

    this._loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      this._loadedLibraries[url].next(url);
      this._loadedLibraries[url].complete();
    };

    this.document.body.appendChild(script);

    return this._loadedLibraries[url].asObservable();
  }

  loaded(scripts: string[]): Observable<boolean> {
    const loaded$: Observable<string>[] = scripts.map((url) => this.load(url));
    return forkJoin(loaded$).pipe(shareReplay(1), mapTo(true));
  }

}
