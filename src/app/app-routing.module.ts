import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSearchesComponent } from './all-searches/all-searches.component';
import { AddSearchFormComponent } from './add-search-form/add-search-form.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageHowItWorksComponent } from './page-how-it-works/page-how-it-works.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PagePostsComponent } from './page-posts/page-posts.component';
import { PagePostComponent } from './page-post/page-post.component';
import { PageContactComponent } from './page-contact/page-contact.component';

const routes: Routes = [
	//{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
	{ path: '', component: PageHomeComponent },
	{ path: 'poszukiwania', component: AllSearchesComponent },
	{ path: 'dodajPoszukiwania', component: AddSearchFormComponent },
	{ path: 'oferta/:id', component: SearchDetailsComponent},
	{ path: 'jak-to-dziala', component: PageHowItWorksComponent},
	{ path: 'o-nas', component: PageAboutComponent},
	{ path: 'aktualnosci', component: PagePostsComponent},
	{ path: 'wpis/:id', component: PagePostComponent},
	{ path: 'kontakt', component: PageContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
