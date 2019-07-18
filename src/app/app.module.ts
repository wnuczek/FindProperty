import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { LastSearchesComponent } from './last-searches/last-searches.component';
import { LastAdsComponent } from './last-ads/last-ads.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AllSearchesComponent } from './all-searches/all-searches.component';
import { AddSearchFormComponent } from './add-search-form/add-search-form.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PagePostsComponent } from './page-posts/page-posts.component';
import { PagePostComponent } from './page-post/page-post.component';
import { PageHowItWorksComponent } from './page-how-it-works/page-how-it-works.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    LastSearchesComponent,
    LastAdsComponent,
    NavComponent,
    FooterComponent,
    AllSearchesComponent,
    AddSearchFormComponent,
    SearchDetailsComponent,
    PageContactComponent,
    PageAboutComponent,
    PagePostsComponent,
    PageHowItWorksComponent,
    PagePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-pl' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
