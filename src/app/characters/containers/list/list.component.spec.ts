import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { of } from 'rxjs';
import { FetchDataPipe } from 'src/app/pipes/fetch-data.pipe';
import { HttpService } from 'src/app/services/http.service';
import {
  charactersListMock,
  locationDetailsMock,
} from 'src/app/utils/unit-test.mock';
import { CardComponent } from '../../components/list/card/card.component';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatPaginatorModule,
        MatDialogModule,
        MatCardModule,
        MatTooltipModule,
      ],
      declarations: [ListComponent, CardComponent, FetchDataPipe],
      providers: [
        {
          provide: HttpService,
          useValue: {
            get: () => of(charactersListMock),
            getWithAllUrl: () => of(locationDetailsMock),
          },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a characters list', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const counterRows = compiled.getElementsByTagName('app-card').length;
    expect(counterRows).toEqual(charactersListMock.results.length);
  });

  it('should has a paginator', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const element = compiled.querySelector('mat-paginator');
    expect(element).not.toBeNull();
  });

  it('should has a paginator that shows the number of registers rendered', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const element = compiled.querySelector('mat-paginator');
    const pageSize = element.getAttribute('ng-reflect-page-size');
    expect(Number(pageSize)).toEqual(charactersListMock.results.length);
  });

  it('should has a paginator that shows the total registers', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const element = compiled.querySelector('mat-paginator');
    const totalRegisters = element.getAttribute('ng-reflect-length');
    expect(Number(totalRegisters)).toEqual(charactersListMock.info.count);
  });
});
