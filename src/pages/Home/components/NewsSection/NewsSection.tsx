import { createSignal, createEffect, For } from "solid-js";
import {
  NewsContainer,
  NewsTitle,
  NewsContent,
  NewsList,
  NewsItem,
  NewsImage,
  NewsDate,
  NewsItemTitle,
  NewsVisual,
  MoreNewsButton,
} from "./NewsSection.styled";
import { NewsItem as NewsItemType } from "../../../../types/news";
import { sampleNewsData } from "../../../../data/newsData";

const placeholderImageUrl =
  "https://via.placeholder.com/600x400.png?text=橋爪倶楽部";

function NewsSection() {
  const [news, setNews] = createSignal<NewsItemType[]>([]);
  const [error, setError] = createSignal<string | null>(null);

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  createEffect(async () => {
    if (import.meta.env.VITE_USE_SAMPLE_DATA === "true") {
      setNews(sampleNewsData.slice(0, 5));
    } else {
      try {
        console.log("RSS取得開始");
        const response = await fetch("/.netlify/functions/fetchRss");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const items = await response.json();
        console.log("取得したRSSアイテム:", items);
        setNews(items.slice(0, 5)); // 最初の5つの記事のみを使用
        setError(null);
      } catch (err) {
        console.error("RSS取得エラー:", err);
        setError("RSSフィードの取得中にエラーが発生しました。");
      }
    }
  });

  return (
    <NewsContainer>
      <NewsTitle>橋爪倶楽部</NewsTitle>
      <NewsContent>
        <NewsVisual>
          <img src={placeholderImageUrl} alt="橋爪倶楽部" />
        </NewsVisual>
        {error() && <p style="color: red;">{error()}</p>}
        {news().length === 0 ? (
          <p>ニュースを読み込んでいます...</p>
        ) : (
          <NewsList>
            <For each={news()}>
              {(item) => (
                <NewsItem
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NewsImage>
                    {item.enclosure &&
                    item.enclosure.type.startsWith("image/") ? (
                      <img
                        src={item.enclosure.url}
                        alt={stripHtml(item.title)}
                      />
                    ) : (
                      <div class="placeholder">No Image</div>
                    )}
                  </NewsImage>
                  <div>
                    <NewsDate>
                      {new Date(item.pubDate).toLocaleDateString("ja-JP")}
                    </NewsDate>
                    <NewsItemTitle>{stripHtml(item.title)}</NewsItemTitle>
                  </div>
                </NewsItem>
              )}
            </For>
            <MoreNewsButton href="/news">もっと見る</MoreNewsButton>
          </NewsList>
        )}
      </NewsContent>
    </NewsContainer>
  );
}

export default NewsSection;
