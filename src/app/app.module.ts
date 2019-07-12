import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LastSearchesComponent } from './last-searches/last-searches.component';
import { LastAdsComponent } from './last-ads/last-ads.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AllSearchesComponent } from './all-searches/all-searches.component';
import { AddSearchFormComponent } from './add-search-form/add-search-form.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LastSearchesComponent,
    LastAdsComponent,
    NavComponent,
    FooterComponent,
    AllSearchesComponent,
    AddSearchFormComponent,
    SearchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
