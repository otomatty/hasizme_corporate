import { createResource, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import {
  NewsContainer,
  NewsTitle,
  NewsContent,
  NewsList,
  NewsItem,
  NewsItemTitle,
  NewsDate,
  MoreNewsButton,
} from './NewsSection.styled';
import { NewsItem as NewsItemType } from '../../../../types/news';
import { fetchNewsItems } from '../../../../newt/newtClient';

function NewsSection() {
  const [news] = createResource<NewsItemType[]>(() => fetchNewsItems(5));

  return (
    <NewsContainer>
      <NewsTitle>お知らせ</NewsTitle>
      <NewsContent>
        <Show
          when={!news.loading}
          fallback={<p>ニュースを読み込んでいます...</p>}
        >
          <NewsList>
            <For each={news()}>
              {(item) => (
                <NewsItem as={A} href={`/news/${item.slug}`}>
                  <div>
                    <NewsDate>
                      {new Date(item._sys.createdAt).toLocaleDateString(
                        'ja-JP'
                      )}
                    </NewsDate>
                    <NewsItemTitle>{item.newsTitle}</NewsItemTitle>
                  </div>
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
