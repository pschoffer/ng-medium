import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgMediumFeedComponent } from "./components/ng-medium-feed.component";

@NgModule({
  declarations: [NgMediumFeedComponent],
  imports: [HttpClientModule],
  exports: [NgMediumFeedComponent]
})
export class NgMediumModule {}
