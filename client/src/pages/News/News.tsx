import { createResource, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import { fetchNewsItems } from '../../newt/newtClient';
import { NewsItem } from '../../types/news';
import Hero from '../../components/Hero/Hero';
import {
  NewsContainer,
  NewsList,
  NewsListItem,
  NewsItemTitle,
  NewsDate,
  NewsExcerpt,
  LoadingMessage,
} from './News.styled';

function News() {
  const [news] = createResource<NewsItem[]>(() => fetchNewsItems());

  return (
    <>
      <Hero title="お知らせ一覧" />
      <NewsContainer>
        <Show
          when={!news.loading}
          fallback={
            <LoadingMessage>ニュースを読み込んでいます...</LoadingMessage>
          }
        >
          <NewsList>
            <For each={news()}>
              {(item) => (
                <NewsListItem>
                  <A href={`/news/${item.slug}`}>
                    <NewsDate>
                      {new Date(
                        item._sys?.createdAt ?? Date.now()
                      ).toLocaleDateString('ja-JP')}
                    </NewsDate>
                    <NewsItemTitle>{item.newsTitle}</NewsItemTitle>
                    <NewsExcerpt>
                      {item.content?.slice(0, 100) ?? ''}...
                    </NewsExcerpt>
                  </A>
                </NewsListItem>
              )}
            </For>
          </NewsList>
        </Show>
      </NewsContainer>
    </>
  );
}

export default News;
