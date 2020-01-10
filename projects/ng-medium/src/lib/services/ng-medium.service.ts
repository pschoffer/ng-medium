import { Injectable } from "@angular/core";
import { Feed } from "../models/feed";

@Injectable({
  providedIn: "root"
})
export class NgMediumService {
  constructor() {}

  fetchFeed(url: string): Feed {
    return null;
  }
}
