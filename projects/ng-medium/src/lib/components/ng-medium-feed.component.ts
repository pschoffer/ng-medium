import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgMediumService } from "../services/ng-medium.service";
import { Feed } from "../models/feed";

@Component({
  selector: "ng-medium-feed",
  templateUrl: "./ng-medium-feed.component.html",
  styles: []
})
export class NgMediumFeedComponent implements OnInit {
  @Output()
  errorStream = new EventEmitter<Error>();

  feed: Feed;

  constructor(private service: NgMediumService) {}

  ngOnInit() {
    this.service.fetchFeed("https://medium.com/feed/angular-in-depth").then(
      res => (this.feed = res),
      err => this.errorStream.emit(err)
    );
  }
}
