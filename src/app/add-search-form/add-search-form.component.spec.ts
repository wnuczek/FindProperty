import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSearchFormComponent } from './add-search-form.component';

describe('AddSearchFormComponent', () => {
  let component: AddSearchFormComponent;
  let fixture: ComponentFixture<AddSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
