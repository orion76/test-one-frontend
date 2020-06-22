import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DOCUMENT} from '@angular/common';

export const DATA_SERVICE = new InjectionToken('DATA_SERVICE');

@Injectable()
export class DataService {


  constructor(@Inject(DOCUMENT) private document, private http: HttpClient) {
  }

prepareUrl(url):string{
  return`http://${this.document.domain}:8080${url}`;
}

  get(url: string): Observable<any> {

    return this.http.get(this.prepareUrl(url));
  }


  post(url: string, data: any): Observable<any> {
    return this.http.post(this.prepareUrl(url), data, {});
  }
}
