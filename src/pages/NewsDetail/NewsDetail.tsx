import { createResource, Show } from 'solid-js';
import { useParams } from '@solidjs/router';
import { fetchNewsItem } from '../../newt/newtClient';
import { NewsItem } from '../../types/news';
import Hero from '../../components/Hero/Hero';
import {
  NewsDetailContainer,
  NewsDetailDate,
  NewsDetailContent,
} from './NewsDetail.styled';

function NewsDetail() {
  const params = useParams();
  const [newsItem] = createResource<NewsItem>(() => fetchNewsItem(params.slug));

  return (
    <>
      <Show when={newsItem()} fallback={<div>読み込み中...</div>}>
        <Hero title={newsItem()!.newsTitle} />
        <NewsDetailContainer>
          <NewsDetailDate>
            {new Date(newsItem()!._sys.createdAt).toLocaleDateString('ja-JP')}
          </NewsDetailDate>
          <NewsDetailContent innerHTML={newsItem()!.content} />
        </NewsDetailContainer>
      </Show>
    </>
  );
}

export default NewsDetail;
