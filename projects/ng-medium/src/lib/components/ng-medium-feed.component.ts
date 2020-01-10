import { Component, OnInit } from "@angular/core";
import { RssToJsonWrapperService } from "../services/rss-to-json-wrapper.service";

@Component({
  selector: "ng-medium-feed",
  template: `
    <p>
      ng-medium works!
    </p>
  `,
  styles: []
})
export class NgMediumFeedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
