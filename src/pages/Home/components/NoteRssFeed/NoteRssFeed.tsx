import { createResource, For } from 'solid-js';
import { fetchNoteRssFeed } from '../../../../utils/rssUtils';
import {
  FeedContainer,
  FeedItem,
  FeedThumbnail,
  FeedContent,
  FeedTitle,
  FeedDate,
} from './NoteRssFeed.styled';

export default function NoteRssFeed() {
  const [feed] = createResource(() => fetchNoteRssFeed());

  return (
    <FeedContainer>
      <h2>最新のnote記事</h2>
      <For each={feed()} fallback={<p>読み込み中...</p>}>
        {(item) => (
          <FeedItem>
            <FeedThumbnail src={item.thumbnail} alt={item.title} />
            <FeedContent>
              <FeedTitle
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </FeedTitle>
              <FeedDate>
                {new Date(item.pubDate).toLocaleDateString('ja-JP')}
              </FeedDate>
            </FeedContent>
          </FeedItem>
        )}
      </For>
    </FeedContainer>
  );
}
