import { Injectable } from "@angular/core";
import { Feed } from "../models/feed";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MediumFeed } from "../models/mediumFeed";

const rssConverter = "https://api.rss2json.com/v1/api.json";
const rssParam = "rss_url";

@Injectable({
  providedIn: "root"
})
export class NgMediumService {
  constructor(private http: HttpClient) {}

  fetchFeed(targetUrl: string): Promise<Feed> {
    const params = new HttpParams().set(rssParam, targetUrl);

    return this.http
      .get<MediumFeed>(rssConverter, { params })
      .toPromise()
      .then(result => this.mapResponse(result));
  }
  private mapResponse(input: MediumFeed): Feed {
    const feed: Feed = input.feed;
    if (feed) {
      feed.items = input.items;
    }
    return feed;
  }
}
