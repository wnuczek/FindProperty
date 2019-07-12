import { Component, OnInit } from '@angular/core';

import { lastSearched } from '../lastSearched'

@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.sass']
})
export class LastSearchesComponent implements OnInit {

  lastSearched=lastSearched;

  constructor() { }

  ngOnInit() {
  }

}
