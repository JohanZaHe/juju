import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/app/models/character.model';
import { ILocation } from 'src/app/models/location.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
})
export class LocationDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  location: ILocation;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { locationUrl: string; character: ICharacter },
    private service: HttpService
  ) {}

  ngOnInit(): void {
    this.getLocationDetails(this.data.locationUrl);
  }

  getLocationDetails(locationUrl: string) {
    this.subscription.add(
      this.service
        .getWithAllUrl(locationUrl, {})
        .subscribe((response: ILocation) => {
          this.location = response;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
