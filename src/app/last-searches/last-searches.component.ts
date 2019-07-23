import { Component, OnInit, Input } from '@angular/core';
import { objectSearched } from '../objectSearched';
import { objectService } from '../object.service';
import { AllSearchesComponent } from '../all-searches/all-searches.component'

//dummy data from lastSearched.ts file
//import { lastSearched } from '../lastSearched'

@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.sass']
})
export class LastSearchesComponent implements OnInit {

  //lastSearched=lastSearched;

  @Input() objectsSearched: objectSearched[];
 
  constructor(private objectService: objectService) { }

  ngOnInit() {
    //this.objectsSearched=AllSearchesComponent.objectsSearched;
  	this.getObjectsSearched();
  }

  getObjectsSearched(): void {
    this.objectService.getObjectsSearched()
      .subscribe(objectSearched => {this.objectsSearched = objectSearched['data']});
  }

}
