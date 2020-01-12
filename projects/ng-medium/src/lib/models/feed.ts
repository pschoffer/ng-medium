import { Item } from "./item";

export class Feed {
  title: string;
  description?: string;
  author?: string;
  image?: string;
  link?: string;
  url?: string;
  items?: Item[];
}
