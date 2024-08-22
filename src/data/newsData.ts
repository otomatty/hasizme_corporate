import { NewsItem } from "../types/news";

// プレイスホルダー画像のURL
const placeholderImageUrl =
  "https://via.placeholder.com/300x200.png?text=建設資材ニュース";

export const sampleNewsData: NewsItem[] = [
  {
    title: "新素材「エココンクリート」の開発成功：CO2排出量を30%削減",
    link: "https://example.com/news/1",
    pubDate: "2023-05-01T09:00:00Z",
    enclosure: {
      url: placeholderImageUrl,
      type: "image/png",
    },
  },
  {
    title: "建設現場のデジタル化：IoTセンサーによる資材管理の効率化",
    link: "https://example.com/news/2",
    pubDate: "2023-04-28T14:30:00Z",
    enclosure: {
      url: placeholderImageUrl,
      type: "image/png",
    },
  },
  {
    title: "耐震性能向上：新開発の制振装置が国土交通省の認定を取得",
    link: "https://example.com/news/3",
    pubDate: "2023-04-25T11:15:00Z",
    enclosure: {
      url: placeholderImageUrl,
      type: "image/png",
    },
  },
  {
    title: "サステナビリティへの取り組み：リサイクル建材の需要が急増",
    link: "https://example.com/news/4",
    pubDate: "2023-04-22T16:45:00Z",
    enclosure: {
      url: placeholderImageUrl,
      type: "image/png",
    },
  },
  {
    title: "労働安全衛生：AI搭載ヘルメットによる作業員の健康管理",
    link: "https://example.com/news/5",
    pubDate: "2023-04-19T08:00:00Z",
    enclosure: {
      url: placeholderImageUrl,
      type: "image/png",
    },
  },
  {
    title: "国際規格対応：新しい建設資材品質管理システムの導入事例",
    link: "https://example.com/news/6",
    pubDate: "2023-04-16T10:00:00Z",
    enclosure: {
      url: placeholderImageUrl,
      type: "image/png",
    },
  },
  {
    title: "建設業界のDX：クラウドベースの資材調達プラットフォームが登場",
    link: "https://example.com/news/7",
    pubDate: "2023-04-13T13:45:00Z",
    enclosure: {
      url: placeholderImageUrl,
      type: "image/png",
    },
  },
];

export async function fetchNewsData(): Promise<NewsItem[]> {
  if (import.meta.env.VITE_USE_SAMPLE_DATA === "true") {
    return sampleNewsData;
  } else {
    const response = await fetch(import.meta.env.VITE_NOTE_RSS_URL);
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    const items = xmlDoc.querySelectorAll("item");

    return Array.from(items).map((item) => ({
      title: item.querySelector("title")?.textContent || "",
      link: item.querySelector("link")?.textContent || "",
      pubDate: item.querySelector("pubDate")?.textContent || "",
      enclosure: {
        url: item.querySelector("enclosure")?.getAttribute("url") || "",
        type: item.querySelector("enclosure")?.getAttribute("type") || "",
      },
    }));
  }
}
