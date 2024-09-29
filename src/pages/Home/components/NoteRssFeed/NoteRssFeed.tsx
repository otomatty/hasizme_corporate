import { createResource, For } from "solid-js";
import { fetchNoteRssFeed } from "../../../../utils/rssUtils";
import Container from "../../../../components/Container/Container";
import {
  FeedContainer,
  FeedMainVisual,
  FeedInner,
  FeedList,
  FeedItem,
  FeedContent,
  FeedTitle,
  FeedDate,
  FeedThumbnail,
  MoreButton,
  NoteLogo,
} from "./NoteRssFeed.styled";

export default function NoteRssFeed() {
  const [feed] = createResource(() => fetchNoteRssFeed());

  return (
    <FeedContainer>
      <Container>
        <FeedInner>
          <FeedMainVisual>
            <p>橋爪商事のオウンドメディア</p>
            <h2>橋爪倶楽部</h2>
            <p>
              <NoteLogo src="/images/note-logo.svg" alt="note" />
              で情報を発信しています
            </p>
          </FeedMainVisual>
          <FeedList>
            <For each={feed()?.slice(0, 3)} fallback={<p>読み込み中...</p>}>
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
                      {new Date(item.pubDate).toLocaleDateString("ja-JP")}
                    </FeedDate>
                  </FeedContent>
                </FeedItem>
              )}
            </For>
            <MoreButton href="/articles">もっと見る</MoreButton>
          </FeedList>
        </FeedInner>
      </Container>
    </FeedContainer>
  );
}
