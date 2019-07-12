import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSearchesComponent } from './all-searches.component';

describe('AllSearchesComponent', () => {
  let component: AllSearchesComponent;
  let fixture: ComponentFixture<AllSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
