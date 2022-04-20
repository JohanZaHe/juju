import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { MatDialog } from '@angular/material/dialog';
import { LocationDetailsComponent } from 'src/app/dialogs/containers/location-details/location-details.component';
import { ProfileDetailsComponent } from 'src/app/dialogs/containers/profile-details/profile-details.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() character: ICharacter;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  viewLocationDetails(locationUrl: string) {
    if (locationUrl) {
      this.dialog.open(LocationDetailsComponent, {
        data: { locationUrl: locationUrl, character: this.character },
      });
    }
  }

  viewCharacterDetails() {
    this.dialog.open(ProfileDetailsComponent, {
      data: { character: this.character },
      width: '400px',
    });
  }

  randomColor = () => {
    let hexString = '0123456789abcdef';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };
}
