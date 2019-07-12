import { Component, OnInit } from '@angular/core';

import { lastSearched } from '../lastSearched'

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.sass']
})
export class SearchDetailsComponent implements OnInit {

	lastSearched=lastSearched

  constructor() { }

  ngOnInit() {
  }

}
