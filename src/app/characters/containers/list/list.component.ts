import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICharacter, ICharacterList } from 'src/app/models/character.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  characters: ICharacter[] = [];
  previous: boolean = false;
  next: boolean = false;
  currentPage: number = 1;
  counterRegisters: number = 0;
  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.subscription.add(
      this.service
        .get('character', { page: this.currentPage })
        .subscribe((response: ICharacterList) => {
          this.characters = response.results;
          this.counterRegisters = response.info.count;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changePage(event) {
    this.currentPage = event.pageIndex + 1;
    this.getCharacters();
  }
}
