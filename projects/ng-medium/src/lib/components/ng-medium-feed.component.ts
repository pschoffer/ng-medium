import { Component, Output, EventEmitter, Input } from "@angular/core";
import { NgMediumService } from "../services/ng-medium.service";
import { Feed } from "../models/feed";
import { NgMediumStyles } from "../models/styles";

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
  private _styles: NgMediumStyles;
  @Input()
  set styles(styles: NgMediumStyles) {
    const completedStyles = this.appendDefaultStyles(styles);
    this._styles = completedStyles;
  }
  get styles(): NgMediumStyles {
    return this._styles;
  }

  feed: Feed;

  constructor(private service: NgMediumService) {
    this._styles = this.appendDefaultStyles(null);
  }

  private fetchFeed(url: string): void {
    this.service.fetchFeed(url).then(
      res => (this.feed = res),
      err => this.errorStream.emit(err)
    );
  }

  private appendDefaultStyles(input: NgMediumStyles): NgMediumStyles {
    const defaultStyle: NgMediumStyles = {
      feedContainer: {
        "text-align": "center",
        background: "#d6d3d3"
      },
      feedTitle: {
        "font-size": "2rem",
        padding: "2em"
      },
      allItemsContainer: {
        display: "flex",
        "flex-wrap": "wrap",
        "justify-content": "space-evenly"
      },
      itemContainer: {
        width: "32%",
        "max-height": "30em",
        display: "flex",
        "flex-direction": "column",
        background: "#c1bfbf",
        margin: "1em 0",
        "border-radius": "1em",
        overflow: "hidden"
      },
      itemThumbnailContainer: {
        "flex-grow": "1",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-evenly"
      },
      itemThumbnail: {
        "max-width": "100%",
        "max-height": "100%"
      },
      itemTitle: {
        padding: "1em 0"
      }
    };

    if (input) {
      Object.keys(defaultStyle).forEach(section => {
        if (input[section]) {
          defaultStyle[section] = input[section];
        }
      });
    }

    return defaultStyle;
  }
}
