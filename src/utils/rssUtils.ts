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
  console.log("fetchNoteRssFeed called"); // 関数が呼び出されたことを確認

  if (import.meta.env.DEV) {
    console.log("Development environment detected, returning sample data");
    // 開発環境の場合、サンプルデータを返す
    return sampleRssItems.map((item) => ({
      ...item,
      thumbnail: DEFAULT_THUMBNAIL,
    }));
  }

  try {
    console.log("Fetching RSS feed from /fetchRss");
    const response = await fetch("/fetchRss");
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlData = await response.text();
    console.log("Received XML data:", xmlData.substring(0, 200) + "..."); // 最初の200文字のみログ出力

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });
    const result = parser.parse(xmlData);

    console.log("Parsed XML Result:", JSON.stringify(result, null, 2));

    if (!result.rss || !result.rss.channel || !result.rss.channel.item) {
      throw new Error("Invalid RSS structure");
    }

    return result.rss.channel.item.map((item: any) => {
      const thumbnailUrl = item["media:thumbnail"] || DEFAULT_THUMBNAIL;
      console.log("Processing item:", item.title);
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
    console.error("Error details:", (error as Error).message);
    console.error("Error stack:", (error as Error).stack);
    return [];
  }
}
