import { createResource, For } from 'solid-js';
import { A } from '@solidjs/router';
import { fetchBlogPosts } from '../../newt/newtClient';
import type { BlogPost } from '../../types/blog';
import Hero from '../../components/Hero/Hero';
import Container from '../../components/Container/Container';
import {
  BlogList,
  BlogItem,
  BlogImage,
  BlogTitle,
  BlogMeta,
  BlogTags,
  Tag,
} from './Blog.styled';

// デフォルト画像のパスを指定
const DEFAULT_IMAGE_PATH = '/logo.svg';

export default function Blog() {
  const [posts] = createResource<BlogPost[]>(fetchBlogPosts);

  return (
    <>
      <Hero title="橋爪俱楽部" />
      <Container>
        <BlogList>
          <For each={posts()} fallback={<p>読み込み中...</p>}>
            {(post) => (
              <BlogItem>
                <A href={`/blog/${post.slug}`}>
                  <BlogImage
                    src={post.coverImage?.src || DEFAULT_IMAGE_PATH}
                    alt={post.coverImage?.altText || post.title}
                    isDefault={!post.coverImage}
                  />
                  <BlogTitle>{post.title}</BlogTitle>
                </A>
                <BlogMeta>
                  {new Date(post._sys.updatedAt).toLocaleDateString('ja-JP')}
                </BlogMeta>
                {post.tags && (
                  <BlogTags>
                    {post.tags.map((tag) => (
                      <Tag
                        style={{
                          'background-color': tag.tagColor || '#f0f0f0',
                        }}
                      >
                        {tag.name}
                      </Tag>
                    ))}
                  </BlogTags>
                )}
              </BlogItem>
            )}
          </For>
        </BlogList>
      </Container>
    </>
  );
}
