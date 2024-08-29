import { createResource, Show } from 'solid-js';
import { useParams } from '@solidjs/router';
import { fetchBlogPostBySlug } from '../../newt/newtClient';
import type { BlogPost } from '../../types/blog';
import {
  BlogContainer,
  BlogTitle,
  BlogMeta,
  BlogContent,
  BlogTags,
  Tag,
} from './BlogPost.styled';

export default function BlogPost() {
  const params = useParams();
  const [post] = createResource(() => fetchBlogPostBySlug(params.slug));

  return (
    <BlogContainer>
      <Show when={post()} fallback={<p>読み込み中...</p>}>
        {(loadedPost) => (
          <>
            <BlogTitle>{loadedPost().title}</BlogTitle>
            <BlogMeta>
              {new Date(loadedPost()._sys.updatedAt).toLocaleDateString(
                'ja-JP'
              )}
            </BlogMeta>
            {loadedPost().tags && (
              <BlogTags>
                {loadedPost().tags.map((tag) => (
                  <Tag
                    style={{ 'background-color': tag.tagColor || '#f0f0f0' }}
                  >
                    {tag.name}
                  </Tag>
                ))}
              </BlogTags>
            )}
            <BlogContent innerHTML={loadedPost().body} />
          </>
        )}
      </Show>
    </BlogContainer>
  );
}
