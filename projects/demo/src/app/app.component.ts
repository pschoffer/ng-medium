import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("feedInput", { static: false }) feedInput: ElementRef;
  feedUrl = "https://medium.com/feed/tag/angular-4";

  updateFeed() {
    this.feedUrl = this.feedInput.nativeElement.value;
  }
}
