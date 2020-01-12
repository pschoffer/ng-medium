import { Component, Output, EventEmitter, Input } from "@angular/core";
import { NgMediumService } from "../services/ng-medium.service";
import { Feed } from "../models/feed";

@Component({
  selector: "ng-medium-feed",
  templateUrl: "./ng-medium-feed.component.html",
  styles: []
})
export class NgMediumFeedComponent {
  @Output()
  errorStream = new EventEmitter<Error>();
  @Input()
  set feedUrl(feedUrl: string) {
    this.fetchFeed(feedUrl);
  }

  feed: Feed;

  constructor(private service: NgMediumService) {}

  private fetchFeed(url: string): void {
    this.service.fetchFeed(url).then(
      res => (this.feed = res),
      err => this.errorStream.emit(err)
    );
  }
}
