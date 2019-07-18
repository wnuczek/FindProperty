import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHowItWorksComponent } from './page-how-it-works.component';

describe('PageHowItWorksComponent', () => {
  let component: PageHowItWorksComponent;
  let fixture: ComponentFixture<PageHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
