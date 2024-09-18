import { XMLParser } from 'fast-xml-parser';

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string; // サムネイル画像のURLを追加
}

export async function fetchNoteRssFeed(): Promise<RssItem[]> {
  try {
    const response = await fetch('/fetchRss');
    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false, // 属性を無視しないように設定
    });
    const result = parser.parse(xmlData);

    return result.rss.channel.item.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item['media:thumbnail']?.['@_url'] || '', // サムネイル画像のURLを取得
    }));
  } catch (error) {
    console.error('RSSフィードの取得に失敗しました:', error);
    return [];
  }
}
