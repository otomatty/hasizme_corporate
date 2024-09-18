import { XMLParser } from 'fast-xml-parser';

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

export async function fetchNoteRssFeed(): Promise<RssItem[]> {
  try {
    const response = await fetch('/fetchRss');
    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '', // プレフィックスを空文字に設定
    });
    const result = parser.parse(xmlData);

    console.log('Parsed XML Result:', result); // パース結果をログに出力

    return result.rss.channel.item.map((item: any) => {
      const thumbnailUrl = item['media:thumbnail'] || '';
      console.log('Item:', item); // 各アイテムをログに出力
      console.log('Thumbnail URL:', thumbnailUrl); // サムネイルURLをログに出力
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        thumbnail: thumbnailUrl,
      };
    });
  } catch (error) {
    console.error('RSSフィードの取得に失敗しました:', error);
    return [];
  }
}
