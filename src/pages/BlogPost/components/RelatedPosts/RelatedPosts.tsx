import { For } from 'solid-js';
import { A } from '@solidjs/router';
import type { BlogPost } from '../../../../types/blog';
import {
  RelatedPostsContainer,
  RelatedPostsTitle,
  RelatedPostsList,
  RelatedPostItem,
  RelatedPostImage,
  RelatedPostTitle,
} from './RelatedPosts.styled';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts(props: RelatedPostsProps) {
  return (
    <RelatedPostsContainer>
      <RelatedPostsTitle>関連記事</RelatedPostsTitle>
      <RelatedPostsList>
        <For each={props.posts}>
          {(post) => (
            <RelatedPostItem>
              <A href={`/blog/${post.slug}`}>
                <RelatedPostImage
                  src={post.coverImage?.src || '/default-image.jpg'}
                  alt={post.title}
                />
                <RelatedPostTitle>{post.title}</RelatedPostTitle>
              </A>
            </RelatedPostItem>
          )}
        </For>
      </RelatedPostsList>
    </RelatedPostsContainer>
  );
}
