import { createResource, For } from 'solid-js';
import { useParams, A } from '@solidjs/router';
import { fetchBlogPostsByTag } from '../../newt/newtClient';
import {
  BlogContainer,
  BlogList,
  BlogItem,
  BlogImage,
  BlogTitle,
  BlogMeta,
  BlogTags,
  Tag,
} from '../Blog/Blog.styled';

const DEFAULT_IMAGE_PATH = '/logo.svg';

export default function CategoryPosts() {
  const params = useParams();
  const [posts] = createResource(() => fetchBlogPostsByTag(params.slug));

  return (
    <BlogContainer>
      <h1>{decodeURIComponent(params.slug)} の記事一覧</h1>
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
                      style={{ 'background-color': tag.tagColor || '#f0f0f0' }}
                    >
                      <A href={`/category/${tag.slug}`}>{tag.name}</A>
                    </Tag>
                  ))}
                </BlogTags>
              )}
            </BlogItem>
          )}
        </For>
      </BlogList>
    </BlogContainer>
  );
}
