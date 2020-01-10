import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { NgMediumModule } from "ng-medium";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgMediumModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
