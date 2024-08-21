import { XMLParser } from "fast-xml-parser";

export async function fetchRssFeed(url: string) {
  try {
    const response = await fetch(url);
    const xmlText = await response.text();
    const parser = new XMLParser();
    const result = parser.parse(xmlText);
    return result.rss.channel.item;
  } catch (error) {
    console.error("RSS取得エラー:", error);
    return [];
  }
}
