import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FetchDataPipe } from 'src/app/pipes/fetch-data.pipe';
import { characterMock } from 'src/app/utils/unit-test.mock';

import { ProfileDetailsComponent } from './profile-details.component';

describe('ProfileDetailsComponent', () => {
  let component: ProfileDetailsComponent;
  let fixture: ComponentFixture<ProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule],
      declarations: [ProfileDetailsComponent, FetchDataPipe],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsComponent);
    component = fixture.componentInstance;
    component.data.character = characterMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
