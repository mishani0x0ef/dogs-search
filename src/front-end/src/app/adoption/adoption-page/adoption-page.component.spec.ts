import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPageComponent } from './adoption-page.component';

describe('AdoptionPageComponent', () => {
  let component: AdoptionPageComponent;
  let fixture: ComponentFixture<AdoptionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
