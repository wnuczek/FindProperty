import { Component, OnInit } from '@angular/core';

import { lastSearched } from '../lastSearched'

@Component({
  selector: 'app-all-searches',
  templateUrl: './all-searches.component.html',
  styleUrls: ['./all-searches.component.sass']
})
export class AllSearchesComponent implements OnInit {

	lastSearched=lastSearched

	p: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
