import { Injectable } from "@angular/core";
import Feed from "rss-to-json";

@Injectable({
  providedIn: "root"
})
export class RssToJsonWrapperService {
  constructor() {}

  load(url: string) {
    Feed.load("https://learnstartup.net/feed/", (err, rss) => {
      console.log("err:", err);
      console.log("rss:", rss);
    });
  }
}
