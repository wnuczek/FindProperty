import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSearchFormValidationComponent } from './add-search-form-validation.component';

describe('AddSearchFormValidationComponent', () => {
  let component: AddSearchFormValidationComponent;
  let fixture: ComponentFixture<AddSearchFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSearchFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSearchFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
