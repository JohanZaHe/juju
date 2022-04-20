import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url, params): Observable<any> {
    return this.http.get(environment.apiUrl + url, { params: params });
  }

  getWithAllUrl(url, params): Observable<any> {
    return this.http.get(url, params);
  }
}
