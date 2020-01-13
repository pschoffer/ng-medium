import { Component, ViewChild, ElementRef } from "@angular/core";
import { NgMediumStyles } from "ng-medium/lib/models/styles";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("feedInput", { static: false }) feedInput: ElementRef;
  feedUrl = "https://medium.com/feed/tag/typescript";

  feedStyle: NgMediumStyles = {
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

  updateFeed() {
    this.feedUrl = this.feedInput.nativeElement.value;
  }
}
