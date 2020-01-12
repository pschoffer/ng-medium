import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgMediumFeedComponent } from "./components/ng-medium-feed.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [NgMediumFeedComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [NgMediumFeedComponent]
})
export class NgMediumModule {}
