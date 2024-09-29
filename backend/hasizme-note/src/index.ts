import { XMLParser } from 'fast-xml-parser';

interface RssItem {
	title: string;
	link: string;
	pubDate: string;
	'media:thumbnail'?: string;
}

export interface Env {
	RSS_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		try {
			const rssUrl = env.RSS_URL;
			if (!rssUrl) {
				throw new Error('RSS_URL is not set in environment variables');
			}

			const response = await fetch(rssUrl);
			if (!response.ok) {
				throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
			}

			const xmlData = await response.text();
			const parser = new XMLParser();
			const result = parser.parse(xmlData);

			if (!result.rss || !result.rss.channel || !result.rss.channel.item) {
				throw new Error('Invalid RSS feed structure');
			}

			const items = Array.isArray(result.rss.channel.item) ? result.rss.channel.item : [result.rss.channel.item];

			const parsedItems = items.map((item: RssItem) => ({
				title: item.title,
				link: item.link,
				pubDate: item.pubDate,
				thumbnail: item['media:thumbnail'] || '',
			}));

			return new Response(JSON.stringify(parsedItems), {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			});
		} catch (error: unknown) {
			console.error('Error in Worker:', error);
			const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
			return new Response(JSON.stringify({ error: 'Internal Server Error', message: errorMessage }), {
				status: 500,
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			});
		}
	},
};

function extractThumbnail(content?: string): string {
	if (!content) return '';
	const imgRegex = /<img.*?src="(.*?)".*?>/;
	const match = content.match(imgRegex);
	return match ? match[1] : '';
}
