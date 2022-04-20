import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../services/http.service';

@Pipe({
  name: 'fetchData',
})
export class FetchDataPipe implements PipeTransform {
  constructor(private service: HttpService) {}
  transform(endPointUrl: string, paramWaited: string): Observable<any> {
    return this.service
      .getWithAllUrl(endPointUrl, {})
      .pipe(map((response) => response[paramWaited]));
  }
}
