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
      attributeNamePrefix: '@_',
    });
    const result = parser.parse(xmlData);

    return result.rss.channel.item.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item['media:thumbnail']?.['@_url'] || '',
    }));
  } catch (error) {
    console.error('RSSフィードの取得に失敗しました:', error);
    return [];
  }
}
