import { createResource, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import {
  NewsContainer,
  NewsContent,
  NewsList,
  NewsItem,
  NewsItemTitle,
  NewsDate,
  MoreNewsButton,
  NewsItemDetails,
} from "./NewsSection.styled";
import { NewsItem as NewsItemType } from "../../../../types/news";
import { fetchNewsItems } from "../../../../newt/newtClient";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

function NewsSection() {
  const [news] = createResource<NewsItemType[]>(() => fetchNewsItems(5));

  return (
    <NewsContainer>
      <SectionTitle id="news-title" title="お知らせ" align="center" />
      <NewsContent>
        <Show
          when={!news.loading}
          fallback={<p>ニュースを読み込んでいます...</p>}
        >
          <NewsList>
            <For each={news()}>
              {(item) => (
                <NewsItem>
                  <NewsItemDetails as={A} href={`/news/${item.slug}`}>
                    <NewsDate>
                      {new Date(item._sys.createdAt).toLocaleDateString(
                        "ja-JP"
                      )}
                    </NewsDate>
                    <NewsItemTitle>{item.newsTitle}</NewsItemTitle>
                  </NewsItemDetails>
                </NewsItem>
              )}
            </For>
            <MoreNewsButton href="/news">もっと見る</MoreNewsButton>
          </NewsList>
        </Show>
      </NewsContent>
    </NewsContainer>
  );
}

export default NewsSection;
