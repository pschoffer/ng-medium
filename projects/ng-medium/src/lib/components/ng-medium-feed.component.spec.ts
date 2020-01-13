import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { NgMediumFeedComponent } from "./ng-medium-feed.component";
import { NgMediumService } from "../services/ng-medium.service";
import { Feed } from "../models/feed";
import { By } from "@angular/platform-browser";

describe("NgMediumFeedComponent", () => {
  let component: NgMediumFeedComponent;
  let fixture: ComponentFixture<NgMediumFeedComponent>;
  let ngMediumServiceMock: jasmine.SpyObj<NgMediumService>;

  beforeEach(async(() => {
    ngMediumServiceMock = jasmine.createSpyObj("NgMediumService", [
      "fetchFeed"
    ]);

    TestBed.configureTestingModule({
      declarations: [NgMediumFeedComponent],
      providers: [{ provide: NgMediumService, useValue: ngMediumServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(NgMediumFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Feed fetching", () => {
    it("should emit error on error", done => {
      const errorToBeReturned = new Error("Maaan! Get your stuff together.");
      ngMediumServiceMock.fetchFeed.and.returnValue(
        Promise.reject(errorToBeReturned)
      );

      component.errorStream.subscribe(err => {
        expect(err).toBe(errorToBeReturned);
        done();
      });

      component.feedUrl = "";
    });

    it("should set Feed on sucess", fakeAsync(() => {
      const returnedFeed = new Feed();
      ngMediumServiceMock.fetchFeed.and.returnValue(
        Promise.resolve(returnedFeed)
      );

      component.feedUrl = "";
      tick();

      expect(component.feed).toBe(returnedFeed);
    }));
  });

  describe("Feed content", () => {
    const title = "Some Awesome Feed";
    const description = "A slightly less awesome description";

    it("should have title", () => {
      component.feed = { title, description };
      fixture.detectChanges();

      const titleDe = fixture.debugElement.query(
        By.css(".ng-medium-feed-title")
      );

      expect(titleDe).toBeTruthy();
      expect(titleDe.nativeElement.innerText).toBe(title);
    });

    it("should have items", () => {
      component.feed = {
        title,
        description,
        items: [{ title: "item1" }, { title: "item2" }]
      };
      fixture.detectChanges();

      const itemContainerDes = fixture.debugElement.queryAll(
        By.css(".ng-medium-item-container")
      );

      expect(itemContainerDes.length).toBe(component.feed.items.length);
    });
  });
});
