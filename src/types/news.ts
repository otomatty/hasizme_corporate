export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  enclosure?: {
    url: string;
    type: string;
  };
}
