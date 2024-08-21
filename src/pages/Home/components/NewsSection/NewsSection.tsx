import { createSignal, createEffect, For } from "solid-js";
import { NewsContainer, NewsTitle, NewsContent } from "./NewsSection.styled";

interface NewsItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

function NewsSection() {
  const [news, setNews] = createSignal<NewsItem[]>([]);
  const [error, setError] = createSignal<string | null>(null);

  createEffect(async () => {
    try {
      console.log("RSS取得開始");
      const response = await fetch("/.netlify/functions/fetchRss");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const items = await response.json();
      console.log("取得したRSSアイテム:", items);
      setNews(items);
      setError(null);
    } catch (err) {
      console.error("RSS取得エラー:", err);
      setError("RSSフィードの取得中にエラーが発生しました。");
    }
  });

  return (
    <NewsContainer>
      <NewsTitle>Latest News</NewsTitle>
      {error() && <p style="color: red;">{error()}</p>}
      <NewsContent>
        {news().length === 0 ? (
          <p>ニュースを読み込んでいます...</p>
        ) : (
          <For each={news()}>
            {(item) => (
              <div>
                <h3>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
                <p>{item.description}</p>
                <small>{new Date(item.pubDate).toLocaleDateString()}</small>
              </div>
            )}
          </For>
        )}
      </NewsContent>
    </NewsContainer>
  );
}

export default NewsSection;
