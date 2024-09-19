import { XMLParser } from "fast-xml-parser";
import { sampleRssItems } from "../data/sampleRssData";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

const DEFAULT_THUMBNAIL = "/logo.svg"; // デフォルトのサムネイル画像パスを設定

export async function fetchNoteRssFeed(): Promise<RssItem[]> {
  if (import.meta.env.DEV) {
    // 開発環境の場合、サンプルデータを返す
    return sampleRssItems.map((item) => ({
      ...item,
      thumbnail: DEFAULT_THUMBNAIL,
    }));
  }

  try {
    const response = await fetch("/fetchRss");
    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });
    const result = parser.parse(xmlData);

    console.log("Parsed XML Result:", result);

    return result.rss.channel.item.map((item: any) => {
      const thumbnailUrl = item["media:thumbnail"] || DEFAULT_THUMBNAIL;
      console.log("Item:", item);
      console.log("Thumbnail URL:", thumbnailUrl);
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        thumbnail: thumbnailUrl,
      };
    });
  } catch (error) {
    console.error("RSSフィードの取得に失敗しました:", error);
    return [];
  }
}
