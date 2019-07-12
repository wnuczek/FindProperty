import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component'
import { AllSearchesComponent } from './all-searches/all-searches.component'
import { AddSearchFormComponent } from './add-search-form/add-search-form.component'
import { SearchDetailsComponent } from './search-details/search-details.component'

const routes: Routes = [
	//{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
	{ path: '', component: MainPageComponent },
	{ path: 'poszukiwania', component: AllSearchesComponent },
	{ path: 'dodajPoszukiwania', component: AddSearchFormComponent },
	{ path: 'oferta/:id', component: SearchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
