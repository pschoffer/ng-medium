import { Component, OnInit } from "@angular/core";
import { NgMediumService } from "../services/ng-medium.service";

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
  constructor() {
    // service.fetchFeed("https://medium.com/feed/angular-in-depth").then(
    //   res => console.log(res),
    //   err => console.log(err)
    // );
  }

  ngOnInit() {}
}
