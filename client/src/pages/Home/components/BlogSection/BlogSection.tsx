import { createResource, For } from 'solid-js';
import { A } from '@solidjs/router';
import { fetchBlogPosts } from '../../../../newt/newtClient';
import type { BlogPost } from '../../../../types/blog';
import {
  BlogSectionContainer,
  BlogTitle,
  BlogContent,
  BlogList,
  BlogItem,
  BlogImage,
  BlogItemTitle,
  BlogMeta,
  BlogTags,
  Tag,
  MoreBlogButton,
} from './BlogSection.styled';

const DEFAULT_IMAGE_PATH = '/logo.svg';

function BlogSection() {
  const [posts] = createResource<BlogPost[]>(() => fetchBlogPosts(5));

  return (
    <BlogSectionContainer>
      <BlogTitle>橋爪倶楽部</BlogTitle>
      <BlogContent>
        <BlogList>
          <For each={posts()} fallback={<p>ブログ記事を読み込んでいます...</p>}>
            {(post) => (
              <BlogItem href={`/blog/${post.slug}`}>
                <BlogImage
                  src={post.coverImage?.src || DEFAULT_IMAGE_PATH}
                  alt={post.coverImage?.altText || post.title}
                  isDefault={!post.coverImage}
                />
                <div>
                  <BlogMeta>
                    {new Date(post._sys.updatedAt).toLocaleDateString('ja-JP')}
                  </BlogMeta>
                  <BlogItemTitle>{post.title}</BlogItemTitle>
                </div>
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
        <MoreBlogButton as={A} href="/blog">
          もっと見る
        </MoreBlogButton>
      </BlogContent>
    </BlogSectionContainer>
  );
}

export default BlogSection;
