import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './dialogs/containers/profile-details/profile-details.component';
import { ListComponent } from './characters/containers/list/list.component';
import { CardComponent } from './characters/components/list/card/card.component';
import { MenuComponent } from './setup/menu/menu.component';
import { FooterComponent } from './setup/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LocationDetailsComponent } from './dialogs/containers/location-details/location-details.component';
import { FetchDataPipe } from './pipes/fetch-data.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    ListComponent,
    CardComponent,
    MenuComponent,
    FooterComponent,
    LocationDetailsComponent,
    FetchDataPipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
