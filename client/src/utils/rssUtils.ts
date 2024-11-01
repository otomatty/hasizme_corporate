interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

const DEFAULT_THUMBNAIL = "/logo.svg"; // デフォルトのサムネイル画像パスを設定

const workerUrl = import.meta.env.VITE_WORKER_URL;

if (!workerUrl) {
  console.error("VITE_WORKER_URL is not set in the environment variables");
}

export async function fetchNoteRssFeed(): Promise<RssItem[]> {
  if (!workerUrl) {
    console.error("Worker URL is not set");
    return [];
  }

  try {
    const response = await fetch(workerUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: RssItem[] = await response.json();
    return data.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item.thumbnail || DEFAULT_THUMBNAIL,
    }));
  } catch (error) {
    console.error("RSSフィードの取得に失敗しました:", error);
    return [];
  }
}
