import { TestBed } from '@angular/core/testing';
import { HttpService } from '../services/http.service';
import { FetchDataPipe } from './fetch-data.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FetchDataPipe', () => {
  let spyService = jasmine.createSpyObj({ getWithAllUrl: null });
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [{ provide: HttpService, useValue: spyService }],
  });

  it('create an instance', () => {
    const pipe = new FetchDataPipe(spyService);
    expect(pipe).toBeTruthy();
  });
});
