import { Component, OnInit } from '@angular/core';

import { lastSearched } from '../lastSearched';

@Component({
  selector: 'app-add-search-form',
  templateUrl: './add-search-form.component.html',
  styleUrls: ['./add-search-form.component.sass']
})
export class AddSearchFormComponent implements OnInit {

	lastSearched=lastSearched

  constructor() { }

  ngOnInit() {
  }

}
