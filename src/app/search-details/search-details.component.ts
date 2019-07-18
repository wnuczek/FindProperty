import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { objectSearched } from '../objectSearched';
import { objectService } from '../object.service';
import { lastSearched } from '../lastSearched'

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.sass']
})
export class SearchDetailsComponent implements OnInit {

  objectSearched = objectSearched;

  constructor(private objectService: objectService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getObjectSearchedDetails();
  }

  getObjectSearchedDetails(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
    this.objectService.getObjectSearchedDetails(id)
      .subscribe(objectSearched => {this.objectSearched = objectSearched['data'], console.log(objectSearched['data'])});
  }

}
