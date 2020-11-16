import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogEditComponent } from './dog-edit.component';

describe('DogEditComponent', () => {
  let component: DogEditComponent;
  let fixture: ComponentFixture<DogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
