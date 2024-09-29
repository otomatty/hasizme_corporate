import { createResource, For } from "solid-js";
import { fetchNoteRssFeed } from "../../utils/rssUtils";
import Hero from "../../components/Hero/Hero";
import Container from "../../components/Container/Container";
import {
  BlogContainer,
  BlogList,
  BlogItem,
  BlogImage,
  BlogTitle,
  BlogMeta,
  // BlogExcerpt,
  ReadMoreLink,
} from "./Blog.styled";

const DEFAULT_IMAGE_PATH = "/logo.svg";

export default function Blog() {
  const [feed] = createResource(() => fetchNoteRssFeed());

  return (
    <>
      <Hero title="橋爪倶楽部" />
      <BlogContainer>
        <Container>
          <BlogList>
            <For each={feed()} fallback={<p>記事を読み込んでいます...</p>}>
              {(item) => (
                <BlogItem>
                  <BlogImage
                    src={item.thumbnail || DEFAULT_IMAGE_PATH}
                    alt={item.title}
                    isDefault={!item.thumbnail}
                  />
                  <BlogTitle>{item.title}</BlogTitle>
                  <BlogMeta>
                    公開日: {new Date(item.pubDate).toLocaleDateString("ja-JP")}
                  </BlogMeta>
                  {/* <BlogExcerpt>
                    {item.description
                      ? item.description.slice(0, 100) + "..."
                      : "記事の詳細はリンク先でご覧ください。"}
                  </BlogExcerpt> */}
                  <ReadMoreLink
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    続きを読む
                  </ReadMoreLink>
                </BlogItem>
              )}
            </For>
          </BlogList>
        </Container>
      </BlogContainer>
    </>
  );
}
