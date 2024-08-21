import { createSignal, createEffect, For } from "solid-js";
import {
  NewsContainer,
  NewsTitle,
  NewsList,
  NewsItem,
  NewsImage,
  NewsDate,
  NewsItemTitle,
} from "./NewsSection.styled";

interface NewsItemData {
  title: string;
  link: string;
  pubDate: string;
  enclosure?: {
    url: string;
    type: string;
  };
}

function NewsSection() {
  const [news, setNews] = createSignal<NewsItemData[]>([]);
  const [error, setError] = createSignal<string | null>(null);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

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
      {news().length === 0 ? (
        <p>ニュースを読み込んでいます...</p>
      ) : (
        <NewsList>
          <For each={news()}>
            {(item) => (
              <NewsItem>
                {item.enclosure && item.enclosure.type.startsWith("image/") && (
                  <NewsImage
                    src={item.enclosure.url}
                    alt={stripHtml(item.title)}
                  />
                )}
                <div>
                  <NewsItemTitle>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {stripHtml(item.title)}
                    </a>
                  </NewsItemTitle>
                  <NewsDate>
                    {new Date(item.pubDate).toLocaleDateString("ja-JP")}
                  </NewsDate>
                </div>
              </NewsItem>
            )}
          </For>
        </NewsList>
      )}
    </NewsContainer>
  );
}

export default NewsSection;
