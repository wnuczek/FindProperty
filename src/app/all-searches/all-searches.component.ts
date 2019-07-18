import { Component, OnInit } from '@angular/core';
import { objectSearched } from '../objectSearched';
import { objectService } from '../object.service';

@Component({
  selector: 'app-all-searches',
  templateUrl: './all-searches.component.html',
  styleUrls: ['./all-searches.component.sass']
})
export class AllSearchesComponent implements OnInit {

  p: number = 1;

  objectsSearched: objectSearched[] = [];

  constructor(private objectService: objectService) { }

  ngOnInit() {
  	this.getObjectsSearched();
  }

  getObjectsSearched(): void {
    this.objectService.getObjectsSearched()
      .subscribe(objectSearched => {this.objectsSearched = objectSearched['data'], console.log(objectSearched['data'])});
  }

}
