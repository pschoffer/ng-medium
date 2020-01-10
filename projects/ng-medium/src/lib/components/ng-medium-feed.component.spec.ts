import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgMediumFeedComponent } from "./ng-medium-feed.component";

describe("NgMediumFeedComponent", () => {
  let component: NgMediumFeedComponent;
  let fixture: ComponentFixture<NgMediumFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgMediumFeedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMediumFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
