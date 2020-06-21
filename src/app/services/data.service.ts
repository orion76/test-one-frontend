import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export const DATA_SERVICE = new InjectionToken('DATA_SERVICE');

@Injectable()
export class DataService {


  constructor(private http: HttpClient) {
  }


  get(url: string): Observable<any> {
    return this.http.get(url);
  }


  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data,{});
  }
}
