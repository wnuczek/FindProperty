import { Component, OnInit } from '@angular/core';

import { lastSearched } from '../lastSearched'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  
  lastSearched=lastSearched;

  constructor() { }

  ngOnInit() {
  }

}
