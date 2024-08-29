import { createClient } from 'newt-client-js';
import type { BlogPost } from '../types/blog';

export const client = createClient({
  spaceUid: import.meta.env.VITE_SPACE_UID,
  token: import.meta.env.VITE_CDN_API_TOKEN,
  apiType: 'cdn',
});

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { items } = await client.getContents({
    appUid: import.meta.env.VITE_APP_UID,
    modelUid: import.meta.env.VITE_MODEL_UID,
  });
  return items as BlogPost[];
};
