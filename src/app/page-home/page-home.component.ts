import { Component, OnInit } from '@angular/core';
import { objectSearched } from '../objectSearched';
import { objectOffered } from '../objectOffered';
import { objectService } from '../object.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.sass']
})
export class PageHomeComponent implements OnInit {
  
  objectsSearched: objectSearched[] = [];
  objectsOffered: objectOffered[] = [];


  constructor(private objectService: objectService) { }

  ngOnInit() {
  	this.getObjectsSearched();
  	this.getObjectsOffered();
  }

  getObjectsSearched(): void {
    this.objectService.getObjectsSearched()
      .subscribe(objectSearched => {this.objectsSearched = objectSearched['data'], console.log(objectSearched['data'])});
  }

  getObjectsOffered(): void {
    this.objectService.getObjectsOffered()
      .subscribe(objectOffered => {this.objectsOffered = objectOffered['data'], console.log(objectOffered['data'])});
  }

}
