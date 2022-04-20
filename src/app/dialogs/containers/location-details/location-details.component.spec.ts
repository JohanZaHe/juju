import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import {
  characterMock,
  locationDetailsMock,
} from 'src/app/utils/unit-test.mock';

import { LocationDetailsComponent } from './location-details.component';

class mockService {
  getWithAllUrl() {
    return of(locationDetailsMock);
  }
}

describe('LocationDetailsComponent', () => {
  let component: LocationDetailsComponent;
  let fixture: ComponentFixture<LocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [LocationDetailsComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        {
          provide: HttpService,
          useValue: { getWithAllUrl: () => of(locationDetailsMock) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailsComponent);
    component = fixture.componentInstance;
    component.data.character = characterMock;
    component.data.locationUrl = locationDetailsMock.url;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
