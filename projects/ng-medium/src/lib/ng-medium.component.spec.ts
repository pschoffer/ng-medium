import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMediumComponent } from './ng-medium.component';

describe('NgMediumComponent', () => {
  let component: NgMediumComponent;
  let fixture: ComponentFixture<NgMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
